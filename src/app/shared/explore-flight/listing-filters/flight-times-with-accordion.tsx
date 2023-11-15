'use client';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@/components/ui/tabs';
import PriceFilter from '@/app/shared/explore-flight/listing-filters/time-filter';
import { Collapse } from '@/components/ui/collapse';
import { PiCaretDownBold } from 'react-icons/pi';
import cn from '@/utils/class-names';

type TimeOptions = {
  name: string;
  content?: number;
};

interface FlightTimesProps {
  title: string;
  name: string;
  data: TimeOptions[];
  state: any;
  isTabs?: boolean;
  isAccordion?: boolean;
  applyFilter: (query: string, value: any) => void;
  clearFilter?: (key: string[]) => void;
}

export default function FlightTimesWithAccordion({
  title,
  isTabs,
  state,
  applyFilter,
}: FlightTimesProps) {
  return (
    <>
      <Collapse
        className="py-5"
        header={({ open, toggle }) => (
          <button
            type="button"
            onClick={toggle}
            className="flex w-full cursor-pointer items-center justify-between text-base font-semibold text-gray-900"
          >
            {title}
            <PiCaretDownBold
              strokeWidth={3}
              className={cn(
                'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                open && 'rotate-0 rtl:rotate-0'
              )}
            />
          </button>
        )}
      >
        {isTabs ? (
          <Tabs>
            <TabList className="inline-flex justify-start space-x-2 rounded-lg border border-gray-200 p-1">
              <Tab
                className={({ selected }) =>
                  cn(
                    'w-32 rounded-md px-3 py-2 text-sm outline-none',
                    selected
                      ? 'bg-gray-900 font-medium text-white dark:bg-gray-100 dark:text-gray-900'
                      : 'bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white dark:bg-gray-100 dark:text-gray-900 hover:dark:bg-gray-100 dark:hover:text-gray-900'
                  )
                }
              >
                Take-off
              </Tab>
              <Tab
                className={({ selected }) =>
                  cn(
                    'w-32 rounded-md px-3 py-2 text-sm outline-none',
                    selected
                      ? 'bg-gray-900 font-medium text-white dark:bg-gray-100 dark:text-gray-900'
                      : 'bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white hover:dark:bg-gray-100 dark:hover:text-gray-900'
                  )
                }
              >
                Landing
              </Tab>
            </TabList>
            <TabPanels className="mt-2">
              <TabPanel className="py-2 text-sm leading-6 text-gray-500">
                <div className="flex flex-col">
                  <span>Take-off from DAC</span>
                  <PriceFilter state={state} applyFilter={applyFilter} />
                </div>
                <div className="flex flex-col pt-3">
                  <span>Take-off from JFK</span>
                  <PriceFilter state={state} applyFilter={applyFilter} />
                </div>
              </TabPanel>
              <TabPanel className="py-2 text-sm leading-6 text-gray-500">
                <div className="flex flex-col">
                  <span>Take-off from JFK</span>
                  <PriceFilter state={state} applyFilter={applyFilter} />
                </div>
                <div className="flex flex-col">
                  <span>Take-off from DAC</span>
                  <PriceFilter state={state} applyFilter={applyFilter} />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        ) : (
          <div className="py-2 text-sm leading-6 text-gray-500">
            <div className="flex flex-col">
              <span>Take-off from DAC</span>
              <PriceFilter state={state} applyFilter={applyFilter} />
            </div>
            <div className="flex flex-col pt-3">
              <span>Take-off from JFK</span>
              <PriceFilter state={state} applyFilter={applyFilter} />
            </div>
          </div>
        )}
      </Collapse>
    </>
  );
}
