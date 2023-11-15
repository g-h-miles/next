'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PiXBold } from 'react-icons/pi';
import { Badge } from '@/components/ui/badge';
import { Title } from '@/components/ui/text';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import cn from '@/utils/class-names';
import PostFeed from '@/app/shared/profile/post-feed';
import FollowerModal from '@/app/shared/profile/follower-modal';
import { postData, followersData, followingData } from '@/data/profile-data';

const tabs = [
  { id: 'posts', count: postData.length },
  { id: 'followers', count: followersData.length },
  { id: 'following', count: followingData.length },
];

export default function ProfileDetails() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: 'Followers',
    data: followersData,
  });
  const [active, setActive] = useState(tabs[0].id);

  useEffect(() => {
    setOpen(() => false);
  }, [pathname]);

  // handle follower and following modal open
  function handleTabClick(id: string) {
    if (id === 'followers') {
      setModalData({ title: 'Followers', data: followersData });
    } else if (id === 'following') {
      setModalData({ title: 'Following', data: followingData });
    }
    setOpen(() => true);
    setActive(() => id);
  }

  return (
    <>
      <div className="mx-auto mt-10 w-full max-w-[1294px] @2xl:mt-7 @6xl:mt-0">
        <div className="-mx-4 flex items-center justify-around border-b-2 border-b-gray-200 font-medium sm:mx-0 md:justify-start md:gap-8">
          {tabs.map((item) => (
            <button
              key={item.id}
              className={cn(
                'relative pb-4 font-semibold capitalize text-gray-500 focus:outline-none @4xl:pb-5 md:px-4',
                active === item.id && 'text-gray-1000'
              )}
              onClick={() => handleTabClick(item.id)}
            >
              <span>{item.id}</span>
              <Badge
                variant="flat"
                className="ms-2 border border-gray-300 bg-gray-200 p-0.5 px-1.5"
              >
                {item.count}
              </Badge>
              {active === 'posts' && item.id === 'posts' && (
                <span className="absolute inset-x-0 -bottom-0.5 z-10 h-0.5 bg-gray-1000"></span>
              )}
            </button>
          ))}
        </div>
        <PostFeed />
      </div>

      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setActive(() => 'posts');
        }}
        overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg"
        containerClassName="dark:bg-gray-100 max-w-[460px] rounded-md p-5 lg:p-6"
      >
        <div className="flex items-center justify-between pb-2 lg:pb-3">
          <Title
            as="h3"
            className="text-lg font-semibold text-gray-900 xl:text-xl"
          >
            {modalData.title}
          </Title>
          <Button
            variant="text"
            onClick={() => {
              setOpen(false);
              setActive(() => 'posts');
            }}
            className="h-auto px-1 py-1"
          >
            <PiXBold className="h-5 w-5 text-base" />
          </Button>
        </div>
        {modalData && <FollowerModal data={modalData.data} />}
      </Modal>
    </>
  );
}
