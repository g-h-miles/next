'use client';

import Link from 'next/link';
import { Title } from '@/components/ui/text';
import SimpleBar from '@/components/ui/simplebar';
import FolderIcon from '@/components/icons/folder-solid';
import { Card } from '@/app/shared/file/manager/file-grid/grid';

const recentFiles = [
  {
    id: 1,
    file: {
      name: 'Employee Sheets',
      image: <FolderIcon />,
    },
    size: '2.4 GB',
    totalFiles: '135',
  },
  {
    id: 2,
    file: {
      name: 'Personal Assets',
      image: <FolderIcon />,
    },
    size: '1.8 GB',
    totalFiles: '40',
  },
  {
    id: 3,
    file: {
      name: 'Data & Prints',
      image: <FolderIcon />,
    },
    size: '528 MB',
    totalFiles: '122',
  },
  {
    id: 4,
    file: {
      name: 'Raw Images',
      image: <FolderIcon />,
    },
    size: '8 GB',
    totalFiles: '900',
  },
];

export default function RecentFiles({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="col-span-full mb-3 flex items-center justify-between 2xl:mb-5">
        <Title as="h3" className="text-lg font-semibold xl:text-xl">
          Recent Files
        </Title>
        <Link
          href="/file-manager?layout=grid"
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          View all
        </Link>
      </div>

      <SimpleBar>
        <div className="grid grid-flow-col gap-5">
          {recentFiles.map((item) => {
            return (
              <Card
                key={item.id}
                className="min-w-[273px] hover:-translate-y-0 hover:shadow-none"
                item={item}
                onDeleteItem={() => null}
              />
            );
          })}
        </div>
      </SimpleBar>
    </div>
  );
}
