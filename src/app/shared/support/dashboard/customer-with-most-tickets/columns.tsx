'use client';

import Image from 'next/image';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { HeaderCell } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { getRelativeTime } from '@/utils/get-relative-time';
import { Button } from '@/components/ui/button';
import { StatusType } from '@/data/customer-with-most-tickets';
import { ActionIcon } from '@/components/ui/action-icon';
import { Tooltip } from '@/components/ui/tooltip';
import PencilIcon from '@/components/icons/pencil';
import EyeIcon from '@/components/icons/eye';
import AvatarCard from '@/components/ui/avatar-card';
import DeletePopover from '@/app/shared/delete-popover';

function chartColor(value: number) {
  if (value > 70) return '#16a679';
  if (value > 40) return '#d89b0d';
  return '#c5280c';
}

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
};

const statusColors = {
  'In Progress': 'info',
  Completed: 'success',
  Open: 'secondary',
  Closed: 'danger',
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="ID" className="opacity-0" />,
    dataIndex: 'checked',
    key: 'checked',
    width: 28,
    render: () => (
      <div className="inline-flex w-7 justify-end lg:w-9">
        <Checkbox variant="flat" aria-label={'ID'} className="cursor-pointer" />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Name" />,
    onHeaderCell: () => onHeaderCellClick('user.name'),
    dataIndex: 'user',
    key: 'user',
    width: 250,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <AvatarCard src={avatar} name={name} />
    ),
  },
  {
    title: (
      <HeaderCell
        title={<span className="whitespace-nowrap">Tickets Count</span>}
        sortable
        className="justify-end"
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'ticketsCount'
        }
      />
    ),
    dataIndex: 'ticketsCount',
    key: 'ticketsCount',
    width: 200,
    onHeaderCell: () => onHeaderCellClick('ticketsCount'),
    render: (ticketsCount: number) => (
      <span className="mr-6 block whitespace-nowrap text-right">
        {ticketsCount}
      </span>
    ),
  },
  {
    title: <HeaderCell title="Country" />,
    dataIndex: 'location',
    key: 'location',
    width: 300,
    render: ({
      country,
      countryCode,
    }: {
      country: string;
      countryCode: string;
    }) => (
      <div className="flex items-center gap-2">
        <figure className="relative h-7 w-7">
          <Image
            fill
            quality={100}
            alt={`${country} Flag icon`}
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
            sizes="(max-width: 768px) 100vw"
            className="object-contain"
          />
        </figure>

        <span className="whitespace-nowrap">{country}</span>
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title={<span className="whitespace-nowrap">Last Ticket</span>}
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'lastCreated'
        }
      />
    ),
    dataIndex: 'lastCreated',
    key: 'lastCreated',
    width: 200,
    onHeaderCell: () => onHeaderCellClick('lastCreated'),
    render: (lastCreated: Date) => (
      <span className="whitespace-nowrap font-semibold text-gray-700">
        {getRelativeTime(lastCreated)}
      </span>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Status"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'status'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('status'),
    dataIndex: 'status',
    key: 'status',
    width: 150,
    render: (status: StatusType) => {
      return (
        <Button
          size="sm"
          tag="span"
          variant="outline"
          className="w-[90px] whitespace-nowrap font-medium"
          color={statusColors[status] as any}
        >
          {status}
        </Button>
      );
    },
  },
  {
    title: (
      <HeaderCell title="Activity" align="right" className="pe-2 lg:pe-4" />
    ),
    dataIndex: 'chart',
    key: 'chart',
    width: 200,
    render: (chart: any, row: any) => (
      <>
        <div className="ms-auto h-8 w-full max-w-[280px] pe-2 lg:pe-4 4xl:h-9">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chart}
              margin={{
                left: -30,
              }}
            >
              <defs>
                <linearGradient
                  id={`deviceSessionsMobile-${row.id}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#F0F1FF"
                    className=" [stop-opacity:0.25] dark:[stop-opacity:0.2]"
                  />
                  <stop
                    offset="95%"
                    stopColor={chartColor(row.engagementRate)}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="bump"
                dataKey="count"
                stroke={chartColor(row.engagementRate)}
                strokeWidth={1.8}
                fillOpacity={1}
                fill={`url(#deviceSessionsMobile-${row.id})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    ),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 200,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-3">
        <Tooltip
          size="sm"
          content={() => 'Edit Customer'}
          placement="top"
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            aria-label={'Edit Customer'}
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <PencilIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => 'View Customer'}
          placement="top"
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            aria-label={'View Customer'}
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <EyeIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <DeletePopover
          title={`Delete the customer`}
          description={`Are you sure you want to delete this #{row.id} customer?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
