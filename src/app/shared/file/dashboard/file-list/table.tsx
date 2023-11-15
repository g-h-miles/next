'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { getColumns } from './columns';
import { Title, Text } from '@/components/ui/text';
import ControlledTable from '@/components/controlled-table';
import { routes } from '@/config/routes';

export default function FileListTable({
  className,
  data = [],
}: {
  className?: string;
  data: any[];
}) {
  const [pageSize, setPageSize] = useState(5);
  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  const {
    isLoading,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    sortConfig,
    handleSort,
    handleDelete,
  } = useTable(data, pageSize);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  const { visibleColumns } = useColumn(columns);

  return (
    <div className={className}>
      <div className="mb-3 flex items-center justify-between 2xl:mb-5">
        <Title
          as="h3"
          className="text-lg font-semibold text-gray-900 xl:text-xl"
        >
          All Files
        </Title>
        <Link
          href={routes.file.manager}
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          View all
        </Link>
      </div>
      <ControlledTable
        isLoading={isLoading}
        data={tableData}
        // @ts-ignore
        columns={visibleColumns}
        scroll={{ x: 1300 }}
        variant="modern"
        tableLayout="fixed"
        rowKey={(record) => record.id}
        className="overflow-hidden rounded-lg border border-gray-200 text-sm"
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
      />
    </div>
  );
}
