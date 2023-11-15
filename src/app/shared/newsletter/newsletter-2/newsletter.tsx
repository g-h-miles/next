'use client';

import Image from 'next/image';
import cn from '@/utils/class-names';
import LogoLight from '@public/logo-short-light.svg';
import Logo from '@public/logo-short.svg';
import NewsLetterForm from './newsletter-form';

export default function NewsLetter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        'rounded-2xl border border-gray-100 bg-white @container dark:bg-gray-100'
      )}
    >
      <div className="flex h-full w-full flex-col items-center justify-center p-6 @2xl:p-12 3xl:px-16 4xl:px-28">
        <div className="w-full max-w-[640px]">
          <div className="relative mx-auto mb-6 h-20 w-20 @2xl:mb-8 @2xl:h-28 @2xl:w-28">
            <Image
              src={Logo}
              alt="newsletter"
              fill
              priority
              sizes="(max-width: 768px) 140px"
              className="visible dark:invisible"
            />
            <Image
              src={LogoLight}
              alt="newsletter"
              fill
              priority
              sizes="(max-width: 768px) 140px"
              className="invisible dark:visible"
            />
          </div>
          <div className="mb-8 text-center @2xl:mb-12">
            <h2 className="mb-2 text-xl @2xl:mb-3 @2xl:text-2xl">
              Subscribe to our newsletter
            </h2>
            <p className="mx-auto max-w-[45ch] text-sm leading-6 text-gray-500 @2xl:text-base">
              Be the first to get exclusive offers ands the latest news
            </p>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
