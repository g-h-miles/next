'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SocialItems from '@/components/ui/social-shares';
import { usePathname, useRouter } from 'next/navigation';
import cn from '@/utils/class-names';
import { siteConfig } from '@/config/site.config';
import { routes } from '@/config/routes';

const ignoreBackButtonRoutes = [routes.accessDenied, routes.notFound];

export default function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { back } = useRouter();
  const pathName = usePathname();
  let notIn = !ignoreBackButtonRoutes.includes(pathName);
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-gray-50">
      {/* sticky top header  */}
      <div className="sticky top-0 z-40 px-6 py-5 backdrop-blur-lg lg:backdrop-blur-none xl:px-10 xl:py-8">
        <div
          className={cn(
            'mx-auto flex max-w-[1520px] items-center',
            notIn ? 'justify-between' : 'justify-center'
          )}
        >
          <Link href={'/'}>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.title}
              className="dark:invert"
              priority
            />
          </Link>
          {notIn && (
            <Button
              variant="outline"
              size="sm"
              className="md:h-10 md:px-4 md:text-base"
              onClick={() => back()}
            >
              Go to home
            </Button>
          )}
        </div>
      </div>
      {children}
      <SocialItems />
    </div>
  );
}
