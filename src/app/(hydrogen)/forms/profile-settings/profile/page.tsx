import ProfileSettingsView from '@/app/shared/account-settings/profile-settings';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Profile'),
};

export default function ProfileSettingsFormPage() {
  return <ProfileSettingsView />;
}
