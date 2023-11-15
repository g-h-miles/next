import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import ImportButton from '@/app/shared/import-button';
import CreateEditShipment from '@/app/shared/logistics/shipment/create-edit';

export const metadata = {
  ...metaObject('Create Shipment'),
};

const pageHeader = {
  title: 'Create Shipment',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Dashboard',
    },
    {
      href: routes.logistics.shipmentList,
      name: 'Shipments',
    },
    {
      name: 'Create Shipment',
    },
  ],
};

export default function CreateShipmentPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <ImportButton title={'Import File'} />
      </PageHeader>

      <CreateEditShipment />
    </>
  );
}
