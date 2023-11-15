'use client';

import Image from 'next/image';
import dayjs from 'dayjs';
import {
  PiCopySimple,
  PiDotsThreeOutlineVerticalFill,
  PiShareFat,
  PiTrashSimple,
} from 'react-icons/pi';
import { HeaderCell } from '@/components/ui/table';
import { Title, Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { ActionIcon } from '@/components/ui/action-icon';
import { Button } from '@/components/ui/button';
import { Popover } from '@/components/ui/popover';
import Favorite from '../favorite';

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: (
      <div className="ps-2">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.length === data.length}
          onChange={handleSelectAll}
        />
      </div>
    ),
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-2">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Name" />,
    dataIndex: 'file',
    key: 'file',
    width: 420,
    render: (file: any, row: any) => (
      <div className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
          <Image
            src={file.avatar}
            className="aspect-square"
            width={26}
            height={26}
            alt=""
          />
        </div>
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Title as="h6" className="mb-0.5 !text-sm font-medium">
            {file.name}
          </Title>
        </div>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Size" />,
    dataIndex: 'size',
    key: 'size',
    width: 130,
    render: (value: any) => <span className="text-gray-500">{value}</span>,
  },
  {
    title: <HeaderCell title="Type" />,
    dataIndex: 'type',
    key: 'type',
    width: 130,
    render: (value: any) => (
      <span className="capitalize text-gray-500">{value}</span>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Modified"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'dueDate'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('modified'),
    dataIndex: 'modified',
    key: 'modified',
    width: 200,
    render: (value: Date) => (
      <>
        <Text className="mb-1 text-gray-500">
          {dayjs(value).format('DD MMM YYYY')}
        </Text>
      </>
    ),
  },
  {
    title: <HeaderCell title="Shared" />,
    dataIndex: 'shared',
    key: 'shared',
    width: 200,
    render: (value: any) => {
      return (
        <div className="flex items-center justify-start">
          {value.map((img: any, index: number) => {
            return (
              <Image
                key={`fileavatar-${index}`}
                src={img}
                width={30}
                height={30}
                className="-me-2 aspect-square rounded-full border-2 border-gray-0 dark:border-gray-50"
                alt="File Avatar"
              />
            );
          })}
        </div>
      );
    },
  },
  {
    title: <></>,
    dataIndex: 'action',
    key: 'action',
    width: 100,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3">
        <Favorite />
        <Popover
          placement="left"
          className="z-50 min-w-[140px] px-2 dark:bg-gray-100 [&>svg]:dark:fill-gray-100"
          content={() => (
            <div className="text-gray-900">
              <Button
                variant="text"
                className="flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50"
              >
                <PiCopySimple className="mr-2 h-5 w-5 text-gray-500" />
                Copy
              </Button>
              <Button
                variant="text"
                className="flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50"
              >
                <PiShareFat className="mr-2 h-5 w-5 text-gray-500" />
                Share
              </Button>
              <Button
                variant="text"
                className="flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50"
                onClick={() => onDeleteItem(row.id)}
              >
                <PiTrashSimple className="mr-2 h-5 w-5 text-gray-500" />
                Delete
              </Button>
            </div>
          )}
        >
          <ActionIcon variant="text">
            <PiDotsThreeOutlineVerticalFill className="h-[18px] w-[18px] text-gray-500" />
          </ActionIcon>
        </Popover>
      </div>
    ),
  },
];
