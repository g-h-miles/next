'use client';

import logoImg from '@public/logo-short.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { PiArrowLeftBold } from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import OrSeparation from './or-separation';
import cn from '@/utils/class-names';

export default function AuthWrapperThree({
  children,
  title,
  isSocialLoginActive = false,
  isSignIn = false,
  className = '',
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  isSocialLoginActive?: boolean;
  isSignIn?: boolean;
  className?: string;
}) {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col justify-center bg-gradient-to-tr from-[#136A8A] to-[#267871] p-4 md:p-12 lg:p-28">
        <Link
          href={'/'}
          className="mb:pb-3 start-4 z-10 flex items-center justify-center pb-6 pt-3 text-sm font-medium text-white/80 hover:text-white md:absolute md:top-1/2 md:-translate-y-1/2 md:rounded-full "
        >
          <PiArrowLeftBold />
          <span className="-mt-px ms-1 font-lexend">Back to home</span>
        </Link>
        <div
          className={cn(
            'mx-auto w-full max-w-md rounded-xl bg-white px-4 py-9 dark:bg-gray-50 sm:px-6 md:max-w-xl md:px-10 md:py-12 lg:max-w-[700px] lg:px-16 xl:rounded-2xl 3xl:rounded-3xl',
            className
          )}
        >
          <div className="flex flex-col items-center">
            <Link href={'/'} className="mb-7 inline-block max-w-[64px] lg:mb-9">
              <Image src={logoImg} alt="Isomorphic" className="dark:invert" />
            </Link>
            <Title
              as="h2"
              className="mb-7 text-center text-[26px] leading-snug md:text-3xl md:!leading-normal lg:mb-10 lg:text-4xl lg:leading-normal"
            >
              {title}
            </Title>
          </div>
          {isSocialLoginActive && (
            <>
              <div className="flex flex-col gap-4 pb-6 md:flex-row md:gap-6 md:pb-7">
                <Button className="h-11 w-full" variant="outline">
                  <BsFacebook className="me-2 h-5 w-5 shrink-0 text-primary" />
                  <span className="truncate">Signin With Facebook</span>
                </Button>
                <Button variant="outline" className="h-11 w-full">
                  <FcGoogle className="me-2 h-5 w-5 shrink-0" />
                  <span className="truncate">Signin With Google</span>
                </Button>
              </div>
              <OrSeparation
                title={`Or, Sign ${isSignIn ? 'in' : 'up'} with your email`}
                isCenter
                className="mb-4"
              />
            </>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
