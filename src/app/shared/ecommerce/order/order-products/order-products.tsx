'use client';

import React from 'react';
import Image from 'next/image';
import Table, { HeaderCell } from '@/components/ui/table';
import { Title, Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { useTable } from '@/hooks/use-table';
import DeletePopover from '@/app/shared/delete-popover';
import Spinner from '@/components/ui/spinner';

const initialData = [
  {
    id: 1,
    product: {
      name: 'Prada Bag',
      image:
        'https://isomorphic-furyroad.s3.amazonaws.com/public/products/1.webp',
    },
    price: '$175.00',
    quantity: 1,
  },
  {
    id: 2,
    product: {
      name: 'Leather Bag',
      image:
        'https://isomorphic-furyroad.s3.amazonaws.com/public/products/2.webp',
    },
    price: '$55.00',
    quantity: 1,
  },
  {
    id: 3,
    product: {
      name: 'Brown Purse',
      image:
        'https://isomorphic-furyroad.s3.amazonaws.com/public/products/3.webp',
    },
    price: '$160.00',
    quantity: 2,
  },
  {
    id: 4,
    product: {
      name: 'Pink Purse',
      image:
        'https://isomorphic-furyroad.s3.amazonaws.com/public/products/4.webp',
    },
    price: '$24.00',
    quantity: 1,
  },
  {
    id: 5,
    product: {
      name: 'Prada Clutch',
      image:
        'https://isomorphic-furyroad.s3.amazonaws.com/public/products/5.webp',
    },
    price: '$345.99',
    quantity: 1,
  },
];

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: <></>,
    dataIndex: 'checked',
    key: 'checked',
    width: 28,
    render: () => (
      <div className="inline-flex w-9 justify-end">
        <Checkbox variant="flat" className="cursor-pointer" />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Product" />,
    dataIndex: 'product',
    key: 'product',
    width: 250,
    render: (product: any) => (
      <div className="flex items-center">
        <div className="relative aspect-square w-12 overflow-hidden rounded-lg">
          <Image
            alt={product.name}
            src={product.image}
            fill
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className="ms-4">
          <Title as="h6" className="!text-sm font-medium">
            {product.name}
          </Title>
          <Text as="p" className="!text-sm font-normal text-gray-500">
            {product.category}
          </Text>
        </div>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Quantity" align="center" />,
    dataIndex: 'quantity',
    key: 'quantity',
    width: 200,
    render: (quantity: number) => (
      <Text className="text-center text-sm">{quantity}</Text>
    ),
  },
  {
    title: <HeaderCell title="Price" />,
    dataIndex: 'price',
    key: 'price',
    width: 150,
    render: (price: string) => <Text className="text-sm">{price}</Text>,
  },
  {
    title: <></>,
    dataIndex: 'action',
    key: 'action',
    width: 130,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <DeletePopover
          title={`Delete the order`}
          description={`Are you sure you want to delete this #${row.id} order?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];

export default function OrderProducts() {
  const { isLoading, sortConfig, tableData, handleSort, handleDelete } =
    useTable(initialData);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = (id: string) => {
    handleDelete(id);
  };

  const columns = React.useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  if (isLoading) {
    return (
      <div className="grid h-32 flex-grow place-content-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <Table
      data={tableData}
      columns={columns}
      className="text-sm"
      rowKey={(record) => record.id}
      variant="minimal"
      scroll={{ x: 600 }}
    />
  );
}
