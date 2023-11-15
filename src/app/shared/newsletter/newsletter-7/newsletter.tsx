'use client';

import Image from 'next/image';
import cn from '@/utils/class-names';
import NewsLetterForm from './newsletter-form';
import newsletterImg from '@public/newsletter-7.jpg';

export default function NewsLetter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        'grid grid-cols-7 overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-gray-100'
      )}
    >
      <div className="relative col-span-3 hidden aspect-[36/45] @[700px]:inline-block">
        <Image
          src={newsletterImg}
          alt="newsletter"
          fill
          priority
          sizes="(max-width: 768px) 140px"
        />
      </div>
      <div className="col-span-full flex flex-col items-start justify-center rounded-xl bg-gray-50 p-6 @[700px]:col-span-4 @[700px]:!items-center @[700px]:bg-transparent @[700px]:pl-8 dark:bg-gray-100">
        <div className="w-full @[700px]:max-w-[440px]">
          <div className="mb-8 text-center">
            <h2 className="mx-auto mb-3 text-xl @2xl:text-2xl @7xl:text-3xl @7xl:leading-10 @[700px]:mb-4">
              Subscribe to our newsletter!
            </h2>
            <p className="mx-auto max-w-[26ch] text-sm leading-6 text-gray-500 @2xl:text-base dark:text-gray-600">
              Be the first to get exclusive offers ands the latest news
            </p>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
}
