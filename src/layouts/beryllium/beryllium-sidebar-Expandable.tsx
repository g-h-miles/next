'use client';

import cn from '@/utils/class-names';
import { useBerylliumSidebars } from '@/layouts/beryllium/beryllium-utils';
import { useAtomValue } from 'jotai';
import {
  ItemType,
  berylliumMenuItemAtom,
} from '@/layouts/beryllium/beryllium-fixed-menu-items';
import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Collapse } from '@/components/ui/collapse';
import { PiCaretDownBold } from 'react-icons/pi';
import SimpleBar from '@/components/ui/simplebar';

function LinkMenuItem({ item }: { item: ItemType }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = item.icon;
  return (
    <Link
      href={item.href ?? '/'}
      className={cn(
        'flex items-center gap-3 rounded-2xl  px-4 py-2 font-medium duration-200 ',
        isActive
          ? 'bg-primary text-white dark:bg-gray-100 dark:text-primary-lighter'
          : 'hover:bg-gray-100 hover:text-gray-900'
      )}
    >
      <span>
        <Icon className="h-[18px] w-[18px]" />
      </span>
      {item.name}
    </Link>
  );
}

function CollapsibleMenuItem({ item }: { item: ItemType }) {
  const pathname = usePathname();
  const pathnameExistInDropdowns: any = item?.subMenuItems?.filter(
    (dropdownItem) => dropdownItem.href === pathname
  );
  const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);
  const isActive = item.subMenuItems?.some(
    (subMenuItem) => subMenuItem.href === pathname
  );

  const Icon = item.icon;

  return (
    <Collapse
      defaultOpen={isDropdownOpen}
      className="testing [&_>_div]:mx-4 [&_>_div]:my-2 [&_>_div]:px-4 [&_>_div]:py-2 [&_>_div]:lg:my-0 [&_>_div]:2xl:mx-0 [&_>_div]:2xl:my-0"
      panelClassName="[&_>_a]:px-0 xl:!mt-2 2xl!:mt-2 3xl:!mt-2 [&_>_a]:mx-0 [&_>_a]:py-0 [&_>_a]:ps-4 [&_>_a]:my-0 space-y-5"
      header={({ open, toggle }) => (
        <div
          onClick={toggle}
          className={cn(
            'group relative flex cursor-pointer items-center justify-between rounded-full px-4 py-2 font-medium duration-200',
            isActive || isDropdownOpen
              ? 'bg-primary text-white dark:bg-gray-100 dark:text-primary-lighter'
              : 'hover:bg-gray-100 hover:text-gray-900'
          )}
        >
          <span className={'flex items-center gap-3 '}>
            <Icon className="h-[18px] w-[18px]" />
            {item.name}
          </span>

          <PiCaretDownBold
            strokeWidth={3}
            className={cn(
              'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
              open && 'rotate-0 rtl:rotate-0',
              (isActive || isDropdownOpen) &&
                'text-white dark:text-primary-lighter'
            )}
          />
        </div>
      )}
    >
      {item?.subMenuItems?.map((subMenuItem, index) => {
        const isChildActive = pathname === (subMenuItem?.href as string);

        return (
          <Link
            href={subMenuItem?.href}
            key={subMenuItem?.name + index}
            className={cn(
              'mx-3.5 mb-0.5 flex items-center rounded-md px-3.5 py-2 font-medium capitalize duration-200 last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5',
              isChildActive
                ? 'text-primary'
                : 'text-gray-500 hover:text-primary'
            )}
          >
            <span
              className={cn(
                'me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200',
                isChildActive
                  ? 'bg-primary text-primary ring-[1px] ring-primary'
                  : 'opacity-40'
              )}
            />
            {subMenuItem?.name}
          </Link>
        );
      })}
    </Collapse>
  );
}

export default function BerylliumLeftSidebarExpandable() {
  const { expandedLeft } = useBerylliumSidebars();
  const selectedMenu = useAtomValue(berylliumMenuItemAtom);

  return (
    <div
      className={cn(
        'fixed start-[104px] top-[91px] z-50 hidden h-full w-0 overflow-x-hidden duration-200 xl:flex',
        !!expandedLeft && 'w-[294px]'
      )}
    >
      <SimpleBar className="h-[calc(100vh_-_100px)] min-w-[294px] pe-2.5">
        <p className="mb-3 text-xs text-gray-500">{selectedMenu.title}</p>
        <div className="flex flex-col gap-2">
          {selectedMenu.menuItems.map((menu) => (
            <Fragment key={menu.name}>
              {menu.href ? (
                <LinkMenuItem item={menu} />
              ) : (
                <CollapsibleMenuItem item={menu} />
              )}
            </Fragment>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
