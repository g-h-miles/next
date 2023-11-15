'use client';

import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import { fileGridData } from '@/data/file-grid-data';
import FileFilters from '@/app/shared/file/manager/file-filters';
import { useGrid } from './use-grid';
import Grid from './grid';

const tableDataPerPage = 30;

export default function FileGrid() {
  const {
    isLoading,
    paginatedData,
    remainingItems,
    searchTerm,
    handleDelete,
    handleSearch,
    handleLoadMore,
  } = useGrid(fileGridData, tableDataPerPage);

  if (isLoading) {
    return (
      <div className="grid h-32 flex-grow place-content-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <>
      <FileFilters onSearch={handleSearch} searchTerm={searchTerm} />
      <Grid data={paginatedData} onDeleteItem={handleDelete} />

      {remainingItems > 0 && (
        <div className="mt-5 flex flex-col items-center xs:mt-6 sm:mt-8">
          <Button
            isLoading={isLoading}
            onClick={() => handleLoadMore()}
            className="dark:bg-gray-100 dark:text-white"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
}
