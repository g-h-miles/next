'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ActionIcon } from '@/components/ui/action-icon';
import SearchWidget from '@/components/search/search';
import MessagesDropdown from '@/layouts/messages-dropdown';
import NotificationDropdown from '@/layouts/notification-dropdown';
import ProfileMenu from '@/layouts/profile-menu';
import SettingsButton from '@/components/settings/settings-button';
import HamburgerButton from '@/layouts/hamburger-button';
import Logo from '@/components/logo';
import {
  PiChatCircleDotsFill,
  PiBellSimpleRingingFill,
  PiGearFill,
} from 'react-icons/pi';
import cn from '@/utils/class-names';
import Sidebar from './helium-sidebar';

function HeaderMenuRight() {
  return (
    <div className="ms-auto grid shrink-0 grid-cols-4 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
      <MessagesDropdown>
        <ActionIcon
          aria-label="Messages"
          variant="text"
          className={cn(
            'relative h-[34px] w-[34px] overflow-hidden rounded-full shadow backdrop-blur-md before:absolute before:h-full before:w-full before:-rotate-45 before:rounded-full before:bg-gradient-to-l before:from-green-dark/25 before:via-green-dark/0 before:to-green-dark/0 dark:bg-gray-100 md:h-9 md:w-9 3xl:h-10 3xl:w-10 '
          )}
        >
          <PiChatCircleDotsFill className="h-[18px] w-auto 3xl:h-5" />
          <Badge
            renderAsDot
            color="success"
            enableOutlineRing
            className="absolute right-1 top-2.5 -translate-x-1 -translate-y-1/4"
          />
        </ActionIcon>
      </MessagesDropdown>
      <NotificationDropdown>
        <ActionIcon
          aria-label="Notification"
          variant="text"
          className={cn(
            'relative h-[34px] w-[34px] overflow-hidden rounded-full shadow backdrop-blur-md before:absolute before:h-full before:w-full before:-rotate-45 before:rounded-full before:bg-gradient-to-l before:from-orange-dark/25 before:via-orange-dark/0 before:to-orange-dark/0 dark:bg-gray-100 md:h-9 md:w-9 3xl:h-10 3xl:w-10'
          )}
        >
          <PiBellSimpleRingingFill className="h-[18px] w-auto 3xl:h-5" />
          <Badge
            renderAsDot
            color="warning"
            enableOutlineRing
            className="absolute right-1 top-2.5 -translate-x-1 -translate-y-1/4"
          />
        </ActionIcon>
      </NotificationDropdown>
      <SettingsButton className="rounded-full before:absolute before:h-full before:w-full before:-rotate-45 before:rounded-full before:bg-gradient-to-l before:from-green-dark/25 before:via-green-dark/0 before:to-green-dark/0 3xl:h-10 3xl:w-10">
        <PiGearFill className="h-[22px] w-auto animate-spin-slow" />
      </SettingsButton>
      <ProfileMenu />
    </div>
  );
}

export default function Header() {
  return (
    <header
      className={
        'sticky top-0 z-50 xl:-ms-1.5 2xl:-ms-0 flex items-center bg-gray-0/80 px-4 py-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 xl:pl-4 2xl:py-5 2xl:pl-6 3xl:px-8 3xl:pl-6 4xl:px-10 4xl:pl-9'
      }
    >
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton
          view={
            <Sidebar className="static w-full xl:p-0 2xl:w-full [&>div]:xl:rounded-none" />
          }
        />
        <Link
          href={'/'}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 lg:me-5 xl:hidden"
        >
          <Logo iconOnly={true} />
        </Link>
        <SearchWidget className="[&_.search-command]:lg:bg-gray-900 [&_.search-command]:lg:text-gray-0" />
      </div>
      <HeaderMenuRight />
    </header>
  );
}
