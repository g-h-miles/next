'use client';

import cn from '@/utils/class-names';
import NewsLetterForm from './newsletter-form';

export default function NewsLetter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        'rounded-2xl border border-gray-100 bg-white @container dark:bg-gray-100'
      )}
    >
      <div className="flex h-full w-full flex-col items-center justify-center p-6 py-10 @2xl:p-12 3xl:px-16 4xl:px-28">
        <h2 className="mx-auto mb-6 text-center text-xl font-bold text-black @2xl:mb-8 @2xl:text-2xl @7xl:text-3xl @7xl:leading-10 dark:text-white">
          Subscribe to our newsletter!
        </h2>
        <NewsLetterForm />
      </div>
    </div>
  );
}
