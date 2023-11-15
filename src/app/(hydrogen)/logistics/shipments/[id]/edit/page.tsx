import { Metadata } from 'next';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import ImportButton from '@/app/shared/import-button';
import CreateEditShipment from '@/app/shared/logistics/shipment/create-edit';
import { shipmentData } from '@/app/shared/logistics/shipment/create-edit/form-utils';

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

const pageHeader = {
  title: 'Edit Shipment',
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
      name: 'Edit Shipment',
    },
  ],
};

export default function EditShipmentsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <ImportButton title={'Import File'} />
      </PageHeader>

      <CreateEditShipment id={params.id} shipment={shipmentData} />
    </>
  );
}
