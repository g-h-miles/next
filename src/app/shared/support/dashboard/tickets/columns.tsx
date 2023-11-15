'use client';

import { Button } from '@/components/ui/button';
import { HeaderCell } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import { Badge } from '@/components/ui/badge';
import { PriorityType, StatusType } from '@/data/tickets-data';
import AvatarCard from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';
import DeletePopover from '@/app/shared/delete-popover';

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
};

const colors = {
  Low: 'success',
  Medium: 'warning',
  High: 'danger',
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
        <Checkbox variant="flat" aria-label="Id" className="cursor-pointer" />
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Issue"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'issue'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('issue'),
    dataIndex: 'issue',
    key: 'issue',
    width: 500,
    render: (issue: string) => <p className="line-clamp-1">{issue}</p>,
  },
  {
    title: (
      <HeaderCell
        title="Client"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'author'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('author'),
    dataIndex: 'author',
    key: 'author',
    width: 400,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <AvatarCard src={avatar} name={name} />
    ),
  },
  {
    title: (
      <HeaderCell
        title="Assigned To"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'assignedTo'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('agent'),
    dataIndex: 'agent',
    key: 'agent',
    width: 400,
    render: ({ name, avatar }: { name: string; avatar: string }) => (
      <AvatarCard src={avatar} name={name} />
    ),
  },
  {
    title: (
      <HeaderCell
        title="Date Created"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'createdAt'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('createdAt'),
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 250,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: (
      <HeaderCell
        title="Due Date"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'dueDate'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('dueDate'),
    dataIndex: 'dueDate',
    key: 'dueDate',
    width: 250,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: (
      <HeaderCell
        title="Priority"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'priority'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('priority'),
    dataIndex: 'priority',
    key: 'priority',
    width: 200,
    render: (priority: PriorityType) => {
      return (
        <div className="flex items-center gap-2">
          <Badge renderAsDot color={colors[priority] as any} />
          <span>{priority}</span>
        </div>
      );
    },
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
    render: (status: StatusType) => {
      return (
        <Button
          size="sm"
          tag="span"
          variant="outline"
          className="w-[90px] font-medium"
          color={statusColors[status] as any}
        >
          {status}
        </Button>
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
        <Tooltip size="sm" content={() => 'Edit Ticket'} placement="top">
          <ActionIcon size="sm" variant="outline" aria-label={'Edit Ticket'}>
            <PencilIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <Tooltip size="sm" content={() => 'View Ticket'} placement="top">
          <ActionIcon size="sm" variant="outline" aria-label={'View Ticket'}>
            <EyeIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <DeletePopover
          title={`Delete Ticket!`}
          description={`Are you sure you want to delete this Ticket?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
