'use client';

import React, { useState } from 'react';
import ButtonGroupAction from '@/components/charts/button-group-action';
import { DatePicker } from '@/components/ui/datepicker';
import cn from '@/utils/class-names';
import Table from '@/components/ui/table';
import Pagination from '@/components/ui/pagination';
import { Title } from '@/components/ui/text';
import { Loader } from '@/components/ui/loader';
import { pageMetricData } from '@/data/page-metrics-data';
import { getColumns } from '@/app/shared/analytics-dashboard/page-metric/columns';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';

type PageMetricsTypes = {
  title?: React.ReactNode;
  className?: string;
  pageSize?: number;
};

const filterOptions = ['Top Pages', 'Top Folders', 'Top Subfolders'];

export default function PageMetrics({
  className,
  pageSize = 5,
}: PageMetricsTypes) {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const {
    isLoading,
    sortConfig,
    totalItems,
    tableData,
    currentPage,
    handleSort,
    handlePaginate,
  } = useTable(pageMetricData, pageSize);

  const columns = React.useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction]
  );

  const { visibleColumns } = useColumn(columns);

  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-gray-0 p-5 dark:bg-gray-50 lg:p-7',
        className
      )}
    >
      <div className="mb-6 flex items-center justify-between lg:mb-7">
        <ButtonGroupAction
          options={filterOptions}
          defaultActive={filterOptions[0]}
          onChange={(data) => console.log('Page metric filter', data)}
          activeClassName="bg-gray-900 text-gray-0 dark:bg-gray-100"
          className="hidden @lg:flex"
        />
        <Title as="h5" className="text-base @lg:hidden sm:text-lg">
          Page Metric
        </Title>

        <div>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="MMM, yyyy"
            placeholderText="Select Month"
            showMonthYearPicker
            popperPlacement="bottom-end"
            inputProps={{
              variant: 'text',
              inputClassName: 'p-0 px-1 h-auto [&_input]:text-ellipsis',
            }}
            className="w-36"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="grid h-32 flex-grow place-content-center items-center">
          <Loader size="lg" />
        </div>
      ) : (
        <div className="-mx-5 lg:-mx-7">
          <Table
            data={tableData}
            // @ts-ignore
            columns={visibleColumns}
            scroll={{ x: 1300 }}
            variant="elegant"
            rowKey={(record) => record.id}
            tableLayout="fixed"
            className="mt-4 text-sm"
          />

          <div className="mt-4 flex items-center justify-center pe-4 ps-5 sm:justify-between lg:mt-5 lg:pe-6 lg:ps-7">
            <div className="hidden text-gray-500 sm:inline-flex">
              {currentPage} of {Math.ceil(totalItems / pageSize)} pages
            </div>
            <Pagination
              total={totalItems}
              current={currentPage}
              pageSize={pageSize}
              defaultCurrent={1}
              showLessItems={true}
              onChange={(page: number) => handlePaginate(page)}
              prevIconClassName="py-0 text-gray-500 !leading-[26px]"
              nextIconClassName="py-0 text-gray-500 !leading-[26px]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
