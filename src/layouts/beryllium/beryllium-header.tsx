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
  PiBellSimpleRinging,
  PiChatsCircle,
  PiGear,
  PiMagnifyingGlass,
} from 'react-icons/pi';
import cn from '@/utils/class-names';
import Sidebar from '@/layouts/beryllium/beryllium-sidebar-drawer';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useWindowScroll } from '@/hooks/use-window-scroll';

// relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9

function HeaderMenuRight() {
  return (
    <div className="ms-auto flex shrink-0 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
      <MessagesDropdown>
        <ActionIcon
          aria-label="Messages"
          variant="text"
          className={cn(
            ' relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9  md:w-9 3xl:h-10 3xl:w-10'
          )}
        >
          <PiChatsCircle className="h-6 w-auto" />
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
            ' relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9  md:w-9 3xl:h-10 3xl:w-10'
          )}
        >
          <PiBellSimpleRinging className="h-6 w-auto" />
          <Badge
            renderAsDot
            color="warning"
            enableOutlineRing
            className="absolute right-1 top-2.5 -translate-x-1 -translate-y-1/4"
          />
        </ActionIcon>
      </NotificationDropdown>
      <SettingsButton
        className={cn(
          'relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9  md:w-9 3xl:h-10 3xl:w-10'
        )}
      >
        <PiGear className="h-[22px] w-auto animate-spin-slow" />
      </SettingsButton>
      <ProfileMenu
        buttonClassName="w-auto sm:w-auto"
        avatarClassName="!w-7 !h-7 sm:!h-10 sm:!w-10"
      />
    </div>
  );
}

export default function Header({ className }: { className?: string }) {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();
  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 backdrop-blur-xl dark:bg-gray-50/50 xl:pe-8',
        ((isMounted && windowScroll.y) as number) > 2 ? 'card-shadow ' : '',
        className
      )}
    >
      <div className="hidden items-center gap-3 xl:flex">
        <Link
          aria-label="Site Logo"
          href={'/'}
          className="me-4 hidden w-[155px] shrink-0 text-gray-900 lg:me-5 xl:block"
        >
          <Logo className="max-w-[155px]" />
        </Link>
      </div>
      <div className="flex w-full items-center justify-between gap-5 xl:w-[calc(100%_-_190px)] 2xl:w-[calc(100%_-_310px)] 3xl:gap-6">
        <div className="flex max-w-2xl items-center xl:w-auto">
          <HamburgerButton
            view={<Sidebar className="static w-full 2xl:w-full" />}
          />
          <Link
            aria-label="Site Logo"
            href="/"
            className="me-4 w-9 shrink-0 text-gray-900 lg:me-5 xl:hidden"
          >
            <Logo iconOnly={true} />
          </Link>
          <SearchWidget
            icon={<PiMagnifyingGlass className="me-3 h-[20px] w-[20px]" />}
            className="xl:w-[500px] [&_.search-command]:bg-gray-900 [&_.search-command]:text-gray-50"
          />
        </div>
        <div className="flex items-center justify-between">
          <HeaderMenuRight />
        </div>
      </div>
    </header>
  );
}
