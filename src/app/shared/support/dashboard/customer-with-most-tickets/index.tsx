'use client';

import { getColumns } from './columns';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { customerWithTickets } from '@/data/customer-with-most-tickets';
import cn from '@/utils/class-names';

export default function CustomerWithMostTickets({
  className,
}: {
  className?: string;
}) {
  return (
    <BasicTableWidget
      title="Customer With Most Tickets"
      data={customerWithTickets}
      getColumns={getColumns}
      className={cn(
        'pb-0 lg:pb-0 [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0',
        className
      )}
      noGutter
      searchPlaceholder="Search tickets..."
      variant="modern"
    />
  );
}
