import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import Link from 'next/link';
import OrderView from '@/app/shared/ecommerce/order/order-view';

export default function OrderDetailsPage({ params }: any) {
  const pageHeader = {
    title: `Order #${params.id}`,
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'E-Commerce',
      },
      {
        href: routes.eCommerce.orders,
        name: 'Orders',
      },
      {
        name: params.id,
      },
    ],
  };
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.editOrder(params.id)}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button
            tag="span"
            className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            Edit Order
          </Button>
        </Link>
      </PageHeader>
      <OrderView />
    </>
  );
}
