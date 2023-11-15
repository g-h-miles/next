'use client';

import { useCallback, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import ControlledTable from '@/components/controlled-table';
import { getColumns } from '@/app/shared/ecommerce/order/order-list/columns';
import { ActionIcon } from '@/components/ui/action-icon';
import ExpandedOrderRow from '@/app/shared/ecommerce/order/order-list/expanded-row';
import cn from '@/utils/class-names';
// dynamic import
const FilterElement = dynamic(
  () => import('@/app/shared/ecommerce/order/order-list/filter-element'),
  { ssr: false }
);

function CustomExpandIcon(props: any) {
  return (
    <ActionIcon
      size="sm"
      variant="outline"
      rounded="full"
      className="expand-row-icon ms-2"
      onClick={(e) => {
        props.onExpand(props.record, e);
      }}
    >
      {props.expanded ? (
        <PiCaretUpBold className="h-3.5 w-3.5" />
      ) : (
        <PiCaretDownBold className="h-3.5 w-3.5" />
      )}
    </ActionIcon>
  );
}

const filterState = {
  price: ['', ''],
  createdAt: [null, null],
  updatedAt: [null, null],
  status: '',
};

export default function OrderTable({
  data = [],
  variant = 'modern',
  className,
}: {
  data: any[];
  variant?: 'modern' | 'minimal' | 'classic' | 'elegant' | 'retro';
  className?: string;
}) {
  const [pageSize, setPageSize] = useState(10);

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
  } = useTable(data, pageSize, filterState);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <div className={cn(className)}>
      <ControlledTable
        variant={variant}
        isLoading={isLoading}
        showLoadingText={true}
        data={tableData}
        // @ts-ignore
        columns={visibleColumns}
        expandable={{
          expandIcon: CustomExpandIcon,
          expandedRowRender: (record) => <ExpandedOrderRow record={record} />,
        }}
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
          hideIndex: 1,
          columns,
          checkedColumns,
          setCheckedColumns,
          enableDrawerFilter: true,
        }}
        filterElement={
          <FilterElement
            isFiltered={isFiltered}
            filters={filters}
            updateFilter={updateFilter}
            handleReset={handleReset}
          />
        }
        className={
          'overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0'
        }
      />
    </div>
  );
}
