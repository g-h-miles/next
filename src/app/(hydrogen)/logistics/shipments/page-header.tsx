import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import { shipmentData } from '@/data/shipment-data';
import PageHeader from '@/app/shared/page-header';
import ExportButton from '@/app/shared/export-button';

const pageHeader = {
  title: 'All Shipments',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Dashboard',
    },
    {
      name: 'Shipment List',
    },
  ],
};

interface HeaderProps {
  className?: string;
}

export default function ShipmentPageHeader({ className }: HeaderProps) {
  return (
    <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
      <div className="mt-4 flex items-center gap-3 @lg:mt-0">
        <ExportButton
          data={shipmentData}
          fileName="shipment_data"
          header="ID,Tracking ID,Date,Sender,Receiver,Origin,Destination,Payment Method,Status"
        />
        <Link
          href={routes.logistics.createShipment}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button
            tag="span"
            className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Create Shipment
          </Button>
        </Link>
      </div>
    </PageHeader>
  );
}
