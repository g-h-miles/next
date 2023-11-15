import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import SubscriptionForm from '@/app/shared/subscription-form';
import MaintananceImg from '@public/maintanance.png';

export default function MaintenancePage() {
  return (
    <div className="flex grow items-center px-6 xl:px-10">
      <div className="mx-auto flex w-full max-w-[1520px] flex-col-reverse items-center justify-between gap-5 text-center lg:flex-row lg:text-start">
        <div>
          <Title
            as="h1"
            className="mb-3 text-[22px] font-bold leading-snug text-gray-1000 sm:text-2xl md:mb-5 md:text-3xl md:leading-snug xl:mb-7 xl:text-4xl xl:leading-normal 2xl:text-[40px] 3xl:text-5xl 3xl:leading-snug"
          >
            Our website is under <br className="hidden sm:inline-block" />{' '}
            construction. Please keep <br className="hidden sm:inline-block" />{' '}
            patience, we are coming soon
          </Title>
          <Text className="mb-6 text-sm leading-loose text-gray-500 md:mb-8 xl:mb-10 xl:text-base xl:leading-loose">
            We have been spending long hours in order to launch our new website.
            Join our{' '}
            <br className="hidden md:inline-block lg:hidden xl:inline-block" />{' '}
            mailing list or follow us on Facebook for get latest update.
          </Text>
          <Text className="mb-4 mt-8 text-sm font-semibold leading-normal text-gray-800 md:mt-10 xl:mb-6 xl:mt-12 xl:text-base">
            Don’t want to miss update? Subscribe now
          </Text>
          <SubscriptionForm />
        </div>
        <div className="pt-5 lg:pt-0">
          <Image
            src={MaintananceImg}
            alt="maintanance"
            className="aspect-[768/558] max-w-[320px] dark:invert sm:max-w-sm xl:max-w-[580px] 2xl:max-w-[768px]"
          />
        </div>
      </div>
    </div>
  );
}
