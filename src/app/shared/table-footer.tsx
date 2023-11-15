'use client';

import { Button } from '@/components/ui/button';
import { Title, Text } from '@/components/ui/text';

interface TableFooterProps {
  checkedItems: string[];
  handleDelete: (ids: string[]) => void;
}

export default function TableFooter({
  checkedItems,
  handleDelete,
  children,
}: React.PropsWithChildren<TableFooterProps>) {
  if (checkedItems.length === 0) {
    return null;
  }

  return (
    <div className="sticky bottom-0 left-0 z-10 mt-2.5 flex w-full items-center justify-between rounded-md border border-gray-300 bg-gray-0 px-5 py-3.5 text-gray-900 shadow-sm dark:border-gray-300 dark:bg-gray-100 dark:text-white dark:active:bg-gray-100">
      <div>
        <Text as="strong">{checkedItems.length}</Text> selected{' '}
        <Button
          size="sm"
          variant="text"
          className="underline"
          color="danger"
          onClick={() => {
            handleDelete(checkedItems);
          }}
        >
          Delete Them
        </Button>
      </div>
      {children}
    </div>
  );
}
