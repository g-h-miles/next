import { routes } from '@/config/routes';
import CategoryTable from '@/app/shared/ecommerce/category/category-list/table';
import CategoryPageHeader from './category-page-header';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Categories'),
};

const pageHeader = {
  title: 'Categories',
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
      name: 'List',
    },
  ],
};

export default function CategoriesPage() {
  return (
    <>
      <CategoryPageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
      <CategoryTable />
    </>
  );
}
