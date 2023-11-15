'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/text';
import ForbiddenImg from '@public/403img.svg';
import ForbiddenTwoImg from '@public/forbidden-two.png';
import { PiHouseLineBold } from 'react-icons/pi';

export default function AccessDeniedPage() {
  const { push } = useRouter();
  return (
    <div className="flex grow items-center px-6 xl:px-10">
      <div className="mx-auto text-center">
        <div className="relative mx-auto max-w-[370px]">
          <Image
            src={ForbiddenImg}
            alt="forbidden"
            className="mx-auto mb-8 aspect-[360/326] max-w-[256px] xs:max-w-[370px] lg:mb-12 2xl:mb-16"
          />
          <Image
            src={ForbiddenTwoImg}
            alt="forbidden"
            className="absolute right-10 top-10 aspect-auto max-w-[100px] dark:right-0 dark:top-5 dark:invert "
          />
        </div>
        <Title
          as="h1"
          className="text-2xl font-bold leading-normal text-gray-1000 lg:text-3xl"
        >
          Access Denied
        </Title>
        <p className="mt-3 text-sm leading-loose text-gray-500 lg:mt-6 lg:text-base lg:leading-loose">
          You do not have permission to access this page.
          <br className="hidden xs:inline-block" />
          Please contact your site administrator to request access.
        </p>
        <Button
          color="primary"
          size="xl"
          className="mt-8 h-12 px-4 xl:h-14 xl:px-6"
          onClick={() => push('/')}
        >
          <PiHouseLineBold className="mr-1.5 text-lg" />
          Back to home
        </Button>
      </div>
    </div>
  );
}
