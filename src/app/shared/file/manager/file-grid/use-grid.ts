import { useState, useEffect } from 'react';

interface AnyObject {
  [key: string]: any;
}

export function useGrid<T extends AnyObject>(
  initialData: T[],
  countPerPage: number = 10
) {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<AnyObject>({
    key: null,
    direction: null,
  });
  const [currentItems, setCurrentItems] = useState(countPerPage);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const sortedData = () => {
    if (!sortConfig.key) {
      return data;
    }

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const paginatedData = () => {
    const start = 0;
    return sortedData().slice(0, start + currentItems);
  };

  const handleSort = (key: string) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleLoadMore = () => {
    const remainCount = data.length - currentItems;
    const remainingItemsCount =
      remainCount > countPerPage ? countPerPage : remainCount;
    setCurrentItems((prev) => prev + remainingItemsCount);
  };

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  const handleDelete = (id: string) => {
    setData(data.filter((item: any) => item.id !== id));
  };

  const filteredData = () => {
    return searchTerm
      ? paginatedData().filter((item: any) =>
          Object.values(item).some((value) => {
            return typeof value === 'object'
              ? value &&
                  Object.values(value).some(
                    (nestedItem) =>
                      nestedItem &&
                      String(nestedItem)
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                  )
              : value &&
                  String(value)
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
          })
        )
      : paginatedData();
  };

  return {
    isLoading,
    sortConfig,
    paginatedData: filteredData(),
    searchTerm,
    totalItems: searchTerm ? filteredData().length : sortedData().length,
    remainingItems: data.length - currentItems,
    handleSort,
    handleDelete,
    handleSearch,
    handleLoadMore,
  };
}
