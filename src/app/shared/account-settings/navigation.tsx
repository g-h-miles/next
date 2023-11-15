'use client';

import Link from 'next/link';
import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { useScrollableSlider } from '@/hooks/use-scrollable-slider';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { usePathname } from 'next/navigation';
import cn from '@/utils/class-names';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import { useBerylliumSidebars } from '@/layouts/beryllium/beryllium-utils';

const menuItems = [
  {
    label: 'My Details',
    value: '/forms/profile-settings',
  },
  {
    label: 'Profile',
    value: '/forms/profile-settings/profile',
  },
  {
    label: 'Password',
    value: '/forms/profile-settings/password',
  },
  {
    label: 'Team',
    value: '/forms/profile-settings/team',
  },
  {
    label: 'Billing',
    value: '/forms/profile-settings/billing',
  },
  {
    label: 'Notifications',
    value: '/forms/profile-settings/notification',
  },
  {
    label: 'Integrations',
    value: '/forms/profile-settings/integration',
  },
];

export default function ProfileSettingsNav() {
  const pathname = usePathname();
  const { layout } = useLayout();
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();
  const { expandedLeft } = useBerylliumSidebars();
  return (
    <div
      className={cn(
        'sticky z-20 -mx-4 -mt-4 border-b border-gray-200 bg-white px-4 py-0 font-medium text-gray-500 dark:bg-gray-50 sm:-mt-2 md:-mx-5 md:px-5 lg:-mx-8 lg:mt-0 lg:px-8 xl:-mx-6 xl:px-6 2xl:top-20 3xl:-mx-[33px] 3xl:px-[33px] 4xl:-mx-10 4xl:px-10',
        layout === LAYOUT_OPTIONS.LITHIUM
          ? 'top-[66px] sm:top-[70px] md:top-[73px] '
          : layout === LAYOUT_OPTIONS.BERYLLIUM
          ? 'top-[62px] sm:top-[72px] 2xl:top-[72px]'
          : 'top-[62px] md:top-[71px]',
        layout === LAYOUT_OPTIONS.BERYLLIUM &&
          expandedLeft &&
          'xl:-ms-1 xl:px-0 3xl:-ms-2 3xl:ps-0 4xl:-ms-2'
      )}
    >
      <div className="relative flex items-center overflow-hidden">
        <Button
          title="Prev"
          variant="text"
          ref={sliderPrevBtn}
          onClick={() => scrollToTheLeft()}
          className="!absolute left-0 top-0.5 z-10 !h-[calc(100%-4px)] w-8 !justify-start bg-gradient-to-r from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50 dark:via-gray-50 lg:hidden"
        >
          <PiCaretLeftBold className="w-5" />
        </Button>
        <div className="flex h-[52px] items-start overflow-hidden">
          <div
            className="-mb-7 flex w-full gap-3 overflow-x-auto scroll-smooth pb-7 md:gap-5 lg:gap-8"
            ref={sliderEl}
          >
            {menuItems.map((menu, index) => (
              <Link
                href={`${menu.value}`}
                key={`menu-${index}`}
                className={cn(
                  'group relative cursor-pointer whitespace-nowrap py-2.5 font-medium text-gray-500 before:absolute before:bottom-0 before:left-0 before:z-[1] before:h-0.5  before:bg-gray-1000 before:transition-all hover:text-gray-900',
                  menu.value.toLowerCase() === pathname
                    ? 'before:visible before:w-full before:opacity-100'
                    : 'before:invisible before:w-0 before:opacity-0'
                )}
              >
                <Text
                  as="span"
                  className="inline-flex rounded-md px-2.5 py-1.5 transition-all duration-200 group-hover:bg-gray-100/70"
                >
                  {menu.label}
                </Text>
              </Link>
            ))}
          </div>
        </div>
        <Button
          title="Next"
          variant="text"
          ref={sliderNextBtn}
          onClick={() => scrollToTheRight()}
          className="!absolute right-0 top-0.5 z-10 !h-[calc(100%-4px)] w-8 !justify-end bg-gradient-to-l from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50 dark:via-gray-50 lg:hidden"
        >
          <PiCaretRightBold className="w-5" />
        </Button>
      </div>
    </div>
  );
}
