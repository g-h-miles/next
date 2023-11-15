import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import OtpForm from './otp-form';
import AuthWrapperFive from '@/app/shared/auth-layout/auth-wrapper-five';
import WaveLongShape from '@/components/shape/wave-long';

export default function OtpPage() {
  return (
    <AuthWrapperFive
      formClassName="2xl:!max-w-md"
      wrapperClassName="xl:!max-w-[1140px] 2xl:!max-w-[1240px] 2xl:!px-0"
      backHomeClassName="xl:!max-w-[1212px] 2xl:!max-w-[1240px]"
      title={
        <>
          Enter{' '}
          <span className="relative px-2 text-white">
            <span className="relative z-10">VALIDATION</span>{' '}
            <WaveLongShape className="absolute left-0 top-1/2 h-11 w-44 -translate-y-1/2 text-primary md:h-[52px] md:w-[200px] xl:h-14 xl:w-52 2xl:w-60" />
          </span>{' '}
          code{' '}
        </>
      }
      pageImage={
        <div className="relative mx-auto aspect-[1/1.015] w-[540px] xl:w-[600px] 2xl:w-[636px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-in-thumb5.png'
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <Text className="-mt-3 pb-8 text-center text-[15px] leading-[1.85] text-gray-700 md:text-base md:!leading-loose lg:-mt-5 lg:text-start">
        One time password has been sent to +*********12
      </Text>
      <OtpForm />
    </AuthWrapperFive>
  );
}
