'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Title, Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import { Button } from '@/components/ui/button';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import { toCurrency } from '@/utils/to-currency';
import { shippingStatuses, StatusType } from '@/data/shipment-data';
import AvatarCard from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';
import DeletePopover from '@/app/shared/delete-popover';

const statusColors = (status: StatusType) => {
  if (shippingStatuses.Approved === status) {
    return 'primary';
  }
  if (shippingStatuses.InTransit === status) {
    return 'secondary';
  }
  if (shippingStatuses.OutForDelivery === status) {
    return 'info';
  }
  if (shippingStatuses.Delivered === status) {
    return 'success';
  }
  if (shippingStatuses.DeliveryFailed === status) {
    return 'danger';
  }
};

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'paid':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case 'overdue':
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
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
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="ID" className="opacity-0" />,
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="ms-6 inline-flex">
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
    title: <HeaderCell title="Tracking Number" />,
    dataIndex: 'trackingNumber',
    key: 'trackingNumber',
    width: 250,
  },
  {
    title: <HeaderCell title="Recipient" />,
    dataIndex: 'recipient',
    key: 'recipient',
    width: 450,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <AvatarCard
        src={avatar}
        name={name}
        avatarProps={{
          name,
          size: 'sm',
        }}
      />
    ),
  },
  {
    title: <HeaderCell title="Destination" />,
    dataIndex: 'destination',
    key: 'destination',
    width: 350,
  },
  {
    title: (
      <HeaderCell
        title="Date"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'date'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('date'),
    dataIndex: 'date',
    key: 'date',
    width: 240,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: (
      <HeaderCell
        title="Total Cost"
        sortable
        className="me-6 justify-end"
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'cost'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('cost'),
    dataIndex: 'cost',
    key: 'cost',
    width: 300,
    align: 'right',
    render: (value: string) => (
      <Text className="me-6 font-medium text-gray-700 dark:text-gray-600">
        {toCurrency(value)}
      </Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Payment Method"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'payment'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('payment'),
    dataIndex: 'payment',
    key: 'payment',
    width: 300,
    render: (value: string) => (
      <Text className="font-medium text-gray-700 dark:text-gray-600">
        {value}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 220,
    render: (status: StatusType) => (
      <Button
        size="sm"
        tag="span"
        variant="outline"
        className="w-32 font-medium"
        color={statusColors(status)}
        data-color={statusColors(status)}
      >
        {status}
      </Button>
    ),
  },
  {
    title: <HeaderCell title="Invoice Status" />,
    dataIndex: 'invoiceStatus',
    key: 'invoiceStatus',
    width: 200,
    render: (value: string) => getStatusBadge(value),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 140,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-center gap-3">
        <Tooltip
          size="sm"
          content={() => 'Edit Shipment'}
          placement="top"
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <PencilIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => 'View Shipment'}
          placement="top"
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <EyeIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <DeletePopover
          title={`Delete the Shipment`}
          description={`Are you sure you want to delete this #{row.id} Shipment?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
