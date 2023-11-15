import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import EmailTemplatesGrid from '@/app/shared/email-templates';

export const metadata = {
  ...metaObject('Email Templates'),
};

const pageHeader = {
  title: 'Email Templates',
  breadcrumb: [
    {
      href: '/',
      name: 'Home',
    },
    {
      name: 'Email Templates',
    },
  ],
};

export default function EmailTemplates() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link href="https://react.email/" target="_blank">
          <Button tag="span">Learn More</Button>
        </Link>
      </PageHeader>
      <EmailTemplatesGrid />
    </>
  );
}
