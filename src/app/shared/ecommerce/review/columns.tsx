'use client';

import { HeaderCell } from '@/components/ui/table';
import { Title, Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ActionIcon } from '@/components/ui/action-icon';
import { Avatar } from '@/components/ui/avatar';
import TrashIcon from '@/components/icons/trash';
import PencilIcon from '@/components/icons/pencil';
import { Button } from '@/components/ui/button';
import { Popover } from '@/components/ui/popover';
import { PiDotsThreeVerticalBold, PiStarFill, PiXBold } from 'react-icons/pi';
import AvatarCard from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';

// get status badge
function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'approved':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot color="danger" />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
  }
}

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  onChecked,
}: Columns) => [
  {
    title: <></>,
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-2">
        <Checkbox
          value={row.id}
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
    width: 150,
    render: (id: any) => <Text className="text-sm text-gray-500">RW-{id}</Text>,
  },
  {
    title: <HeaderCell title="Customer Review" />,
    dataIndex: 'customer',
    key: 'customer',
    width: 350,
    hidden: 'customer',
    render: (customer: any, row: any) => (
      <div className="flex items-center">
        <Avatar name={customer.name} src={customer.avatar} />
        <div className="ms-3 pe-4">
          <Title as="h6" className="mb-1 !text-sm font-medium">
            <span className="font-normal text-gray-500">By</span>{' '}
            {customer.name}
          </Title>
          <Text className="leading-relaxed text-gray-500">{row.review}</Text>
        </div>
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Rating"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'rating'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('rating'),
    dataIndex: 'rating',
    key: 'rating',
    width: 120,
    render: (rating: any) => (
      <div className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-1">
        <span className="me-1 shrink-0">{rating}</span>
        <PiStarFill className="-mt-px w-4 fill-orange text-orange" />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Product" />,
    dataIndex: 'product',
    key: 'product',
    width: 300,
    render: ({
      name,
      category,
      image,
    }: {
      name: string;
      category: string;
      image: string;
    }) => (
      <AvatarCard
        src={image}
        name={name}
        description={category}
        avatarProps={{
          name: name,
          size: 'lg',
          className: 'rounded-lg',
        }}
      />
    ),
  },
  {
    title: (
      <HeaderCell
        title="Created"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'createdAt'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('createdAt'),
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 150,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: <></>,
    dataIndex: 'action',
    key: 'action',
    width: 50,
    render: (_: string, row: any) => (
      <Popover
        placement="left"
        className="z-50 min-w-[140px] px-0"
        content={() => (
          <div className="text-gray-700">
            <Button
              variant="text"
              className="flex w-full items-center justify-start px-4 py-2.5 focus:outline-none"
            >
              <PencilIcon className="me-2 h-[18px] w-[18px] text-gray-500" />
              Edit
            </Button>
            <Button
              variant="text"
              className="flex w-full items-center justify-start px-4 py-2.5 focus:outline-none"
            >
              <PiXBold className="me-2 h-[18px] w-[18px] text-gray-500" />
              Reject
            </Button>
            <Button
              variant="text"
              className="flex w-full items-center justify-start px-4 py-2.5 focus:outline-none"
              onClick={() => onDeleteItem(row.id)}
            >
              <TrashIcon className="me-2 h-[18px] w-[18px] text-gray-500" />
              Delete
            </Button>
          </div>
        )}
      >
        <ActionIcon variant="text">
          <PiDotsThreeVerticalBold className="h-6 w-6 text-gray-500 hover:text-gray-1000" />
        </ActionIcon>
      </Popover>
    ),
  },
];
