import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import {
  Swiper,
  SwiperSlide,
  Pagination,
} from '@/components/ui/carousel/carousel';
import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import SimpleBar from '@/components/ui/simplebar';
import { Textarea } from '@/components/ui/textarea';
import NextBtn from '@/components/ui/carousel/next-btn';
import PrevBtn from '@/components/ui/carousel/prev-btn';
import {
  PiChatTextBold,
  PiXBold,
  PiHeartBold,
  PiUsers,
  PiShareFat,
} from 'react-icons/pi';

export type CommentPropsType = {
  commentData: {
    user: string;
    userImg: string;
    userComment: string;
  };
};

export default function PostsModal({ data, onClose }: any) {
  return (
    <div className="round grid grow grid-cols-1 gap-0 overflow-hidden rounded-none bg-white dark:bg-gray-100/90 dark:backdrop-blur-xl lg:grid-cols-12 lg:rounded-xl">
      <div className="relative h-full lg:col-span-7">
        <Button
          rounded="pill"
          className="absolute right-5 top-5 z-10 h-[30px] w-[30px] p-1 lg:left-5 2xl:hidden"
          onClick={onClose}
        >
          <PiXBold className="w-5" />
        </Button>
        {data.type === 'image' && (
          <div className="aspect-[700/800] sm:aspect-auto">
            <Image
              src={data.image}
              alt="random images"
              fill
              sizes="(max-width: 768px) 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {data.type === 'gallery' && <ModalCardSlider data={data} />}
        {data.type === 'video' && <ModalCardVideo data={data} />}
      </div>

      <div className="flex w-full flex-col justify-between p-5 lg:col-span-5 xl:p-6 2xl:p-8">
        <ModalCardText />
        <SimpleBar className="lg:h-[280px]">
          {data.commentData.map((item: any) => (
            <ModalCardComment key={item.user} commentData={item} />
          ))}
        </SimpleBar>
        <ModalCommentBox />
      </div>
    </div>
  );
}

function ModalCardSlider({ data }: any) {
  return (
    <Swiper
      speed={500}
      spaceBetween={0}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      className="profileModalCarousel h-full min-h-[420px]"
    >
      {data.images.slice(0, 3).map((item: string, index: number) => (
        <SwiperSlide key={`profile-modal-slider-${index}`}>
          <div className="relative h-full">
            <Image
              src={item}
              alt="random images"
              fill
              priority
              sizes="(max-width: 768px) 100vw"
              className="aspect-[700/800] h-full w-full object-cover sm:aspect-auto"
            />
          </div>
        </SwiperSlide>
      ))}
      <NextBtn />
      <PrevBtn />
    </Swiper>
  );
}

function ModalCardVideo({ data }: any) {
  return (
    <div className="flex h-full items-center bg-black dark:bg-gray-50">
      <ReactPlayer url={data.video.link} controls width="100%" />
    </div>
  );
}

function ModalCardText() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Avatar
            name="Andrei Jackson"
            className="bg-[#F1A74F] tracking-wider text-white"
            initials="AJ"
            src="https://randomuser.me/api/portraits/women/2.jpg"
          />
          <div>
            <Title as="h2" className="text-base text-gray-1000">
              Andrei Jackson
            </Title>
            <Text className="text-xs text-gray-500 dark:text-gray-500">
              Yesterday at 10:25
            </Text>
          </div>
        </div>
        <Button color="primary" className="font-500 ms-auto text-white">
          <PiUsers className="h-auto w-[18px]" />
          <span className="ms-1.5 inline-block">Follow</span>
        </Button>
      </div>
      <Text className="py-5 text-sm leading-6 text-gray-500 dark:text-gray-1000 lg:py-7">
        Hi 👋🏻😊 The passage experienced a surge in popularity during the 1960s
        😜 when Leeriest used it on their dry-transfer sheets, and again during
        the 90s 👋🏻😊 as desktop publishers bundled 😜 the text with their
        software.
      </Text>
      <div className="flex items-center justify-between gap-5 border-b border-b-gray-100 pb-6 dark:border-b-gray-400">
        <div className="flex items-center gap-5">
          <Button
            variant="text"
            className="font-500 group ms-auto h-auto p-0 text-gray-700"
          >
            <PiHeartBold className="h-auto w-4 text-gray-500 dark:group-hover:text-white" />
            <span className="ms-1.5 inline-block">Like</span>
          </Button>
          <Button
            variant="text"
            className="font-500 group ms-auto h-auto p-0 text-gray-700"
          >
            <PiChatTextBold className="h-auto w-4 text-gray-500 dark:group-hover:text-white" />
            <span className="ms-1.5 inline-block">Comment</span>
          </Button>
        </div>
        <Button
          variant="text"
          className="font-500 group ms-auto h-auto p-0 text-gray-700"
        >
          <PiShareFat className="h-auto w-4 text-gray-500 dark:group-hover:text-white" />
          <span className="ms-1.5 inline-block">Share</span>
        </Button>
      </div>
    </>
  );
}

function ModalCardComment({ commentData }: CommentPropsType) {
  const renderHtml = (data: string) => {
    return { __html: data };
  };
  return (
    <div className="flex items-start gap-4 pr-3 pt-6">
      <Avatar
        name="Marie Fanned"
        className="bg-[#F1A74F] font-medium tracking-wider text-white"
        src={commentData.userImg}
      />
      <div>
        <Title as="h2" className="text-sm font-medium text-gray-1000">
          <Link href={'/'} className="inline-block hover:underline">
            {commentData.user}
          </Link>
        </Title>
        <span
          className="mt-1.5 block text-sm font-normal text-gray-800 [&_a]:text-primary-light"
          dangerouslySetInnerHTML={renderHtml(commentData.userComment)}
        />
        <div className="mt-3 flex gap-6">
          <LikeCounter />
          <Button variant="text" size="sm" className="h-auto p-0 font-medium">
            Reply
          </Button>
          <Text className="text-xs font-normal">7 hours</Text>
        </div>
      </div>
    </div>
  );
}

function ModalCommentBox() {
  return (
    <div className="relative mt-8">
      <Textarea
        variant="flat"
        size="sm"
        placeholder="Share your thoughts"
        className="w-full resize-none"
        textareaClassName="resize-none py-2 text-sm h-[90px]"
      />
      <Button
        variant="text"
        color="primary"
        className="absolute bottom-2 ltr:right-2 rtl:left-2"
      >
        Post
      </Button>
    </div>
  );
}

function LikeCounter() {
  const [count, setCount] = useState(false);
  return (
    <Button
      variant="text"
      size="sm"
      color={count ? 'primary' : 'DEFAULT'}
      className="h-auto p-0 font-medium"
      onClick={() => setCount(() => !count)}
    >
      <span className="me-1.5">{count ? 2 : 1}</span> Like
    </Button>
  );
}
