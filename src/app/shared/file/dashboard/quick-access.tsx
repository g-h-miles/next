'use client';

import FolderIcon from '@/components/icons/folder-solid';
import { Title, Text } from '@/components/ui/text';
import PDFIcon from '@/components/icons/pdf-solid';
import DocIcon from '@/components/icons/doc-solid';
import ImageIcon from '@/components/icons/image-solid';
import XMLIcon from '@/components/icons/xml-solid';
import cn from '@/utils/class-names';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useScrollableSlider } from '@/hooks/use-scrollable-slider';

const mockdata = [
  {
    id: 1,
    file: {
      name: 'Employee Sheet',
      image: FolderIcon,
    },
  },
  {
    id: 2,
    file: {
      name: 'Employee history.pdf',
      image: PDFIcon,
    },
  },
  {
    id: 3,
    file: {
      name: 'Final Changes.doc',
      image: DocIcon,
    },
  },
  {
    id: 4,
    file: {
      name: 'Office Setup.img',
      image: ImageIcon,
    },
  },
  {
    id: 5,
    file: {
      name: 'Salary Statement.xls',
      image: XMLIcon,
    },
  },
];

export function QuickAccessCard({
  item,
  className,
}: {
  item: any;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        'relative flex flex-col items-center justify-center rounded-lg bg-gray-50 p-7 dark:bg-gray-100/50'
      )}
    >
      {item?.file?.image && (
        <div className="w-14">
          <item.file.image />
        </div>
      )}
      <Text className="mt-5 w-full truncate text-center text-sm font-medium text-gray-700">
        {item?.file?.name}
      </Text>
    </div>
  );
}

export default function QuickAccess({ className }: { className?: string }) {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  return (
    <div className={className}>
      <div className="col-span-full mb-3 flex items-center justify-between 2xl:mb-5">
        <Title as="h3" className="text-lg font-semibold xl:text-xl">
          Quick Access
        </Title>
        <Link
          href={'/file-manager'}
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="relative">
        <Button
          title="Prev"
          variant="text"
          ref={sliderPrevBtn}
          onClick={() => scrollToTheLeft()}
          className="!absolute left-0 top-0 z-10 !h-full w-8 !justify-start rounded-none bg-gradient-to-r from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50/80 dark:via-gray-50/80 3xl:hidden"
        >
          <PiCaretLeftBold className="h-5 w-5" />
        </Button>
        <div className="w-full overflow-hidden">
          <div
            ref={sliderEl}
            className="custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth"
          >
            {mockdata.map((item) => {
              return <QuickAccessCard key={item.id} item={item} />;
            })}
          </div>
        </div>
        <Button
          title="Next"
          variant="text"
          ref={sliderNextBtn}
          onClick={() => scrollToTheRight()}
          className="!absolute right-0 top-0 z-10 !h-full w-8 !justify-end rounded-none bg-gradient-to-l from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50/80 dark:via-gray-50/80 3xl:hidden"
        >
          <PiCaretRightBold className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
