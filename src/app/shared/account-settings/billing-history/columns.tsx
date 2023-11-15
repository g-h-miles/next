'use client';

import Image from 'next/image';
import dayjs from 'dayjs';
import { PiCloudArrowDown } from 'react-icons/pi';
import { HeaderCell } from '@/components/ui/table';
import { Title, Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { exportToCSV } from '@/utils/export-to-csv';

const statusColors = {
  'In Progress': 'info',
  Paid: 'success',
  Canceled: 'secondary',
  'On hold': 'danger',
};

function handleDownloadRowData(row: { [key: string]: any }) {
  exportToCSV(
    [row],
    'Title,Amount,Date,Status,Shared',
    `billing_history_${row.id}`
  );
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: (
      <div className="ps-2">
        <Checkbox
          title={'Select All'}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer"
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
    dataIndex: 'title',
    key: 'title',
    width: 420,
    render: (_: any, row: any) => {
      return (
        <Title as="h6" className="mb-0.5 !text-sm font-medium text-gray-700">
          {row.title} - {dayjs(row.date).format('MMM YYYY')}
        </Title>
      );
    },
  },
  {
    title: <HeaderCell title="Amount" />,
    dataIndex: 'amount',
    key: 'amount',
    width: 130,
    render: (value: any) => <span className="text-gray-700">{value}</span>,
  },
  {
    title: <HeaderCell title="Date" />,
    dataIndex: 'date',
    key: 'date',
    width: 130,
    render: (value: Date) => (
      <Text className="mb-1 text-gray-700">
        {dayjs(value).format('DD MMM YYYY')}
      </Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Status"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'dueDate'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('status'),
    dataIndex: 'status',
    key: 'status',
    width: 200,
    render: (status: any) => (
      <Button
        size="sm"
        tag="span"
        variant="outline"
        rounded="pill"
        className="w-[90px] font-medium"
        // @ts-expect-error
        color={statusColors[status]}
      >
        {status}
      </Button>
    ),
  },
  {
    title: <HeaderCell title="USERS ON PLAN" />,
    dataIndex: 'shared',
    key: 'shared',
    width: 200,
    render: (_: any, row: any) => {
      return (
        <div className="flex items-center justify-start">
          {row.shared.map((avatar: any, index: number) => {
            return (
              <Image
                key={`fileavatar-${index}`}
                src={avatar}
                width={26}
                height={26}
                className="-me-2 aspect-square rounded-full border-2 border-gray-0"
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
      <Button
        variant="text"
        onClick={() => handleDownloadRowData(row)}
        className="flex w-full items-center justify-start px-4 py-2.5 focus:outline-none"
      >
        <PiCloudArrowDown className="h-6 w-6 text-gray-500" />
      </Button>
    ),
  },
];
