'use client';

import { useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { getColumns } from './columns';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { Button } from '@/components/ui/button';
import ControlledTable from '@/components/controlled-table';
import { snippetsAndTemplates } from '@/data/snippets-and-templates';
const TableFooter = dynamic(() => import('@/app/shared/table-footer'), {
  ssr: false,
});

export default function SnippetsTable() {
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
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    setSelectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
  } = useTable(snippetsAndTemplates, 10);

  const columns = useMemo(
    () =>
      getColumns({
        data: snippetsAndTemplates,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick,
        onDeleteItem,
        onChecked: handleRowSelect,
        handleSelectAll,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
    ]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <ControlledTable
      variant="modern"
      isLoading={isLoading}
      showLoadingText={true}
      data={tableData}
      // @ts-ignore
      columns={visibleColumns}
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
            {selectedRowKeys.length > 1 ? 'Templates' : 'Template'}{' '}
          </Button>
        </TableFooter>
      }
      className="overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
    />
  );
}
