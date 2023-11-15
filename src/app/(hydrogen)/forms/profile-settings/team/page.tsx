import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import ProfileSettingsNav from '@/app/shared/account-settings/navigation';
import TeamSettingsView from '@/app/shared/account-settings/team-settings';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Team'),
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

export default function ProfileSettingsFormPage() {
  return <TeamSettingsView />;
}
