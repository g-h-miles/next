'use client';

import cn from '@/utils/class-names';
import { Tags } from './listing-filters/tags';
import OurAdvice from './listing-filters/our-advice';
import FilterWithSearch from '@/components/filter-with-search';
import { useFilterControls } from '@/hooks/use-filter-control';
import {
  airlinesData,
  bookingData,
  initialState,
  layoverAirportsData,
  paymentMethods,
  recommendedData,
  stopsData,
} from './listing-filters/filter-utils';
import FareAssistant from './listing-filters/fare-assistant';
import FlightTimes from './listing-filters/flight-times';
import BookOnTripFinder from './listing-filters/book-on-tripfinder';
import PriceFilter from './listing-filters/price-filter';
import FlightingCard from '@/components/cards/flighting-card';
import FilterWithAccordion from '@/components/filter-with-accordion';
import FlightTimesWithAccordion from './listing-filters/flight-times-with-accordion';
import FilterWithGroup from '@/components/filter-with-group';

export default function ListingFilters({ className }: { className?: string }) {
  const { state, applyFilter, clearFilter, reset } = useFilterControls<
    typeof initialState,
    any
  >(initialState);

  return (
    <div className={cn('grid grid-cols-12 gap-5 @7xl:gap-10', className)}>
      <div className="col-span-full @5xl:col-span-9">
        <Tags />
        <FlightingCard />
      </div>

      <div className="col-span-full divide-y @5xl:col-span-3">
        <OurAdvice reset={reset} />
        <FilterWithAccordion
          title="Recommended Filters"
          name="recommended"
          data={recommendedData}
          isPrice
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <div className="py-5">
          <FilterWithSearch
            title="Stops"
            name="stops"
            data={stopsData}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
        </div>
        <div className="py-5">
          <FareAssistant
            title="Fare Assistant"
            name="fare-assistant"
            data={paymentMethods}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
        </div>
        <FlightTimes
          title="Times"
          name="times"
          isTabs
          data={stopsData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <div className="py-5">
          <FilterWithSearch
            title="Airlines"
            name="airlines"
            data={airlinesData}
            isSelectableTabs
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
        </div>
        <FilterWithAccordion
          title="Booking Status"
          name="status"
          data={bookingData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <BookOnTripFinder
          title="Book on Tripfinder"
          name="tripfinder"
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <FlightTimesWithAccordion
          title="Duration"
          name="times"
          isTabs={false}
          data={stopsData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <PriceFilter title="Price" state={state} applyFilter={applyFilter} />
        <FilterWithAccordion
          title="Alliance"
          name="alliance"
          data={bookingData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <FilterWithAccordion
          title="Cabin"
          name="cabin"
          data={bookingData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <FilterWithGroup
          title="Layover Airports"
          name="layover"
          data={layoverAirportsData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <FilterWithAccordion
          title="Aircraft"
          name="layover"
          data={bookingData}
          state={state}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
        />
        <div className="py-5">
          <FilterWithSearch
            title="Model"
            name="model"
            data={airlinesData}
            isCheckBoxFilter
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
        </div>
      </div>
    </div>
  );
}
