'use client';

import { Title } from '@/components/ui/text';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@/components/ui/tabs';
import PriceFilter from '@/app/shared/explore-flight/listing-filters/time-filter';
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

export default function FlightTimes({
  title,
  name,
  data,
  isTabs,
  state,
  applyFilter,
  clearFilter,
}: FlightTimesProps) {
  return (
    <>
      <div className="py-5">
        <Title
          as="h6"
          className={cn(
            'flex items-center gap-1 font-inter font-semibold',
            isTabs && 'mb-4'
          )}
        >
          {title}
        </Title>

        {isTabs ? (
          <Tabs>
            <TabList className="inline-flex justify-start space-x-2 rounded-lg border border-gray-200 p-1">
              <Tab
                className={({ selected }) =>
                  cn(
                    'w-32 rounded-md px-3 py-2 text-sm outline-none duration-200',
                    selected
                      ? 'bg-gray-900 font-medium text-gray-0 dark:bg-gray-100 dark:text-gray-900'
                      : 'bg-transparent text-gray-900 hover:bg-gray-100 hover:text-gray-900 hover:dark:bg-gray-100 dark:hover:text-gray-900'
                  )
                }
              >
                Take-off
              </Tab>
              <Tab
                className={({ selected }) =>
                  cn(
                    'w-32 rounded-md px-3 py-2 text-sm outline-none duration-200',
                    selected
                      ? 'bg-gray-900 font-medium text-gray-0 dark:bg-gray-100 dark:text-gray-900'
                      : 'bg-transparent text-gray-900 hover:bg-gray-100 hover:text-gray-900 hover:dark:bg-gray-100 dark:hover:text-gray-900'
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
                <div className="flex flex-col pt-3">
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
      </div>
    </>
  );
}
