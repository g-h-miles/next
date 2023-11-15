import { useMemo } from 'react';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import ShippingInfo from '@/app/shared/logistics/tracking/shipping-info';
import TrackingOverview from '@/app/shared/logistics/tracking/tracking-overview';
import TrackingHistory from '@/app/shared/logistics/tracking/tracking-history';
import { metaObject } from '@/config/site.config';
import { Metadata } from 'next';

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

export default function TrackingPage({ params }: any) {
  const pageHeader = useMemo(() => {
    return {
      title: 'Tracking',
      breadcrumb: [
        {
          name: 'Logistics',
        },
        {
          href: routes.logistics.dashboard,
          name: 'Tracking',
        },
        {
          name: params.id,
        },
      ],
    };
  }, [params.id]);

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <TrackingOverview className="mb-10" />
      <ShippingInfo />
      <TrackingHistory />
    </>
  );
}
