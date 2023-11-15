import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import BasicMap from './basic-map';
import CustomMap from './custom-map';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Maps'),
};

const pageHeader = {
  title: 'World Map',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Widgets',
    },
    {
      name: 'Map',
    },
  ],
};

export default function MapsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <a
            target="_blank"
            href="https://yanivam.github.io/react-svg-worldmap/"
            rel="nofollow noopener noreferrer"
            className="inline-flex w-full @lg:w-auto"
          >
            <Button
              tag="span"
              className="w-full @lg:w-auto dark:bg-gray-100 dark:text-white"
            >
              Learn More
            </Button>
          </a>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 3xl:gap-8">
        <BasicMap />
        <CustomMap />
      </div>
    </>
  );
}
