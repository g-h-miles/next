'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Title } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ActionIcon } from '@/components/ui/action-icon';
import { Empty, SearchNotFoundIcon } from '@/components/ui/empty';
import {
  PiCommand,
  PiFileTextDuotone,
  PiMagnifyingGlassBold,
  PiXBold,
} from 'react-icons/pi';
import cn from '@/utils/class-names';
import { pageLinks } from './page-links.data';

function SearchBox({ onClose }: { onClose?: () => void }) {
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  let menuItemsFiltered = pageLinks;
  if (searchText.length > 0) {
    menuItemsFiltered = pageLinks.filter((item: any) => {
      const label = item.name;
      return (
        label.match(searchText.toLowerCase()) ||
        (label.toLowerCase().match(searchText.toLowerCase()) && label)
      );
    });
  }

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
    <>
      <div className="flex items-center px-5 py-4">
        <Input
          variant="flat"
          value={searchText}
          ref={inputRef}
          onChange={(e) => setSearchText(() => e.target.value)}
          placeholder="Search here"
          className="flex-1"
          prefix={
            <PiMagnifyingGlassBold className="h-[18px] w-[18px] text-gray-600" />
          }
          suffix={
            searchText && (
              <Button
                size="sm"
                variant="text"
                className="h-auto w-auto px-0"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchText(() => '');
                }}
              >
                Clear
              </Button>
            )
          }
        />
        <ActionIcon
          variant="text"
          size="sm"
          className="ms-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <PiXBold className="h-5 w-5" />
        </ActionIcon>
      </div>

      <div className="custom-scrollbar max-h-[60vh] overflow-y-auto border-t border-gray-300 px-2 py-4">
        <>
          {menuItemsFiltered.length === 0 ? (
            <Empty
              className="scale-75"
              image={<SearchNotFoundIcon />}
              text="No Result Found"
              textClassName="text-xl"
            />
          ) : (
            <Title
              as="h6"
              className="mb-5 px-3 font-semibold dark:text-gray-700"
            >
              Quick Page Links
            </Title>
          )}
        </>

        {menuItemsFiltered.map((item, index) => {
          return (
            <Fragment key={item.name + '-' + index}>
              {item?.href ? (
                <Link
                  href={item?.href as string}
                  className="relative my-0.5 flex items-center rounded-lg px-3 py-2 text-sm hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100 dark:hover:bg-gray-50/50 dark:hover:backdrop-blur-lg"
                >
                  <span className="inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-500">
                    <PiFileTextDuotone className="h-5 w-5" />
                  </span>

                  <span className="ms-3 grid gap-0.5">
                    <span className="font-medium capitalize text-gray-900 dark:text-gray-700">
                      {item.name}
                    </span>
                    <span className="text-gray-500">
                      {item?.href as string}
                    </span>
                  </span>
                </Link>
              ) : (
                <Title
                  as="h6"
                  className={cn(
                    'mb-1 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500',
                    index !== 0 && 'mt-6 4xl:mt-7'
                  )}
                >
                  {item.name}
                </Title>
              )}
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default function SearchWidget({
  className,
  icon,
}: {
  className?: string;
  icon?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        setOpen(!open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const pathname = usePathname();
  useEffect(() => {
    setOpen(() => false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          'group inline-flex items-center focus:outline-none active:translate-y-px xl:h-10 xl:w-full xl:max-w-sm xl:rounded-xl xl:border xl:border-gray-200 xl:py-2 xl:pe-2 xl:ps-3.5 xl:shadow-sm xl:backdrop-blur-md xl:transition-colors xl:duration-200 xl:hover:border-gray-900 xl:hover:outline-double xl:hover:outline-[0.5px] xl:hover:outline-gray-900 xl:focus-visible:border-gray-900 xl:focus-visible:outline-double xl:focus-visible:outline-[0.5px] xl:focus-visible:outline-gray-900',
          className
        )}
      >
        {icon ? (
          icon
        ) : (
          <PiMagnifyingGlassBold className="magnifying-glass me-2 h-[18px] w-[18px]" />
        )}
        <span className="placeholder-text hidden text-sm text-gray-600 group-hover:text-gray-900 xl:inline-flex">
          Type what you are looking for...
        </span>
        <span className="search-command ms-auto hidden items-center text-sm text-gray-600 lg:flex lg:rounded-md lg:bg-gray-200/70 lg:px-1.5 lg:py-1 lg:text-xs lg:font-semibold xl:justify-normal">
          <PiCommand strokeWidth={1.3} className="h-[15px] w-[15px]" />K
        </span>
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        overlayClassName="dark:bg-opacity-20 dark:bg-gray-50 dark:backdrop-blur-sm"
        containerClassName="dark:bg-gray-100/90 overflow-hidden"
      >
        <SearchBox onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
