import Image from 'next/image';
import WidgetCard from '@/components/cards/widget-card';
import { Title, Text } from '@/components/ui/text';
import { PiImageDuotone } from 'react-icons/pi';

const activities = [
  {
    title: 'Today',
    threads: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
        username: 'Denny Albuz',
        logMessage: 'added new file in',
        alias: 'photos',
        date: '09:28 PM',
        files: ['Untitled photo.jpg', 'brief-feature-chats.png'],
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
        username: 'Monty Prismic',
        logMessage: 'edited a file',
        alias: '',
        date: '01:28 PM',
        files: ['Saraly statement.doc'],
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
        username: 'Jacky Andersion',
        logMessage: 'uploaded a new file',
        alias: '',
        date: '11:15 AM',
        files: ['Employee.xml'],
      },
    ],
  },
  {
    title: 'Yesterday',
    threads: [
      {
        avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
        username: 'Wolbu fenny',
        logMessage: 'added new file in',
        alias: 'photos',
        date: '06:44 PM',
        files: ['Collage photo.png', 'Certificates.png'],
      },
    ],
  },
];

export function ActivityThreadCard({ thread }: any) {
  const { avatar, username, logMessage, alias, date, files } = thread;
  return (
    <div className="relative flex items-start gap-x-2.5 pb-8 before:absolute before:top-0 before:z-0 before:h-full before:w-[1px] before:bg-gray-300 last:pb-0 last:before:hidden ltr:before:left-[17px] rtl:before:right-[17px]">
      <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          className="aspect-square object-cover"
          src={avatar}
          alt={username}
          fill
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className="">
        <Text className="text-sm font-normal text-gray-500">
          <Text as="span" className="font-medium capitalize text-gray-700">
            {username}
          </Text>{' '}
          {logMessage}{' '}
          {alias && (
            <Text as="span" className="font-medium capitalize text-gray-700">
              {alias}
            </Text>
          )}
        </Text>
        <Text as="span" className="text-xs text-gray-500">
          {date}
        </Text>
        {files.map((file: string) => (
          <div
            key={file}
            className="mt-2 flex items-center gap-2.5 rounded-lg border border-gray-300 px-2 py-1.5"
          >
            <PiImageDuotone className="h-5 w-5  text-[#0761D1]" />
            <Text as="span" className="text-sm text-gray-700">
              {file}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActivityThreads({
  title,
  threads,
}: {
  title: string;
  threads: object[];
}) {
  return (
    <div className="relative mb-4 last:mb-0">
      <Text className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-700 2xl:text-base">
        {title}
      </Text>
      <div>
        {threads.map((item, index) => (
          <ActivityThreadCard key={`singleThread-${index}`} thread={item} />
        ))}
      </div>
    </div>
  );
}

export default function RecentActivities({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <Title
        as="h3"
        className="mb-3 text-lg font-semibold text-gray-900 xl:text-xl 2xl:mb-5"
      >
        Recent Activities
      </Title>
      <WidgetCard title="" headerClassName="hidden">
        {activities.map((activity, index) => (
          <ActivityThreads
            key={`thread-${index}`}
            title={activity.title}
            threads={activity.threads}
          />
        ))}
      </WidgetCard>
    </div>
  );
}
