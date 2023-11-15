import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import CustomerProfile from '@/app/shared/logistics/customer-profile';
import EditProfileButton from '@/app/shared/logistics/customer-profile/edit-profile';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Customer Profile'),
};

const pageHeader = {
  title: 'Customer Profile',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Dashboard',
    },
    {
      href: routes.logistics.dashboard,
      name: 'Logistics',
    },
    {
      name: 'Customer Profile',
    },
  ],
};

export default function CustomerProfilePage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <EditProfileButton className="mt-5 md:mt-0" />
      </PageHeader>

      <CustomerProfile />
    </>
  );
}
