'use client';

import Image from 'next/image';
import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/format-date';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';

export const data = [
  {
    id: 4,
    date: '2023-08-23T14:49:10.954Z',
    updatedAt: '2023-08-23T14:49:10.954Z',
    currentLocation: {
      country: 'Congo',
      countryCode: 'CD',
    },
    status: 'Delivered',
    remarks: 'Order has been delivered',
  },
  {
    id: 3,
    date: '2023-08-22T14:49:10.954Z',
    updatedAt: '2023-08-22T14:49:10.954Z',
    currentLocation: {
      country: 'Singapore',
      countryCode: 'SG',
    },
    status: 'Out For Delivery',
    remarks: 'Our agent has picked-up you order for Delivery',
  },
  {
    id: 2,
    date: '2023-08-21T14:49:10.954Z',
    updatedAt: '2023-08-21T14:49:10.954Z',
    currentLocation: {
      country: 'Faroe Islands',
      countryCode: 'FO',
    },
    status: 'In Transit',
    remarks: 'OSD On The Way To (Last Mile) Hub',
  },
  {
    id: 1,
    date: '2023-08-20T14:49:10.954Z',
    updatedAt: '2023-08-20T14:49:10.954Z',
    currentLocation: {
      country: 'Micronesia',
      countryCode: 'FM',
    },
    status: 'Accepted',
    remarks: 'Order has been confirmed',
  },
];

const statusColors = {
  Accepted: 'info',
  'In Transit': 'secondary',
  'Out For Delivery': 'primary',
  Delivered: 'success',
};

export const getColumns = () => [
  {
    title: <span className="ml-6 block">Date</span>,
    dataIndex: 'date',
    key: 'date',
    width: 200,
    render: (date: Date) => (
      <div className="ml-6">
        <Text className="mb-1 text-gray-700">
          {formatDate(date, 'MMMM D, YYYY')}
        </Text>
        <Text className="text-[13px] text-gray-500">
          {formatDate(date, 'h:mm A')}
        </Text>
      </div>
    ),
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    width: 200,
    render: (updatedAt: Date) => (
      <>
        <Text className="mb-1 text-gray-700">
          {formatDate(updatedAt, 'MMMM D, YYYY')}
        </Text>
        <Text className="text-[13px] text-gray-500">
          {formatDate(updatedAt, 'h:mm A')}
        </Text>
      </>
    ),
  },
  {
    title: 'Current Location',
    dataIndex: 'currentLocation',
    key: 'currentLocation',
    width: 200,
    render: ({
      country,
      countryCode,
    }: {
      country: string;
      countryCode: string;
    }) => (
      <div className="flex items-center gap-2">
        <figure className="relative h-10 w-10">
          <Image
            fill
            quality={100}
            alt={`${country} Flag icon`}
            className="object-contain"
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
          />
        </figure>

        <span className="whitespace-nowrap">{country}</span>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 200,
    render: (status: string) => {
      return (
        // @ts-ignore
        <Badge color={statusColors[status]} rounded="md">
          {status}
        </Badge>
      );
    },
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks',
    key: 'remarks',
    width: 200,
    render: (remarks: string) => <p>{remarks}</p>,
  },
];

export default function TrackingHistoryTable({
  className,
}: {
  className?: string;
}) {
  return (
    <BasicTableWidget
      title="Tracking History"
      className={cn('pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0')}
      data={data}
      getColumns={getColumns}
      noGutter
      enableSearch={false}
      scroll={{
        x: 900,
      }}
    />
  );
}
