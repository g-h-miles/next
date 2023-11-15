import Image from 'next/image';
import ForgetPasswordForm from './forgot-password-form';
import AuthWrapperFive from '@/app/shared/auth-layout/auth-wrapper-five';
import WaveShape from '@/components/shape/wave';

export default function ForgotPassword() {
  return (
    <AuthWrapperFive
      title={
        <>
          Don&apos;t worry, we&apos;ve got you covered!{' '}
          <span className="relative px-2 text-white">
            <span className="relative z-10">RESET</span>{' '}
            <WaveShape className="absolute left-0 top-1/2 h-11 w-24 -translate-y-1/2 text-primary md:h-[52px] md:w-28 xl:h-14 xl:w-[120px] 2xl:w-[132px]" />
          </span>{' '}
          your password in no time.
        </>
      }
      pageImage={
        <div className="relative mx-auto aspect-[1/1.015] w-[540px] xl:w-[600px] 2xl:w-[636px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-in-thumb5.webp'
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
      <ForgetPasswordForm />
    </AuthWrapperFive>
  );
}
