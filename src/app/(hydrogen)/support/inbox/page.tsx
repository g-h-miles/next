import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import { TabList } from '@/app/shared/support/inbox/inbox-tabs';
import SupportInbox from '@/app/shared/support/inbox';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Support Inbox'),
};

const pageHeader = {
  title: 'Support Inbox',
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
      name: 'Inbox',
    },
  ],
};

export default function SupportInboxPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Button className="mt-4 w-full @lg:mt-0 @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100">
          <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
          Create Ticket
        </Button>
      </PageHeader>

      <TabList />

      <SupportInbox />
    </>
  );
}
