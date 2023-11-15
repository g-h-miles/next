'use client';

// import Link from 'next/link';
import { STATUSES, type User } from '@/data/users-data';
// import { routes } from '@/config/routes';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Tooltip } from '@/components/ui/tooltip';
import { HeaderCell } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { ActionIcon } from '@/components/ui/action-icon';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import AvatarCard from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';
import DeletePopover from '@/app/shared/delete-popover';

function getStatusBadge(status: User['status']) {
  switch (status) {
    case STATUSES.Deactivated:
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          {/* <Text className="ms-2 font-medium text-orange-dark">{status}</Text> */}
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    case STATUSES.Active:
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case STATUSES.Pending:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
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
      <div className="flex items-center gap-3 whitespace-nowrap ps-2">
        <Checkbox
          title={'Select All'}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer"
        />
        User ID
      </div>
    ),
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: User) => (
      <div className="inline-flex ps-4">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
          label={`#${row.id}`}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Name" />,
    dataIndex: 'fullName',
    key: 'fullName',
    width: 250,
    hidden: 'fullName',
    render: (_: string, user: User) => (
      <AvatarCard
        src={user.avatar}
        name={user.fullName}
        description={user.email}
      />
    ),
  },
  {
    title: (
      <HeaderCell
        title="Role"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'role'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('role'),
    dataIndex: 'role',
    key: 'role',
    width: 250,
    render: (role: string) => role,
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
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="Permissions" />,
    dataIndex: 'permissions',
    key: 'permissions',
    width: 200,
    render: (permissions: User['permissions'][]) => (
      <div className="flex items-center gap-2">
        {permissions.map((permission) => (
          <Badge
            key={permission}
            rounded="lg"
            variant="outline"
            className="border-gray-200 font-normal text-gray-500"
          >
            {permission}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (status: User['status']) => getStatusBadge(status),
  },
  {
    title: <></>,
    dataIndex: 'action',
    key: 'action',
    width: 140,
    render: (_: string, user: User) => (
      <div className="flex items-center justify-end gap-3 pe-3">
        <Tooltip
          size="sm"
          content={() => 'Edit User'}
          placement="top"
          color="invert"
        >
          {/* <Link href={routes.invoice.edit(user.id)}> */}
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <PencilIcon className="h-4 w-4" />
          </ActionIcon>
          {/* </Link> */}
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => 'View User'}
          placement="top"
          color="invert"
        >
          {/* <Link href={routes.invoice.details(user.id)}> */}
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <EyeIcon className="h-4 w-4" />
          </ActionIcon>
          {/* </Link> */}
        </Tooltip>
        <DeletePopover
          title={`Delete this user`}
          description={`Are you sure you want to delete this #${user.id} user?`}
          onDelete={() => onDeleteItem(user.id)}
        />
      </div>
    ),
  },
];
