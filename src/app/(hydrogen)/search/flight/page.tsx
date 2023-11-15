import ListingFilters from '@/app/shared/explore-flight';
import FindFlight from '@/app/shared/explore-flight/listing-filters/find-flight';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Real State'),
};

const pageHeader = {
  title: 'Flight Booking',
  breadcrumb: [
    {
      name: 'Pages',
    },
    {
      href: routes.search.realEstate,
      name: 'Search & Filters',
    },
    {
      name: 'Flight Booking',
    },
  ],
};

export default function FlightAndHotelPage() {
  return (
    <div className="@container">
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <FindFlight />
      </PageHeader>

      <ListingFilters className="mb-6" />
    </div>
  );
}
