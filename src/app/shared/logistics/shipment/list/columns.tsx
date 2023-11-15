import { HeaderCell } from '@/components/ui/table';
import { Title, Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { shippingStatuses, StatusType } from '@/data/shipment-data';
import DateCell from '@/components/ui/date-cell';
import AvatarCard from '@/components/ui/avatar-card';
import { Tooltip } from '@/components/ui/tooltip';
import Link from 'next/link';
import { ActionIcon } from '@/components/ui/action-icon';
import { routes } from '@/config/routes';
import PencilIcon from '@/components/icons/pencil';
import EyeIcon from '@/components/icons/eye';
import DeletePopover from '@/app/shared/delete-popover';

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const statusColors = (status: StatusType) => {
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
      <div className="ps-3.5">
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
      <div className="inline-flex ps-3.5">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Tracking ID"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'trackingId'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('trackingId'),
    dataIndex: 'trackingId',
    key: 'trackingId',
    width: 180,
    render: (trackingId: string, row: any) => (
      <Link
        href={routes.logistics.shipmentDetails(row.id)}
        className="duration-200 hover:text-gray-900 hover:underline"
      >
        {trackingId}
      </Link>
    ),
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
    width: 250,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="Sender" />,
    onHeaderCell: () => onHeaderCellClick('sender'),
    dataIndex: 'sender',
    key: 'sender',
    width: 450,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <AvatarCard src={avatar} name={name} />
    ),
  },
  {
    title: <HeaderCell title="Receiver" />,
    onHeaderCell: () => onHeaderCellClick('receiver'),
    dataIndex: 'receiver',
    key: 'receiver',
    width: 450,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <AvatarCard src={avatar} name={name} />
    ),
  },
  {
    title: (
      <HeaderCell
        title="Origin"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'origin'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('origin'),
    dataIndex: 'origin',
    key: 'origin',
    width: 250,
    render: (origin: string) => origin,
  },
  {
    title: (
      <HeaderCell
        title="Destination"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'destination'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('destination'),
    dataIndex: 'destination',
    key: 'destination',
    width: 250,
    render: (destination: string) => destination,
  },
  {
    title: (
      <HeaderCell
        title="Payment Method"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'paymentMethod'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('paymentMethod'),
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    width: 350,
    render: (paymentMethod: string) => paymentMethod,
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
    width: 300,
    render: (status: StatusType) => {
      return (
        <div className="flex items-center gap-1.5">
          <Badge renderAsDot color={statusColors(status)} />
          {status}
        </div>
        // <Button
        //   size="sm"
        //   tag="span"
        //   variant="outline"
        //   className="w-full font-medium"
        //   color={statusColors(status)}
        // >
        //   {status}
        // </Button>
      );
    },
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={() => 'Edit Shipment'}
          placement="top"
          color="invert"
        >
          <Link href={routes.logistics.editShipment(row.id)}>
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={'Edit Shipment'}
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => 'View Shipment'}
          placement="top"
          color="invert"
        >
          <Link href={routes.logistics.shipmentDetails(row.id)}>
            <ActionIcon
              size="sm"
              variant="outline"
              aria-label={'View Shipment'}
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the shipment`}
          description={`Are you sure you want to delete this #${row.id} shipment?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
