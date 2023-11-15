'use client';

import { Popover } from '@/components/ui/popover';
import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/text';
import { useFilterControls } from '@/hooks/use-filter-control';
import { initialState } from '@/app/shared/explore-flight/listing-filters/filter-utils';
import { PiAirplaneTakeoffBold, PiX } from 'react-icons/pi';
import FlightFilter from '@/app/shared/explore-flight/listing-filters/flight-filter';

export default function FindFlight() {
  const { state, applyFilter } = useFilterControls<typeof initialState, any>(
    initialState
  );
  return (
    <Popover
      className="p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100"
      placement="bottom-end"
      shadow="sm"
      content={({ setOpen }) => (
        <div
          className={cn(
            'w-[calc(100vw-32px)] p-5 @container sm:w-[524px] lg:p-7'
          )}
        >
          <div className="flex items-center justify-between gap-4 pb-6">
            <Title
              as="h4"
              className="text-start font-semibold capitalize text-gray-900"
            >
              Filters
            </Title>
            <PiX
              className="h-6 w-6 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <FlightFilter
            state={state}
            applyFilter={applyFilter}
            setOpen={setOpen}
          />
        </div>
      )}
    >
      <Button type="button" className="mt-4 w-full @lg:mt-0 @lg:w-auto">
        <PiAirplaneTakeoffBold className="me-2 text-lg" />
        Find Flight
      </Button>
    </Popover>
  );
}
