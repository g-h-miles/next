'use client';

import Image from 'next/image';
import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { HeaderCell } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import { Badge } from '@/components/ui/badge';
import PencilIcon from '@/components/icons/pencil';
import DeletePopover from '@/app/shared/delete-popover';

const statusColors = {
  Offline: '',
  Active: 'success',
} as { [key: string]: string };

const chipsColors = {
  Design: 'bg-[#E5E9FC] text-[#432AD8]',
  Product: 'bg-[#D7E3FE] text-[#2750AF]',
  'Software Engineering': 'bg-[#CBF8DB] text-[#11843C]',
  Operations: 'bg-[#F7DEE0] text-[#C50000]',
  Finance: 'bg-[#E5E9FC] text-[#432AD8]',
  'Human Resource': 'bg-[#FDE7FF] text-[#E524E9]',
} as { [key: string]: string };

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  onDeleteItem: (id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  onDeleteItem,
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
    onHeaderCell: () => onHeaderCellClick('user.name'),
    dataIndex: 'user',
    key: 'user',
    width: 400,
    render: ({ name, email, avatar }: any) => (
      <div className="flex items-center">
        <Image
          src={avatar}
          alt={name}
          width={36}
          height={36}
          className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 object-cover shadow-xl"
        />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Title
            as="h6"
            className="mb-0.5 line-clamp-1 whitespace-nowrap !text-sm font-medium"
          >
            {name}
          </Title>
          <Text className="text-xs text-gray-500">{email}</Text>
        </div>
      </div>
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
    width: 200,
    render: (status: any) => {
      return (
        <>
          {status === 'Offline' ? (
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-100/80 px-2.5 py-1">
              <Badge renderAsDot />
              <span className="text-xs font-semibold text-gray-900">
                {status}
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-green-lighter px-2.5 py-1">
              <Badge renderAsDot color={statusColors[status] as any} />
              <span className="text-xs font-semibold text-green-dark">
                {status}
              </span>
            </div>
          )}
        </>
      );
    },
  },
  {
    title: (
      <HeaderCell
        title={<span className="whitespace-nowrap">Email Address</span>}
      />
    ),
    dataIndex: 'email',
    key: 'email',
    width: 400,
    render: (email: string) => (
      <span className="mr-6 block whitespace-nowrap">{email}</span>
    ),
  },
  {
    title: (
      <HeaderCell title={<span className="whitespace-nowrap">Teams</span>} />
    ),
    dataIndex: 'teams',
    key: 'teams',
    width: 200,
    render: (value: any) => (
      <div className="flex gap-2 whitespace-nowrap">
        {value.map((item: any, index: number) => {
          return (
            <Text
              key={`chips-${index}`}
              as="span"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-full bg-green-lighter px-2.5 py-1 text-xs font-semibold',
                chipsColors[item]
              )}
            >
              {item}
            </Text>
          );
        })}
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        className="ps-3"
        title={<span className="whitespace-nowrap">Actions</span>}
      />
    ),
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={() => 'Edit Member'}
          placement="top"
          color="invert"
        >
          <ActionIcon size="sm" variant="outline">
            <PencilIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <DeletePopover
          title={`Delete Member`}
          description={`Are you sure you want to delete this #${row.id} member?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
