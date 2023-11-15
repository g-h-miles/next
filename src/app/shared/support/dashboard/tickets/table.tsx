'use client';

import { useCallback, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useColumn } from '@/hooks/use-column';
import StatusField from '@/components/controlled-table/status-field';
import { useTable } from '@/hooks/use-table';
import { getColumns } from './columns';
import ControlledTable from '@/components/controlled-table';
import DateFiled from '@/components/controlled-table/date-field';
import { getDateRangeStateValues } from '@/utils/get-formatted-date';
import { PiTrashDuotone } from 'react-icons/pi';
import { useMedia } from '@/hooks/use-media';
import { ticketsData } from '@/data/tickets-data';

const statuses = [
  {
    value: 'InProgress',
    name: 'InProgress',
    label: (
      <div className="flex items-center gap-2">
        <Badge renderAsDot color="primary" />
        <span>In Progress</span>
      </div>
    ),
  },
  {
    value: 'Completed',
    name: 'Completed',
    label: (
      <div className="flex items-center gap-2">
        <Badge renderAsDot color="success" />
        <span>Completed</span>
      </div>
    ),
  },
  {
    value: 'Open',
    name: 'Open',
    label: (
      <div className="flex items-center gap-2">
        <Badge renderAsDot color="secondary" />
        <span>Open</span>
      </div>
    ),
  },
  {
    value: 'Closed',
    name: 'Closed',
    label: (
      <div className="flex items-center gap-2">
        <Badge renderAsDot color="danger" />
        <span>Closed</span>
      </div>
    ),
  },
];

const filterState = {
  date: [null, null],
  status: '',
};

export default function TicketsTable() {
  const [pageSize, setPageSize] = useState(10);

  const isMediumScreen = useMedia('(max-width: 1860px)', false);
  const isLargeScreen = useMedia('(min-width: 1861px)', false);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    handleDelete(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    handleDelete,
    handleReset,
  } = useTable(ticketsData, pageSize, filterState);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <>
      <ControlledTable
        variant="modern"
        isLoading={isLoading}
        data={tableData}
        // @ts-ignore
        columns={visibleColumns}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch('');
          },
          onSearchChange: (event) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          columns,
          checkedColumns,
          setCheckedColumns,
        }}
        className="-mx-5 lg:-mx-7"
        scroll={{ x: 1700 }}
        filterElement={
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
              options={statuses}
              value={filters['status']}
              onChange={(value: string) => {
                console.log('value', value);
                updateFilter('status', value);
              }}
              getOptionValue={(option) => option.name}
              displayValue={(selected: string) =>
                statuses.find((option) => option.name === selected)?.name ?? ''
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
        }
      />
    </>
  );
}
