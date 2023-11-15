'use client';

import { PiTrashDuotone, PiMagnifyingGlassBold } from 'react-icons/pi';
import StatusField from '@/components/controlled-table/status-field';
import { Text, Title } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useMedia } from '@/hooks/use-media';
import { STATUSES, User } from '@/data/users-data';
import SelectBox from '@/components/ui/select';
import { rolesList } from '@/data/roles-permissions';
import { Input } from '@/components/ui/input';
import ModalButton from '@/app/shared/modal-button';
import CreateUser from '@/app/shared/roles-permissions/create-user';
import cn from '@/utils/class-names';

const statusOptions = [
  {
    value: STATUSES.Active,
    name: STATUSES.Active,
    label: (
      <div className="flex items-center">
        <Badge color="success" renderAsDot />
        <Text className="ms-2 font-medium text-green-dark">
          {STATUSES.Active}
        </Text>
      </div>
    ),
  },
  {
    value: STATUSES.Deactivated,
    name: STATUSES.Deactivated,
    label: (
      <div className="flex items-center">
        <Badge color="danger" renderAsDot />
        <Text className="ms-2 font-medium text-red-dark">
          {STATUSES.Deactivated}
        </Text>
      </div>
    ),
  },
  {
    value: STATUSES.Pending,
    name: STATUSES.Pending,
    label: (
      <div className="flex items-center">
        <Badge className="bg-gray-400" renderAsDot />
        <Text className="ms-2 font-medium text-gray-600">
          {STATUSES.Pending}
        </Text>
      </div>
    ),
  },
];

type FilterElementProps = {
  isFiltered: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
};

const roles = rolesList.map((role) => ({
  name: role.name,
  value: role.name,
}));

export default function FilterElement({
  isFiltered,
  handleReset,
  filters,
  updateFilter,
  onSearch,
  searchTerm,
}: FilterElementProps) {
  const isMediumScreen = useMedia('(max-width: 1860px)', false);
  return (
    <>
      <div className="relative z-50 mb-4 flex flex-wrap items-center justify-between gap-2.5 @container ">
        <Title as="h5" className="-order-6 basis-2/5 @xl:basis-auto">
          All Users
        </Title>
        <StatusField
          className=" -order-3 w-full @[25rem]:w-[calc(calc(100%_-_10px)_/_2)] @4xl:-order-5 @4xl:w-auto"
          options={statusOptions}
          value={filters['status']}
          onChange={(value: string) => {
            updateFilter('status', value);
          }}
          placeholder="Filter by Status"
          getOptionValue={(option) => option.value}
          displayValue={(selected: string) =>
            statusOptions.find((option) => option.value === selected)?.label ??
            selected
          }
        />
        <StatusField
          options={roles}
          value={filters['role']}
          placeholder="Filter by Role"
          className=" @4xl:-auto -order-2 w-full @[25rem]:w-[calc(calc(100%_-_10px)_/_2)] @4xl:-order-4 @4xl:w-auto"
          dropdownClassName="w-48"
          useContainerWidth={false}
          getOptionValue={(option) => option.value}
          onChange={(value: string) => {
            updateFilter('role', value);
          }}
          displayValue={(selected: string) =>
            roles.find((option) => option.value === selected)?.name ?? selected
          }
        />

        {isFiltered && (
          <Button
            size="sm"
            onClick={handleReset}
            className="-order-1 h-8 w-full bg-gray-200/70 @4xl:-order-4 @4xl:w-auto"
            variant="flat"
          >
            <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
          </Button>
        )}
        <Input
          type="search"
          placeholder="Search for users..."
          value={searchTerm}
          onClear={() => onSearch('')}
          onChange={(event) => onSearch(event.target.value)}
          prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
          rounded="lg"
          clearable
          className="-order-4 w-full @xl:-order-5 @xl:ms-auto @xl:w-auto @4xl:-order-2 @4xl:w-[230px] @5xl:w-auto"
        />
        <div className="-order-5 flex basis-auto justify-end @xl:-order-4 @4xl:-order-1">
          <ModalButton
            label="Add New User"
            view={<CreateUser />}
            customSize="600px"
            className="mt-0"
          />
        </div>
      </div>
    </>
  );
}
