import { PiWarning } from 'react-icons/pi';
import { Button } from '@/components/ui/button';
import { Popover } from '@/components/ui/popover';
import { HeaderCell } from '@/components/ui/table';
import { Title, Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import TrashIcon from '@/components/icons/trash';
import PencilIcon from '@/components/icons/pencil';
import { useModal } from '@/app/shared/modal-views/use-modal';
import CreateSnippetTemplateForm from '@/app/shared/support/create-snippet-template-from';
import { SnippetOrTemplate, SnippetType } from '@/data/snippets-and-templates';
import FolderIcon from '@/components/icons/folder-solid';
import AvatarCard from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';

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
    title: (
      <HeaderCell
        title="Name"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'name'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('name'),
    dataIndex: 'name',
    key: 'name',
    width: 300,
    render: (name: string) => name,
  },
  {
    title: (
      <HeaderCell
        title="Created By"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'createdBy'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('createdBy'),
    dataIndex: 'createdBy',
    key: 'createdBy',
    width: 300,
    render: (_: string, row: SnippetOrTemplate) => (
      <AvatarCard
        src={row.avatar}
        name={row.name}
        avatarProps={{
          name: row.name,
          size: 'sm',
        }}
      />
    ),
  },
  {
    title: (
      <HeaderCell
        title="Folder"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'folder'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('folder'),
    dataIndex: 'folder',
    key: 'folder',
    width: 300,
    render: (folder: string) => (
      <div className="flex items-center gap-2">
        <FolderIcon className="h-6 w-6" />
        <span className="font-medium">{folder}</span>
      </div>
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
    width: 300,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: (
      <HeaderCell
        title="Date Modified"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'updatedAt'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('updatedAt'),
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    width: 300,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <></>,
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: any) => (
      <RenderAction row={row} onDeleteItem={onDeleteItem} />
    ),
  },
];

function RenderAction({
  row,
  onDeleteItem,
}: {
  row: SnippetType;
  onDeleteItem: (id: string) => void;
}) {
  const { openModal } = useModal();
  return (
    <>
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={() => 'View/Edit template'}
          placement="top"
          color="invert"
        >
          <ActionIcon
            size="sm"
            variant="outline"
            onClick={() =>
              openModal({
                view: (
                  <CreateSnippetTemplateForm
                    type="Edit"
                    title="template"
                    data={row}
                  />
                ),
                customSize: '850px',
              })
            }
          >
            <PencilIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>

        <Popover
          placement="left"
          className="z-50"
          content={({ setOpen }) => (
            <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
              <Title
                as="h6"
                className="mb-0.5 flex items-start text-sm sm:items-center"
              >
                <PiWarning className="text me-2 h-6 w-6" /> Delete template!
              </Title>
              <Text className="mt-2 leading-relaxed">
                Are you sure you want to delete this template?
              </Text>
              <div className="mt-2 flex items-center justify-end gap-1.5">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7"
                  onClick={() => setOpen(false)}
                >
                  No
                </Button>
                <Button
                  size="sm"
                  className="h-7"
                  onClick={() => onDeleteItem(row.id)}
                >
                  Yes
                </Button>
              </div>
            </div>
          )}
        >
          <ActionIcon size="sm" variant="outline">
            <TrashIcon className="h-4 w-4" />
          </ActionIcon>
        </Popover>
      </div>
    </>
  );
}
