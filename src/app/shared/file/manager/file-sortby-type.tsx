'use client';

import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';
import { Popover } from '@/components/ui/popover';
import DocIcon from '@/components/icons/doc-solid';
import FolderIcon from '@/components/icons/folder-solid';
import ImageIcon from '@/components/icons/image-solid';
import PDFIcon from '@/components/icons/pdf-solid';
import XMLIcon from '@/components/icons/xml-solid';
import { PiCaretDownBold } from 'react-icons/pi';

const fileTypeOptions = [
  {
    value: 'folder',
    name: 'Folder',
    icon: <FolderIcon className="h-6 w-6" />,
    id: 1,
  },
  {
    value: 'pdf',
    name: 'PDF',
    icon: <PDFIcon className="h-6 w-6" />,
    id: 2,
  },
  {
    value: 'doc',
    name: 'Doc',
    icon: <DocIcon className="h-6 w-6" />,
    id: 3,
  },
  {
    value: 'xml',
    name: 'XML',
    icon: <XMLIcon className="h-6 w-6" />,
    id: 4,
  },
  {
    value: 'image',
    name: 'Image',
    icon: <ImageIcon className="h-6 w-6" />,
    id: 5,
  },
  {
    value: 'folder',
    name: 'Folder',
    icon: <FolderIcon className="h-6 w-6" />,
    id: 6,
  },
  {
    value: 'pdf',
    name: 'PDF',
    icon: <PDFIcon className="h-6 w-6" />,
    id: 7,
  },
  {
    value: 'doc',
    name: 'Doc',
    icon: <DocIcon className="h-6 w-6" />,
    id: 8,
  },
  {
    value: 'xml',
    name: 'XML',
    icon: <XMLIcon className="h-6 w-6" />,
    id: 9,
  },
  {
    value: 'image',
    name: 'Image',
    icon: <ImageIcon className="h-6 w-6" />,
    id: 10,
  },
];

export default function FileSortbyType({
  className,
  updateFilter,
}: {
  className?: string;
  updateFilter?: (columnId: string, filterValue: string | any[]) => void;
}) {
  return (
    <Popover
      placement="bottom-start"
      className={cn(
        'z-50 px-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100',
        className
      )}
      content={({ setOpen }) => (
        <div className="w-full max-w-[460px] px-3 pb-2 pt-1 text-left rtl:text-right">
          <ul className="grid w-full grid-cols-2 gap-x-3">
            {fileTypeOptions.map(
              (item: {
                name: string;
                value: string;
                id: number;
                icon?: React.ReactNode;
              }) => (
                <li key={item.id}>
                  <Button
                    type="button"
                    variant="text"
                    className="flex w-full items-center justify-start rounded-md px-2 text-sm font-normal leading-5 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-50"
                    onClick={() => {
                      updateFilter && updateFilter('type', item.value);
                      setOpen(false);
                    }}
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center">
                      {item?.icon}
                    </span>
                    <span className="inline-block ps-2">{item.name}</span>
                  </Button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    >
      <Button
        variant="outline"
        size="sm"
        className="text-sm font-normal text-gray-600"
      >
        File Types <PiCaretDownBold className="ms-2 h-4 w-4" />
      </Button>
    </Popover>
  );
}
