import { PiDownloadSimpleBold } from 'react-icons/pi';
import InvoiceDetails from '@/app/shared/invoice/invoice-details';
import PrintButton from '@/app/shared/print-button';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/routes';

export const metadata = {
  ...metaObject('Invoice'),
};

const pageHeader = {
  title: 'Invoice Details',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.invoice.home,
      name: 'Invoice',
    },
    {
      name: 'Details',
    },
  ],
};

export default function InvoiceDetailsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <PrintButton />
          <Button className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100">
            <PiDownloadSimpleBold className="me-1.5 h-[17px] w-[17px]" />
            Download
          </Button>
        </div>
      </PageHeader>

      <InvoiceDetails />
    </>
  );
}
