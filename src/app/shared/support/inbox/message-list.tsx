'use client';

import { useAtom } from 'jotai';
import { atomWithReset, atomWithStorage } from 'jotai/utils';
import { useState, useEffect, useRef } from 'react';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { PiCaretDownBold, PiChats, PiPaperclipLight } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import cn from '@/utils/class-names';
import Select from '@/components/ui/select';
import { useHover } from '@/hooks/use-hover';
import { useMedia } from '@/hooks/use-media';
import { Title } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ActionIcon } from '@/components/ui/action-icon';
import { getRelativeTime } from '@/utils/get-relative-time';
import rangeMap from '@/utils/range-map';
import { routes } from '@/config/routes';
import {
  messages,
  MessageType,
  supportStatuses,
  SupportStatusType,
  supportTypes,
} from '@/data/support-inbox';
import { LineGroup, Skeleton } from '@/components/ui/skeleton';
import SimpleBar from '@/components/ui/simplebar';

interface MessageItemProps {
  message: MessageType;
  className?: string;
}

export const messageIdAtom = atomWithStorage('messageId', '');
export const dataAtom = atomWithReset<MessageType[]>(messages);

export function MessageItem({ className, message }: MessageItemProps) {
  const hoverRef = useRef(null);
  const router = useRouter();
  const isHover = useHover(hoverRef);
  const [data, setData] = useAtom(dataAtom);
  const isMobile = useMedia('(max-width: 1023px)', false);

  const [messageId, setMessageId] = useAtom(messageIdAtom);

  const isActive = messageId === message.id;

  const handleItemChange = (itemId: string) => {
    const updatedItems = data.map((item) =>
      item.id === itemId ? { ...item, selected: !item.selected } : item
    );
    setData(updatedItems);
  };

  const url = routes.support.messageDetails(messageId);

  useEffect(() => {
    setMessageId(data[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handleChange() {
    setMessageId(message.id);
    // router.push(url);
    if (isMobile) {
      router.push(url);
    }
  }

  return (
    <div
      ref={hoverRef}
      onClick={handleChange}
      className={cn(
        className,
        'grid cursor-pointer grid-cols-[24px_1fr] items-start gap-3 border-t border-gray-200 p-5',
        isActive && 'border-t-2 border-t-primary dark:bg-gray-100/70'
      )}
    >
      {message.selected || isHover ? (
        <Checkbox
          {...(isActive && {
            inputClassName:
              'bg-primary-lighter border-primary dark:bg-gray-0 dark:border-gray-200',
          })}
          {...(isActive &&
            message.selected && {
              variant: 'flat',
              color: 'primary',
            })}
          checked={message.selected}
          onChange={() => handleItemChange(message.id)}
        />
      ) : (
        <ActionIcon
          variant="flat"
          size="sm"
          className={cn('h-6 w-6 p-0', isActive && 'bg-primary text-white')}
        >
          {message.supportType === supportTypes.Chat && (
            <PiChats className="h-3.5 w-3.5" />
          )}
          {message.supportType === supportTypes.Email && (
            <HiOutlineAdjustmentsHorizontal className="h-3.5 w-3.5" />
          )}
        </ActionIcon>
      )}
      <div>
        <div className="flex items-center justify-between lg:flex-col lg:items-start 2xl:flex-row 2xl:items-center">
          <Title as="h4" className="flex items-center">
            <span className="text-sm font-semibold dark:text-gray-700">
              {message.title}
            </span>
            {message.hasAttachments && (
              <PiPaperclipLight className="ml-2 h-4 w-4 text-gray-500" />
            )}
            {!message.markedAsRead && (
              <Badge renderAsDot className="ml-3 h-2.5 w-2.5 bg-primary" />
            )}
          </Title>
          <span className="text-xs text-gray-500">
            {getRelativeTime(message.date)}
          </span>
        </div>
        <p className="mt-1 line-clamp-3 text-sm text-gray-500">
          {message.summary}
        </p>
      </div>
    </div>
  );
}

const sortOptions = {
  asc: 'asc',
  desc: 'desc',
} as const;

const options = [
  {
    value: sortOptions.asc,
    name: 'Oldest',
  },
  {
    value: sortOptions.desc,
    name: 'Newest',
  },
];

const sortByDate = (items: MessageType[], order: SortByType) => {
  return items.slice().sort((a, b) => {
    const dateA = new Date(a.date).valueOf();
    const dateB = new Date(b.date).valueOf();

    if (order === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
};

interface InboxListProps {
  className?: string;
}
type SortByType = keyof typeof sortOptions;

export default function MessageList({ className }: InboxListProps) {
  const [data, setData] = useAtom(dataAtom);
  // const resetData = useResetAtom(dataAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortByType>(sortOptions.desc);
  const [status, setStatus] = useState<SupportStatusType>(supportStatuses.Open);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const updatedItems = messages.filter(
      (item) => item.status === supportStatuses.Open
    );
    setData(updatedItems);
    const sortedData = sortByDate(updatedItems, sortBy);
    setData(sortedData);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500 milliseconds

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAllChange = () => {
    const updatedItems = data.map((item) => ({
      ...item,
      selected: !selectAll,
    }));
    setData(updatedItems);
    setSelectAll(!selectAll);
  };
  const handleOpen = () => {
    const updatedItems = messages.filter(
      (item) => item.status === supportStatuses.Open
    );
    setData(updatedItems);
    setStatus(supportStatuses.Open);
    const sortedData = sortByDate(updatedItems, sortBy);
    setData(sortedData);
  };

  const handleClosed = () => {
    const updatedItems = messages.filter(
      (item) => item.status === supportStatuses.Closed
    );
    setData(updatedItems);
    setStatus(supportStatuses.Closed);
    const sortedData = sortByDate(updatedItems, sortBy);
    setData(sortedData);
  };

  function handleOnChange(order: SortByType) {
    const sortedData = sortByDate(data, order);
    setData(sortedData);
    setSortBy(order);
  }

  return (
    <>
      <div className={cn(className, 'sticky')}>
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Checkbox checked={selectAll} onChange={handleSelectAllChange} />
            <div className="overflow-hidden rounded border border-gray-200">
              <button
                className={cn(
                  'px-2.5 py-1.5 text-sm font-medium text-gray-500 transition duration-300',
                  status === supportStatuses.Open && 'bg-gray-100 text-gray-900'
                )}
                onClick={handleOpen}
              >
                Open
              </button>
              <button
                className={cn(
                  'px-2.5 py-1.5 text-sm font-medium text-gray-500 transition duration-300',
                  status === supportStatuses.Closed &&
                    'bg-gray-100 text-gray-900'
                )}
                onClick={handleClosed}
              >
                Closed
              </button>
            </div>
          </div>

          <Select
            size="sm"
            variant="text"
            value={sortBy}
            options={options}
            getOptionValue={(option) => option.value}
            onChange={(option: SortByType) => handleOnChange(option)}
            displayValue={(selected) =>
              options.find((o) => o.value === selected)?.name
            }
            suffix={<PiCaretDownBold className="w- ml-2 h-3.5 w-3.5" />}
            selectClassName="text-sm px-2.5"
            optionClassName="text-sm"
            dropdownClassName="p-2 w-32 left-auto right-0"
          />
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200">
          <SimpleBar className="max-h-[calc(100dvh-356px)] md:max-h-[calc(100dvh-311px)] lg:max-h-[calc(100dvh-240px)] xl:max-h-[calc(100dvh-230px)] 2xl:max-h-[calc(100dvh-240px)] 3xl:max-h-[calc(100dvh-270px)]">
            {isLoading ? (
              <div className="grid gap-4">
                {rangeMap(5, (i) => (
                  <MessageLoader key={i} />
                ))}
              </div>
            ) : (
              data.map((message) => (
                <MessageItem key={message.id} message={message} />
              ))
            )}
          </SimpleBar>
        </div>
      </div>
    </>
  );
}

export function MessageLoader() {
  return (
    <div className="grid gap-3 border-t border-gray-200 p-5">
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-6 rounded" />
        <Skeleton className="h-3 w-32 rounded" />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="ml-auto h-3 w-16 rounded" />
      </div>
      <LineGroup
        columns={6}
        className="grid-cols-6 gap-1.5"
        skeletonClassName="h-2"
      />
      <LineGroup
        columns={5}
        className="grid-cols-5 gap-1.5"
        skeletonClassName="h-2"
      />
      <LineGroup
        columns={4}
        className="grid-cols-4 gap-1.5"
        skeletonClassName="h-2"
      />
    </div>
  );
}
