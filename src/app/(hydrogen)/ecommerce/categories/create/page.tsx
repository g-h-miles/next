import CreateCategory from '@/app/shared/ecommerce/category/create-category';
import PageHeader from '@/app/shared/page-header';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';
import Link from 'next/link';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Create a Category'),
};

const pageHeader = {
  title: 'Create A Category',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.eCommerce.categories,
      name: 'Categories',
    },
    {
      name: 'Create',
    },
  ],
};

export default function CreateCategoryPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.categories}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button tag="span" className="w-full @lg:w-auto" variant="outline">
            Cancel
          </Button>
        </Link>
      </PageHeader>
      <CreateCategory />
    </>
  );
}
