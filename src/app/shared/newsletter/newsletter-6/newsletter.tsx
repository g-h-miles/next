'use client';

import Image from 'next/image';
import cn from '@/utils/class-names';
import NewsLetterForm from './newsletter-form';
import newsletterImg from '@public/newsletter-6.jpg';
import newsletterImgDark from '@public/newsletter-6-dark.jpg';

export default function NewsLetter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        'grid grid-cols-7 rounded-2xl border border-gray-100 p-3 @container dark:bg-gray-100'
      )}
    >
      <div className="relative col-span-3 hidden aspect-[36/45] @[674px]:inline-block">
        <Image
          src={newsletterImg}
          alt="newsletter"
          fill
          priority
          sizes="(max-width: 768px) 140px"
          className="visible rounded-lg dark:invisible"
        />
        <Image
          src={newsletterImgDark}
          alt="newsletter"
          fill
          priority
          sizes="(max-width: 768px) 140px"
          className="invisible rounded-lg dark:visible"
        />
      </div>
      <div className="col-span-full flex flex-col items-start justify-center rounded-xl bg-gray-50 p-6 @[674px]:col-span-4 @[674px]:!items-center @[674px]:bg-transparent @[674px]:pl-8">
        <div className="w-full @[674px]:max-w-[440px]">
          <div className="mb-8">
            <h2 className="mb-3 text-xl @2xl:text-2xl @7xl:text-3xl @7xl:leading-10 @[674px]:mb-4 @[674px]:max-w-[15ch]">
              Subscribe to our newsletter!
            </h2>
            <p className="max-w-[26ch] text-sm leading-6 text-gray-500 @2xl:text-base dark:text-gray-600">
              Be the first to get exclusive offers ands the latest news
            </p>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
