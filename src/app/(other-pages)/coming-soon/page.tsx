import Image from 'next/image';
import { Title } from '@/components/ui/text';
import CountdownTimer from './countdown-timer';
import SubscriptionForm from '@/app/shared/subscription-form';
import { PiPlusBold } from 'react-icons/pi';
import ComingSoonImg from '@public/coming-soon.png';
import ComingSoonTwoImg from '@public/coming-soon-2.png';

export default function ComingSoonPage() {
  return (
    <div className="relative flex grow flex-col-reverse items-center justify-center gap-y-5 px-6 pt-10 lg:flex-row lg:pt-0 xl:px-10">
      <div className="z-10 mx-auto w-full max-w-[1536px] text-center lg:text-start">
        <Title
          as="h1"
          className="mb-3 text-2xl font-bold text-gray-1000 md:mb-5 md:text-3xl md:leading-snug xl:text-4xl xl:leading-normal 2xl:text-5xl 2xl:leading-normal"
        >
          Our website is developing. Keep{' '}
          <br className="hidden sm:inline-block" /> patience, we are coming soon
        </Title>
        <p className="mb-6 text-sm leading-loose text-gray-500 md:mb-8 xl:mb-10 xl:text-base xl:leading-loose">
          We have been spending long hours in order to launch our new website.
          Join our <br className="hidden sm:inline-block" /> mailing list or
          follow us on Facebook for get latest update.
        </p>
        <div className="flex justify-center lg:justify-start">
          <CountdownTimer />
        </div>
        <p className="mb-4 mt-8 text-sm font-semibold leading-normal text-gray-800 md:mt-10 xl:mb-6 xl:mt-12 xl:text-base">
          Don’t want to miss update? Subscribe now
        </p>
        <SubscriptionForm />
      </div>

      <Image
        src={ComingSoonTwoImg}
        alt="coming soon"
        className="fixed start-0 top-0 hidden w-28 rtl:rotate-90 dark:invert 3xl:inline-block 3xl:w-32"
      />
      <div className="end-10 top-1/2 lg:absolute lg:-translate-y-1/2 xl:end-[10%] 3xl:end-[15%]">
        <Image
          src={ComingSoonImg}
          alt="coming-soon"
          className="aspect-[531/721] max-w-[194px] md:max-w-[256px] lg:max-w-sm xl:max-w-[400px] 3xl:max-w-[531px]"
        />
      </div>

      <PLusIconPatterns />
    </div>
  );
}

function PLusIconPatterns() {
  return (
    <>
      <PiPlusBold className="absolute end-5 top-5 hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
      <PiPlusBold className="absolute bottom-5 end-3 hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[20%] top-5 hidden animate-popup text-gray-1000 [--popup-delay:300ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[7%] top-1/3 hidden rotate-45 animate-popup text-gray-1000 [--popup-delay:100ms] lg:inline-block" />
      <PiPlusBold className="absolute bottom-[10%] end-[10%] hidden rotate-45 animate-popup text-xl text-gray-1000 [--popup-delay:150ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[20%] top-[20%] hidden animate-popup text-gray-1000 [--popup-delay:300ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[40%] top-[20%] hidden animate-popup text-gray-1000 [--popup-delay:400ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[48%] top-10 hidden animate-popup text-[10px] text-gray-1000 [--popup-delay:500ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[40%] top-1/2 hidden rotate-45 animate-popup text-xl text-gray-1000 [--popup-delay:250ms] lg:inline-block" />
      <PiPlusBold className="absolute bottom-10 end-[38%] hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
    </>
  );
}
