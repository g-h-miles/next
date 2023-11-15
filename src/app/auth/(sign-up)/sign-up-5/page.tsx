import Image from 'next/image';
import SignUpForm from './sign-up-form';
import AuthWrapperFive from '@/app/shared/auth-layout/auth-wrapper-five';
import WaveShape from '@/components/shape/wave';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign Up 5'),
};

export default function SignUp() {
  return (
    <AuthWrapperFive
      title={
        <>
          Join our community and unlock a world of possibilities –{' '}
          <span className="relative mt-2 inline-flex px-2 text-white @sm:mt-0">
            <span className="relative z-10">SIGN UP!</span>{' '}
            <WaveShape className="absolute start-0 top-1/2 h-[52px] w-36 -translate-y-1/2 text-primary md:h-14 md:w-40 xl:h-16 xl:w-44 2xl:h-[70px] 2xl:w-48" />
          </span>
        </>
      }
      pageImage={
        <div className="relative mx-auto aspect-[1/1.015] w-[540px] xl:w-[600px] 2xl:w-[636px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-in-thumb5.webp'
            }
            fill
            priority
            alt="Sign Up Thumbnail"
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
      isSocialLoginActive
    >
      <SignUpForm />
    </AuthWrapperFive>
  );
}
