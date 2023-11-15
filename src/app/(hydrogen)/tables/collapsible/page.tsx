import { routes } from '@/config/routes';
import { orderData } from '@/data/order-data';
import OrderTable from '@/app/shared/ecommerce/order/order-list/table';
import TableLayout from '../table-layout';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Collapsible Table'),
};

const pageHeader = {
  title: 'Collapsible Table',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Tables',
    },
    {
      name: 'Collapsible',
    },
  ],
};

export default function CollapsibleTablePage() {
  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={orderData}
      fileName="order_data"
      header="Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"
    >
      <OrderTable
        data={orderData}
        variant="elegant"
        className="[&_.table-filter]:hidden [&_.table-pagination]:hidden"
      />
    </TableLayout>
  );
}
