'use client';

import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import { Input } from '@/components/ui/input';
import { Empty, EmptyProductBoxIcon } from '@/components/ui/empty';
import SVGLoader from '@/components/svg-loader';
import cn from '@/utils/class-names';
import { iconsData } from '@/data/icons-data';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

const pageHeader = {
  title: 'Icons',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Widgets',
    },
    {
      name: 'Icons',
    },
  ],
};

export default function IconsList() {
  const [searchText, setSearchText] = useState('');

  let iconItemsFiltered = [...iconsData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  if (searchText.length > 0) {
    iconItemsFiltered = iconsData.filter((item: any) => {
      const label = item.name;
      return (
        label.match(searchText.toLowerCase()) ||
        (label.toLowerCase().match(searchText.toLowerCase()) && label)
      );
    });
  }

  return (
    <>
      <PageHeaderWithSearch
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {iconItemsFiltered.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-x-5 gap-y-7">
          {iconItemsFiltered.map((item, idx) => (
            <IconCard key={`${item.name}-${idx}`} {...item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-grow flex-col items-center justify-center">
          <Empty
            image={<EmptyProductBoxIcon />}
            text={`No icon found with this Keyword: ${searchText}`}
          />
        </div>
      )}
    </>
  );
}

function PageHeaderWithSearch({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef?.current) {
      // @ts-ignore
      inputRef.current.focus();
    }
    return () => {
      inputRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
      <Input
        value={searchText}
        ref={inputRef}
        onChange={(e) => setSearchText(() => e.target.value)}
        placeholder={`Search among ${iconsData.length} icons`}
        className="mt-4 w-full @lg:mt-0 @lg:max-w-sm @lg:flex-1 @lg:ps-12 @xl:ps-0"
        inputClassName="shadow-sm"
        prefix={<PiMagnifyingGlassBold className="h-auto w-4" />}
        clearable
        onClear={() => setSearchText('')}
      />
    </PageHeader>
  );
}

function IconCard({ name, file }: { name: string; file: string }) {
  const [isCopied, setCopied] = useState(false);
  const [_, copyToClipboard] = useCopyToClipboard();

  function handleCopyToClipboard(value: string) {
    copyToClipboard(value);
    toast.success(<b>{`Copied '${value}' to clipboard`}</b>);
    setCopied(() => true);
    setTimeout(() => {
      setCopied(() => false);
    }, 300);
  }

  return (
    <div
      className="group flex flex-col"
      onClick={() => handleCopyToClipboard(name)}
    >
      <div
        className={cn(
          'flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-100 transition-all duration-200 group-hover:border-gray-200 [&>svg]:h-8 [&>svg]:w-8',
          isCopied &&
            '!border-gray-900 ring-1 ring-gray-900 dark:!border-gray-900 dark:ring-gray-300'
        )}
      >
        <SVGLoader fileName={file} />
      </div>
      <div
        className={cn(
          'mt-2 truncate text-center text-[13px] text-gray-600',
          isCopied && 'font-semibold text-gray-900'
        )}
      >
        {name}
      </div>
    </div>
  );
}
