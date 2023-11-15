'use client';

import React from 'react';
import { PiTrashDuotone } from 'react-icons/pi';
import StatusField from '@/components/controlled-table/status-field';
import { Title, Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DateFiled from '@/components/controlled-table/date-field';
import PriceField from '@/components/controlled-table/price-field';
import { getDateRangeStateValues } from '@/utils/get-formatted-date';

const statusOptions = [
  {
    value: 'publish',
    name: 'Publish',
    label: (
      <div className="flex items-center">
        <Badge color="success" renderAsDot />
        <Text className="ms-2 font-medium text-green-dark">Publish</Text>
      </div>
    ),
  },
  {
    value: 'pending',
    name: 'Pending',
    label: (
      <div className="flex items-center">
        <Badge color="warning" renderAsDot />
        <Text className="ms-2 font-medium text-orange-dark">Pending</Text>
      </div>
    ),
  },
  {
    value: 'draft',
    name: 'Draft',
    label: (
      <div className="flex items-center">
        <Badge className="bg-gray-400" renderAsDot />
        <Text className="ms-2 font-medium text-gray-600">Draft</Text>
      </div>
    ),
  },
];

type FilterElementProps = {
  isFiltered: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
};

export default function FilterElement({
  isFiltered,
  filters,
  updateFilter,
  handleReset,
}: FilterElementProps) {
  return (
    <>
      <PriceField
        value={filters['price']}
        onChange={(data) => updateFilter('price', data)}
      />
      <DateFiled
        selected={getDateRangeStateValues(filters['createdAt'][0])}
        startDate={getDateRangeStateValues(filters['createdAt'][0])}
        endDate={getDateRangeStateValues(filters['createdAt'][1])}
        onChange={(date: any) => {
          updateFilter('createdAt', date);
        }}
        placeholderText="Select created date"
        inputProps={{
          label: 'Created Date',
          labelClassName: 'font-medium text-gray-700',
        }}
      />
      <StatusField
        label="Status"
        options={statusOptions}
        value={filters['status']}
        onChange={(value: string) => {
          updateFilter('status', value);
        }}
        getOptionValue={(option) => option.value}
        displayValue={(selected: string) =>
          statusOptions.find((option) => option.value === selected)?.label ??
          selected
        }
        className={'font-medium text-gray-700'}
      />
      {isFiltered ? (
        <Button
          size="sm"
          onClick={() => {
            handleReset();
          }}
          className="h-8 bg-gray-200/70"
          variant="flat"
        >
          <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
        </Button>
      ) : null}
    </>
  );
}
