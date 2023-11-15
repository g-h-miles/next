'use client';

import Link from 'next/link';
import { RefObject, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import cn from '@/utils/class-names';
import { Popover } from '@/components/ui/popover';
import { Title, Text } from '@/components/ui/text';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { routes } from '@/config/routes';
import { useMedia } from '@/hooks/use-media';
import SimpleBar from '@/components/ui/simplebar';
import { PiCheck } from 'react-icons/pi';

dayjs.extend(relativeTime);

const data = [
  {
    id: 1,
    message: `It is nice to be chatting with you. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
    ],
    name: 'Wade Warren',
    unRead: true,
    sendTime: '2023-06-01T09:35:31.820Z',
  },
  {
    id: 2,
    message: ` Oh... Let's move on to something else for a bit. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
    ],
    name: 'Jane Cooper',
    unRead: true,
    sendTime: '2023-05-30T09:35:31.820Z',
  },
  {
    id: 3,
    message: `You: I never received any phone calls about it. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-12.webp',
    ],
    name: 'Leslie Alexander',
    unRead: false,
    sendTime: '2023-06-01T09:35:31.820Z',
  },
  {
    id: 4,
    message: `You: But you'll need to type in every possible word. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-07.webp',
    ],
    name: 'John Doe',
    unRead: false,
    sendTime: '2023-05-21T09:35:31.820Z',
  },
  {
    id: 5,
    message: `They were delighted and set to work immediately. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-14.webp',
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-13.webp',
    ],
    name: 'Design & Frontend',
    unRead: true,
    sendTime: '2023-06-01T09:35:31.820Z',
  },
  {
    id: 6,
    message: `Hows going everything in our laravel project. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
    ],
    name: 'Laravel',
    unRead: true,
    sendTime: '2023-05-15T09:35:31.820Z',
  },
  {
    id: 7,

    name: 'WordPress',
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-08.webp',
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-09.webp',
    ],
    unRead: false,
    sendTime: '2023-05-16T09:35:31.820Z',
  },
  {
    id: 8,
    message: `You: which is actually pretty clever and funny, inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp',
    ],
    name: 'Jenny Doe',
    unRead: false,
    sendTime: '2023-05-01T09:35:31.820Z',
  },
  {
    id: 9,
    message: `You could try ELIZA bot, it was a software tween herself. Omnis,
        quidem non. Sint inventore quasi temporibus architecto eaque,
        natus aspernatur minus?`,
    avatar: [
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
    ],
    name: 'Bruce Warren',
    unRead: true,
    sendTime: '2023-04-01T09:35:31.820Z',
  },
];

function MessagesList({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-[320px] text-left rtl:text-right sm:w-[360px] 2xl:w-[420px]">
      <div className="mb-2 flex items-center justify-between ps-6">
        <Title as="h5">Messages</Title>
        <Link
          href={routes.support.inbox}
          onClick={() => setIsOpen(false)}
          className="hover:underline"
        >
          View all
        </Link>
      </div>
      <SimpleBar className="max-h-[406px]">
        <div className="grid grid-cols-1 ps-4">
          {data.map((item) => (
            <div
              key={item.name + item.id}
              className="group grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] gap-2.5 rounded-md px-2 py-2.5 pe-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-50"
            >
              <div className={cn('relative', item.avatar.length > 1 && 'me-1')}>
                <Avatar
                  src={item.avatar[0]}
                  name={item.name}
                  className={cn(
                    item.avatar.length > 1 &&
                      'relative -end-1 -top-0.5 !h-9 !w-9'
                  )}
                />
                {item.avatar.length > 1 && (
                  <Avatar
                    src={item.avatar[1]}
                    name={item.name}
                    className="absolute -bottom-1 end-1.5 !h-9 !w-9 border-2 border-gray-0 dark:border-gray-100"
                  />
                )}
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center">
                <div className="w-full">
                  <Title as="h6" className="mb-0.5 text-sm font-semibold">
                    {item.name}
                  </Title>
                  <div className="flex">
                    <Text className="w-10/12 truncate pe-7 text-xs text-gray-500">
                      {item.message}
                    </Text>
                    <span className="ms-auto whitespace-nowrap pe-8 text-xs text-gray-500">
                      {dayjs(item.sendTime).fromNow(true)}
                    </span>
                  </div>
                </div>
                <div className="ms-auto flex-shrink-0">
                  {item.unRead ? (
                    <Badge
                      renderAsDot
                      size="lg"
                      color="primary"
                      className="scale-90"
                    />
                  ) : (
                    <span className="inline-block rounded-full bg-gray-100 p-0.5 dark:bg-gray-50">
                      <PiCheck className="h-auto w-[9px]" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}

export default function MessagesDropdown({
  children,
}: {
  children: JSX.Element & { ref?: RefObject<any> };
}) {
  const isMobile = useMedia('(max-width: 480px)', false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      content={() => <MessagesList setIsOpen={setIsOpen} />}
      shadow="sm"
      placement={isMobile ? 'bottom' : 'bottom-end'}
      className="z-50 pb-6 pe-6 ps-0 pt-5 dark:bg-gray-100 [&>svg]:hidden [&>svg]:dark:fill-gray-100 sm:[&>svg]:inline-flex"
    >
      {children}
    </Popover>
  );
}
