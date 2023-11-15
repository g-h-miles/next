import { PiChartLineUp } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import SnippetsTable from '@/app/shared/support/snippets/table';
import HeaderAction from '../header-action';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Snippets'),
};

const pageHeader = {
  title: 'Support Snippets',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.support.dashboard,
      name: 'Support',
    },
    {
      name: 'Snippets',
    },
  ],
};

export default function SupportSnippetsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <HeaderAction title="snippet" />
      </PageHeader>

      <div className="mb-6 rounded-lg border border-gray-300 px-4 py-3 pb-5 pt-4 sm:pb-4 sm:pt-3 md:flex md:items-center md:justify-between md:pb-3">
        <div className="grid grid-cols-[20px_1fr] gap-3 md:flex md:items-center">
          <PiChartLineUp className="h-5 w-5 text-primary-light" />
          <p className="text-gray-500 md:flex md:items-center">
            <span className="font-medium text-gray-900">
              Your team has created 1 out of 4 snippets
            </span>
            . Unlock more snippets with Isomorphic
          </p>
        </div>
        <Button size="sm" className="ml-8 mt-3 sm:mt-2 md:m-0">
          Upgrade
        </Button>
      </div>

      <SnippetsTable />
    </>
  );
}
