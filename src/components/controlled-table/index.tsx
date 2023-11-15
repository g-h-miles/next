'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import isEmpty from 'lodash/isEmpty';
import Table, { type TableProps } from '@/components/ui/table';
import { Title } from '@/components/ui/text';
import Spinner from '@/components/ui/spinner';
import type { TableFilterProps } from '@/components/controlled-table/table-filter';
import type { TablePaginationProps } from '@/components/controlled-table/table-pagination';
import cn from '@/utils/class-names';
const TableFilter = dynamic(
  () => import('@/components/controlled-table/table-filter'),
  { ssr: false }
);
const TablePagination = dynamic(
  () => import('@/components/controlled-table/table-pagination'),
  { ssr: false }
);

type ControlledTableProps = {
  isLoading?: boolean;
  showLoadingText?: boolean;
  filterElement?: React.ReactElement;
  filterOptions?: TableFilterProps;
  paginatorOptions?: TablePaginationProps;
  tableFooter?: React.ReactNode;
  className?: string;
  paginatorClassName?: string;
} & TableProps;

export default function ControlledTable({
  isLoading,
  filterElement,
  filterOptions,
  paginatorOptions,
  tableFooter,
  showLoadingText,
  paginatorClassName,
  className,
  ...tableProps
}: ControlledTableProps) {
  if (isLoading) {
    return (
      <div className="grid h-full min-h-[128px] flex-grow place-content-center items-center justify-center">
        <Spinner size="xl" />
        {showLoadingText ? (
          <Title as="h6" className="-me-2 mt-4 font-medium text-gray-500">
            Loading...
          </Title>
        ) : null}
      </div>
    );
  }

  return (
    <>
      {!isEmpty(filterOptions) && (
        <TableFilter {...filterOptions}>{filterElement}</TableFilter>
      )}

      <div className="relative">
        <Table
          scroll={{ x: 1300 }}
          rowKey={(record) => record.id}
          className={cn(className)}
          {...tableProps}
        />

        {tableFooter ? tableFooter : null}
      </div>

      {!isEmpty(paginatorOptions) && (
        <TablePagination
          paginatorClassName={paginatorClassName}
          {...paginatorOptions}
        />
      )}
    </>
  );
}
