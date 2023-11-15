import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import ReviewsTable from '@/app/shared/ecommerce/review/table';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Reviews'),
};

const pageHeader = {
  title: 'Reviews',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.eCommerce.reviews,
      name: 'Reviews',
    },
    {
      name: 'List',
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.reviews}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button
            tag="span"
            className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Review
          </Button>
        </Link>
      </PageHeader>
      <ReviewsTable />
    </>
  );
}
