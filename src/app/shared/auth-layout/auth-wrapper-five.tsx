'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';
import {
  PiAppleLogoBold,
  PiArrowLeftBold,
  PiFacebookLogoBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
} from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import TreeShape from '@/components/shape/tree';
import { siteConfig } from '@/config/site.config';

const socialShare = [
  {
    title: 'Apple',
    icon: <PiAppleLogoBold className="h-auto w-3.5 text-gray-900" />,
  },
  {
    title: 'Google',
    icon: <FcGoogle className="h-auto w-3.5" />,
  },
  {
    title: 'Facebook',
    icon: <PiFacebookLogoBold className="h-auto w-3.5 text-[#1877F2]" />,
  },
  {
    title: 'GitHub',
    icon: <PiGithubLogoBold className="h-auto w-3.5 text-gray-900" />,
  },
  {
    title: 'LinkedIn',
    icon: <PiLinkedinLogoBold className="h-auto w-3.5 text-[#0A66C2]" />,
  },
];

export default function AuthWrapperFive({
  children,
  title,
  pageImage,
  isSocialLoginActive = false,
  wrapperClassName = '',
  formClassName = '',
  backHomeClassName = '',
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  pageImage?: React.ReactNode;
  isSocialLoginActive?: boolean;
  wrapperClassName?: string;
  formClassName?: string;
  backHomeClassName?: string;
}) {
  return (
    <>
      <Link
        href={'/'}
        className="sticky top-0 z-20 block w-full border-gray-300 bg-blue p-4 py-2 text-sm font-medium text-white lg:absolute lg:start-1/2 lg:-translate-x-1/2 lg:justify-start lg:bg-transparent lg:text-gray-700 xl:py-6"
      >
        <div
          className={cn(
            'flex items-center justify-center lg:mx-auto lg:w-full lg:max-w-5xl lg:justify-start xl:w-auto xl:max-w-7xl xl:ps-[60px] 2xl:max-w-[1432px] 2xl:ps-0',
            backHomeClassName
          )}
        >
          <PiArrowLeftBold />
          <span className="ms-1 font-medium">Back to home</span>
        </div>
      </Link>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-5 2xl:p-10">
        <div
          className={cn(
            'mx-auto mt-5 flex w-full grow items-center justify-center gap-10 md:mt-8 lg:mt-24 lg:max-w-5xl lg:justify-between xl:w-auto xl:max-w-7xl 2xl:max-w-[1720px]',
            wrapperClassName
          )}
        >
          <div
            className={cn(
              'w-full max-w-sm md:max-w-md xl:max-w-lg xl:shrink-0 2xl:w-[656px] 2xl:max-w-none',
              formClassName
            )}
          >
            <div className="mb-10 px-4 text-center lg:px-0 lg:text-start">
              <Link
                href={'/'}
                className="mb-6 inline-block max-w-[168px] xl:mb-8"
              >
                <Image src={siteConfig.logo} alt={siteConfig.title} />
              </Link>
              <Title
                as="h2"
                className="mb-5 text-[26px] leading-normal @container md:text-3xl md:!leading-normal lg:mb-7 lg:pe-8 lg:text-3xl xl:pe-16 xl:text-[32px] 2xl:pe-0 2xl:text-4xl"
              >
                {title}
              </Title>
            </div>
            {isSocialLoginActive && (
              <>
                <div className="mb-10 flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-6">
                  {socialShare.map((item) => (
                    <Link
                      href="/"
                      className="flex shrink-0 flex-col items-center text-sm text-gray-700 transition-colors hover:text-primary lg:gap-y-0 xl:text-base [&>svg]:w-5 xl:[&>svg]:w-6"
                      key={item.title}
                    >
                      {item.icon}
                      <span className="mt-2.5 lg:mt-3.5">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {children}
          </div>
          <div className="hidden pb-8 pt-10 text-center lg:block lg:w-[500px] xl:w-[600px] xl:pt-14 2xl:block 2xl:w-[730px]">
            {pageImage}
          </div>
        </div>
        <div className="mx-auto mb-6 mt-auto flex w-full justify-end border-b border-gray-900 pe-1 pt-10 lg:mb-10 xl:max-w-7xl 2xl:max-w-[1720px]">
          <TreeShape className="relative -mb-3 h-12 w-16 md:h-14 md:w-20 lg:h-[70px] lg:w-28" />
        </div>
      </div>
    </>
  );
}
