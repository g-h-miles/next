'use client';

import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/text';
import SimpleBar from '@/components/ui/simplebar';
import { useMedia } from '@/hooks/use-media';
import { useFilterControls } from '@/hooks/use-filter-control';
import { useDrawer } from '@/app/shared/drawer-views/use-drawer';
import { ActionIcon } from '@/components/ui/action-icon';
import ForSaleFilter from './for-sale-filter';
import PriceFilter from './price-filter';
import AccommodationFilter from './accommodation-filter';
import HometypeFilter from './hometype-filter';
import MaxHOAFilter from './max-hoa-filter';
import ListingTypeFilter from './listing-type-filter';
import {
  amenitiesOptions,
  initialState,
  propertyStatusOptions,
  tourOptions,
  viewOptions,
} from './filter-utils';
import ParkingFilter from './parking-filter';
import SquareFeetFilter from './square-feet-filter';
import LotSizeFilter from './lot-size-filter';
import SoldInFilter from './sold-in-filter';
import KeywordFilter from './keyword-filter';
import BuiltYearFilter from './built-year-filter';
import { PiXBold } from 'react-icons/pi';
import FilterWithSearch from '@/components/filter-with-search';
import hasSearchedParams from '@/utils/has-searched-params';
import { useTheme } from 'next-themes';
import { useColorPresetName } from '@/hooks/use-theme-color';
import cn from '@/utils/class-names';

export default function FilterDrawerView() {
  const { state, reset, applyFilter, clearFilter } = useFilterControls<
    typeof initialState,
    any
  >(initialState);
  const isWide = useMedia('(min-width: 1537px)', false);
  const { closeDrawer } = useDrawer();
  const { theme } = useTheme();
  const { colorPresetName } = useColorPresetName();

  return (
    <div className="relative flex h-full w-full flex-col bg-white px-5 py-3.5 dark:bg-gray-50">
      <div className="-mx-5 mb-6 flex items-center justify-between border-b border-gray-200 px-4 pb-4">
        <Title as="h5" className="font-semibold">
          More Filters
        </Title>
        <ActionIcon
          size="sm"
          rounded="full"
          variant="text"
          onClick={() => closeDrawer()}
        >
          <PiXBold className="h-4 w-4" />
        </ActionIcon>
      </div>

      <SimpleBar className="-mx-5 min-h-[calc(100%-10rem)]">
        <div className="space-y-9 px-5">
          {!isWide && (
            <>
              <div className="flex flex-col space-y-3">
                <Title as="h6" className="mb-2 font-medium">
                  For Sale
                </Title>
                <ForSaleFilter state={state} applyFilter={applyFilter} />
              </div>
              <div>
                <Title as="h6" className="mb-5 font-semibold">
                  Price
                </Title>
                <PriceFilter state={state} applyFilter={applyFilter} />
              </div>
              <div>
                <AccommodationFilter state={state} applyFilter={applyFilter} />
              </div>
              <div>
                <Title as="h6" className="mb-5 font-semibold">
                  Home Type
                </Title>
                <HometypeFilter state={state} applyFilter={applyFilter} />
              </div>
            </>
          )}
          <MaxHOAFilter state={state} applyFilter={applyFilter} />
          <ListingTypeFilter state={state} applyFilter={applyFilter} />

          <FilterWithSearch
            title="Property Status"
            name="property_status"
            data={propertyStatusOptions}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
          <FilterWithSearch
            title="Tours"
            name="tour_status"
            data={tourOptions}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />

          <ParkingFilter state={state} applyFilter={applyFilter} />
          <SquareFeetFilter state={state} applyFilter={applyFilter} />
          <LotSizeFilter state={state} applyFilter={applyFilter} />
          <BuiltYearFilter state={state} applyFilter={applyFilter} />

          <FilterWithSearch
            title="Basement"
            name="basement"
            data={[{ name: 'Has Basement' }]}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
          <FilterWithSearch
            title="Number of Stories"
            name="number_of_stories"
            data={[{ name: 'Single-Story Only' }]}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
          <FilterWithSearch
            title="Senior Living"
            name="senior_living"
            data={[{ name: 'Hide 55+ Communities' }]}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
          <FilterWithSearch
            title="Other Amenities"
            name="other_amenities"
            data={amenitiesOptions}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />
          <FilterWithSearch
            title="View"
            name="view"
            data={viewOptions}
            state={state}
            applyFilter={applyFilter}
            clearFilter={clearFilter}
          />

          <SoldInFilter state={state} applyFilter={applyFilter} />
          <KeywordFilter state={state} applyFilter={applyFilter} />
        </div>
      </SimpleBar>
      <div className="sticky bottom-0 flex items-center justify-center gap-3 bg-white pb-3 pt-5 dark:bg-gray-50">
        {hasSearchedParams() ? (
          <Button
            size="lg"
            variant="outline"
            className="w-full dark:bg-gray-100 dark:text-white"
            onClick={() => {
              reset();
              closeDrawer();
            }}
          >
            Reset All
          </Button>
        ) : null}
        <Button
          size="lg"
          onClick={() => closeDrawer()}
          className={cn(
            'w-full capitalize',
            theme === 'dark' &&
              colorPresetName === 'black' &&
              'dark:text-gray-0'
          )}
          color="primary"
        >
          Show results
        </Button>
      </div>
    </div>
  );
}
