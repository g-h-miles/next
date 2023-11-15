import ForgetPasswordForm from './forgot-password-form';
import AuthWrapperThree from '@/app/shared/auth-layout/auth-wrapper-three';

export default function ForgotPassword() {
  return (
    <AuthWrapperThree
      title={
        <>
          <span className="bg-gradient-to-r from-[#136A8A] to-[#267871] bg-clip-text text-transparent">
            Reset Password
          </span>
        </>
      }
      className="lg:pb-16 lg:pt-20"
    >
      <ForgetPasswordForm />
    </AuthWrapperThree>
  );
}
