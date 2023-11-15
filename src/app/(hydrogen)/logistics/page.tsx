import LogisticsDashboard from '@/app/shared/logistics/dashboard';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Logistics'),
};

export default function LogisticsPage() {
  return <LogisticsDashboard />;
}
