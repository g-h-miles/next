import { routes } from '@/config/routes';
import { invoiceData } from '@/data/invoice-data';
import InvoiceTable from '@/app/shared/invoice/invoice-list/table';
import TableLayout from '../table-layout';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Enhanced Table'),
};

const pageHeader = {
  title: 'Enhanced Table',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Tables',
    },
    {
      name: 'Enhanced',
    },
  ],
};

export default function EnhancedTablePage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={invoiceData}
      fileName="invoice_data"
      header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
    >
      <InvoiceTable data={invoiceData} />
    </TableLayout>
  );
}
