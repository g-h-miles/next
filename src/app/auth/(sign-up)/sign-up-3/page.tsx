import SignUpForm from './sign-up-form';
import AuthWrapperThree from '@/app/shared/auth-layout/auth-wrapper-three';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign Up 3'),
};

export default function SignUpPage() {
  return (
    <AuthWrapperThree
      title={
        <>
          <span className="bg-gradient-to-r from-[#136A8A] to-[#267871] bg-clip-text text-transparent">
            Join us today!
          </span>{' '}
          Get special benefits and stay up-to-date.
        </>
      }
      isSocialLoginActive={true}
    >
      <SignUpForm />
    </AuthWrapperThree>
  );
}
