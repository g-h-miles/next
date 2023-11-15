import dynamic from 'next/dynamic';
import PageHeader from '@/app/shared/page-header';
import { routes } from '@/config/routes';
import FileStats from '@/app/shared/file/manager/file-stats';
import { metaObject } from '@/config/site.config';
import UploadButton from '@/app/shared/upload-button';
import PageLayout from '@/app/(hydrogen)/file-manager/page-layout';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

export const metadata = {
  ...metaObject('File Manager'),
};

export default function FileListPage({ params, searchParams }: Props) {
  // console.log('params', params);
  // console.log('searchParams', searchParams);

  let layoutName: string = searchParams?.layout ?? '';

  layoutName = layoutName?.charAt(0).toUpperCase() + layoutName.slice(1);

  const pageHeader = {
    title: 'File Manager',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.file.dashboard,
        name: 'File Manager',
      },
      {
        name: layoutName,
      },
    ],
  };

  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <UploadButton modalView={<FileUpload />} />
      </PageHeader>

      <FileStats className="mb-6 @5xl:mb-8 @7xl:mb-11" />
      <PageLayout />
    </>
  );
}
