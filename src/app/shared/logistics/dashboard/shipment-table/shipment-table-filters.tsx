'use client';

import { Button } from '@/components/ui/button';
import { shippingStatuses } from '@/data/shipment-data';
import StatusField from '@/components/controlled-table/status-field';
import DateFiled from '@/components/controlled-table/date-field';
import { getDateRangeStateValues } from '@/utils/get-formatted-date';
import { PiTrashDuotone } from 'react-icons/pi';
import { useMedia } from '@/hooks/use-media';

const paymentStatusOptions = Object.entries(shippingStatuses).map(
  ([value, name]) => ({ name, value })
);

type FilterElementProps = {
  isFiltered: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
};

export default function ShipmentTableFilters({
  isFiltered,
  filters,
  updateFilter,
  handleReset,
}: FilterElementProps) {
  const isMediumScreen = useMedia('(max-width: 1860px)', false);
  const isLargeScreen = useMedia('(min-width: 1861px)', false);

  return (
    <>
      <DateFiled
        selected={getDateRangeStateValues(filters['date'][0])}
        startDate={getDateRangeStateValues(filters['date'][0])}
        endDate={getDateRangeStateValues(filters['date'][1])}
        onChange={(date: any) => {
          updateFilter('date', date);
        }}
        placeholderText="Select created date"
        {...(isMediumScreen && {
          inputProps: {
            label: 'Created Date',
            labelClassName: 'font-medium text-gray-700',
          },
        })}
        maxDate={new Date()}
      />
      <StatusField
        options={paymentStatusOptions}
        value={filters['status']}
        onChange={(value: string) => {
          console.log('value', value);
          updateFilter('status', value);
        }}
        getOptionValue={(option) => option.name}
        displayValue={(selected: string) =>
          paymentStatusOptions.find((option) => option.name === selected)
            ?.name ?? ''
        }
        {...(isMediumScreen && {
          label: 'Status',
          labelClassName: 'font-medium text-gray-700',
        })}
        {...(isLargeScreen && {
          dropdownClassName: 'w-44',
        })}
        placement="bottom-start"
        useContainerWidth={isLargeScreen ? false : true}
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
