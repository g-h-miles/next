import Link from 'next/link';
import { Metadata } from 'next';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import CreateOrder from '@/app/shared/ecommerce/order/create-order';
import { orderData } from '@/app/shared/ecommerce/order/order-form/form-utils';

type Props = {
  params: { id: string };
};

/**
 * for dynamic metadata
 * @link: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  return metaObject(`Edit ${id}`);
}

// TODO: Need added Order date default value

const pageHeader = {
  title: 'Edit Order',
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
      name: 'Edit',
    },
  ],
};

export default function EditOrderPage({ params }: any) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.orders}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button tag="span" className="w-full @lg:w-auto" variant="outline">
            Cancel
          </Button>
        </Link>
      </PageHeader>
      <CreateOrder id={params.id} order={orderData} />
    </>
  );
}
