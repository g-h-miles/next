import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import SignUpForm from './sign-up-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign Up 1'),
};

export default function SignUp() {
  return (
    <AuthWrapperOne
      title={
        <>
          Join us and never miss a thing -{' '}
          <span className="relative inline-block">
            SIGN UP!
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" />
          </span>
        </>
      }
      description="By signing up, you will gain access to exclusive content, special offers, and be the first to hear about exciting news and updates."
      bannerTitle="The simplest way to manage your workspace."
      bannerDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint velit officia consequat duis."
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
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
      <SignUpForm />
    </AuthWrapperOne>
  );
}
