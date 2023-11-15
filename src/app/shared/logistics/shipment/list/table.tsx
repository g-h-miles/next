'use client';

import dynamic from 'next/dynamic';
import { PiTrashDuotone } from 'react-icons/pi';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Title, Text } from '@/components/ui/text';
import { getColumns, statusColors } from './columns';
import ControlledTable from '@/components/controlled-table';
import DateFiled from '@/components/controlled-table/date-field';
import { useMedia } from '@/hooks/use-media';
import { useTable } from '@/hooks/use-table';
import { getDateRangeStateValues } from '@/utils/get-formatted-date';
import StatusField from '@/components/controlled-table/status-field';
import { useColumn } from '@/hooks/use-column';
import { Badge } from '@/components/ui/badge';
import {
  shipmentData,
  paymentMethods,
  shippingStatuses,
  StatusType,
} from '@/data/shipment-data';

const TableFooter = dynamic(() => import('@/app/shared/table-footer'), {
  ssr: false,
});

const paymentStatusOptions = Object.entries(shippingStatuses).map(
  ([value, name]) => ({
    label: (
      <div className="flex items-center">
        <Badge renderAsDot color={statusColors(name as StatusType)} />
        <Text className="ms-2">{name}</Text>
      </div>
    ),
    name,
    value,
  })
);

const paymentMethodOptions = Object.entries(paymentMethods).map(
  ([value, name]) => ({ name, value })
);

const filterState = {
  date: [null, null],
  status: '',
  paymentMethod: '',
};

export default function ShipmentListTable() {
  const [pageSize, setPageSize] = useState(10);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

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

  const onChecked = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (event.target.checked) {
      setCheckedItems((prevItems) => [...prevItems, id]);
    } else {
      setCheckedItems((prevItems) => prevItems.filter((item) => item !== id));
    }
  };

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
    handleSelectAll,
    handleRowSelect,
    setSelectedRowKeys,
    selectedRowKeys,
    // } = useTable(data, pageSize, filterState);
  } = useTable(shipmentData, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumns({
        data: shipmentData,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick,
        onDeleteItem,
        onChecked: handleRowSelect,
        handleSelectAll,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      onChecked,
    ]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <div>
      <ControlledTable
        variant="modern"
        isLoading={isLoading}
        showLoadingText={true}
        data={tableData}
        scroll={{
          x: 1800,
        }}
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
        className="overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
        filterElement={
          <>
            <DateFiled
              selected={getDateRangeStateValues(filters['date'][0])}
              startDate={getDateRangeStateValues(filters['date'][0])}
              endDate={getDateRangeStateValues(filters['date'][1])}
              dateFormat="dd MMM yyyy"
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
                  ?.label ?? ''
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
            <StatusField
              options={paymentMethodOptions}
              value={filters['paymentMethod']}
              onChange={(value: string) => {
                updateFilter('paymentMethod', value);
              }}
              getOptionValue={(option) => option.name}
              displayValue={(selected: string) =>
                paymentMethodOptions.find((option) => option.name === selected)
                  ?.name ?? ''
              }
              {...(isMediumScreen && {
                label: 'Payment Method',
                labelClassName: 'font-medium text-gray-700',
              })}
              {...(isLargeScreen && {
                dropdownClassName: 'w-44',
              })}
              placement="bottom-start"
              placeholder="Select Payment Method"
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
        tableFooter={
          <TableFooter
            checkedItems={selectedRowKeys}
            handleDelete={(ids: string[]) => {
              setSelectedRowKeys([]);
              handleDelete(ids);
            }}
          >
            <Button size="sm" className="dark:bg-gray-300 dark:text-gray-800">
              Download {selectedRowKeys.length}{' '}
              {selectedRowKeys.length > 1 ? 'Shipments' : 'Shipment'}
            </Button>
          </TableFooter>
        }
      />
    </div>
  );
}
