'use client';

import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import { HeaderCell } from '@/components/ui/table';
import { toCurrency } from '@/utils/to-currency';
import { Checkbox } from '@/components/ui/checkbox';
import AvatarCard from '@/components/ui/avatar-card';

type Columns = {
  sortConfig?: any;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onHeaderCellClick,
  onChecked,
}: Columns) => [
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="ID" className="opacity-0" />,
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="ms-4 inline-flex">
        <Checkbox
          value={row.id}
          aria-label="Id"
          className="cursor-pointer"
          {...(onChecked && { onChange: (e) => onChecked(e, e.target.value) })}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="ID" />,
    dataIndex: 'id',
    key: 'id',
    width: 120,
    render: (id: string) => (
      <span className="font-medium text-gray-700">{id}</span>
    ),
  },
  {
    title: <HeaderCell title="Customer" />,
    dataIndex: 'user',
    key: 'user',
    width: 300,
    render: ({
      name,
      avatar,
      email,
    }: {
      name: string;
      avatar: string;
      email: string;
    }) => (
      <AvatarCard
        src={avatar}
        name={name}
        description={email?.toLowerCase()}
        avatarProps={{
          name,
          size: 'sm',
        }}
      />
    ),
  },
  {
    title: <HeaderCell title="Country" />,
    dataIndex: 'country',
    key: 'country',
    width: 150,
    render: ({ name, code }: { name: string; code: string }) => (
      <div className="flex items-center gap-2">
        <figure className="relative h-10 w-10">
          <Image
            fill
            quality={100}
            alt={`${name} Flag icon`}
            className="object-contain"
            src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
            sizes="(max-width: 768px) 100vw"
          />
        </figure>

        <span className="whitespace-nowrap">{name}</span>
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Total Cost"
        sortable
        className="me-4 justify-end"
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'cost'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('cost'),
    dataIndex: 'cost',
    key: 'cost',
    width: 150,
    align: 'right',
    render: (value: string) => (
      <Text className="me-6 font-medium text-gray-700 dark:text-gray-600">
        {toCurrency(value)}
      </Text>
    ),
  },
];
