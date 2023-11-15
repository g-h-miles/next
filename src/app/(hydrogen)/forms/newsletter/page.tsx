import NewsLetterOne from '@/app/shared/newsletter/newsletter-1/newsletter';
import NewsLetterTwo from '@/app/shared/newsletter/newsletter-2/newsletter';
import NewsLetterThree from '@/app/shared/newsletter/newsletter-3/newsletter';
import NewsLetterFour from '@/app/shared/newsletter/newsletter-4/newsletter';
import NewsLetterFive from '@/app/shared/newsletter/newsletter-5/newsletter';
import NewsLetterSix from '@/app/shared/newsletter/newsletter-6/newsletter';
import NewsLetterSeven from '@/app/shared/newsletter/newsletter-7/newsletter';
import NewsLetterEight from '@/app/shared/newsletter/newsletter-8/newsletter';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Newsletter'),
};

const pageHeader = {
  title: 'Newsletter',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Newsletter',
    },
  ],
};

export default function NewsletterFormPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <div className="grid grid-cols-2 gap-6 @container">
        <NewsLetterOne className="col-span-full @4xl:col-span-1" />
        <NewsLetterTwo className="col-span-full @4xl:col-span-1" />
        <NewsLetterThree className="col-span-full @4xl:col-span-1" />
        <NewsLetterFour className="col-span-full @4xl:col-span-1" />
        <NewsLetterFive className="col-span-full @[2160px]:col-span-1" />
        <NewsLetterSix className="col-span-full @[2160px]:col-span-1" />
        <NewsLetterSeven className="col-span-full @[2160px]:col-span-1" />
        <NewsLetterEight className="col-span-full @[2160px]:col-span-1" />
      </div>
    </>
  );
}
