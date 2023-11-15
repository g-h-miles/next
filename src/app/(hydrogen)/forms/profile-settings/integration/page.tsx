import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import ProfileSettingsNav from '@/app/shared/account-settings/navigation';
import IntegrationSettingsView from '@/app/shared/account-settings/integration-settings';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Integration'),
};

const pageHeader = {
  title: 'Account Settings',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.forms.profileSettings,
      name: 'Form',
    },
    {
      name: 'Account Settings',
    },
  ],
};

export default function IntegrationSettingsFormPage() {
  return <IntegrationSettingsView />;
}
