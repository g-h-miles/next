'use client';

import React from 'react';
import { PiTrashDuotone } from 'react-icons/pi';
import DateFiled from '@/components/controlled-table/date-field';
import PriceField from '@/components/controlled-table/price-field';
import StatusField from '@/components/controlled-table/status-field';
import { Title, Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getDateRangeStateValues } from '@/utils/get-formatted-date';
import { useMedia } from '@/hooks/use-media';

const statusOptions = [
  {
    value: 'completed',
    name: 'Completed',
    label: (
      <div className="flex items-center">
        <Badge color="success" renderAsDot />
        <Text className="ms-2 font-medium text-green-dark">Completed</Text>
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
    value: 'cancelled',
    name: 'Cancelled',
    label: (
      <div className="flex items-center">
        <Badge color="danger" renderAsDot />
        <Text className="ms-2 font-medium text-red-dark">Cancelled</Text>
      </div>
    ),
  },
  {
    value: 'refunded',
    name: 'Refunded',
    label: (
      <div className="flex items-center">
        <Badge className="bg-gray-400" renderAsDot />
        <Text className="ms-2 font-medium text-gray-600">Refunded</Text>
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
  const isMediumScreen = useMedia('(max-width: 1860px)', false);
  return (
    <>
      <PriceField
        value={filters['price']}
        onChange={(data) => updateFilter('price', data)}
        label={'Price'}
      />
      <DateFiled
        selected={getDateRangeStateValues(filters['createdAt'][0])}
        startDate={getDateRangeStateValues(filters['createdAt'][0])}
        endDate={getDateRangeStateValues(filters['createdAt'][1])}
        onChange={(date: any) => {
          updateFilter('createdAt', date);
        }}
        placeholderText="Select created date"
        {...(isMediumScreen && {
          inputProps: {
            label: 'Created Date',
            labelClassName: 'font-medium text-gray-700',
          },
        })}
      />
      <DateFiled
        selected={getDateRangeStateValues(filters['updatedAt'][0])}
        startDate={getDateRangeStateValues(filters['updatedAt'][0])}
        endDate={getDateRangeStateValues(filters['updatedAt'][1])}
        onChange={(date: any) => {
          updateFilter('updatedAt', date);
        }}
        placeholderText="Select modified date"
        {...(isMediumScreen && {
          inputProps: {
            label: 'Due Date',
            labelClassName: 'font-medium text-gray-700',
          },
        })}
      />
      <StatusField
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
        {...(isMediumScreen && {
          label: 'Status',
          labelClassName: 'font-medium text-gray-700',
        })}
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
