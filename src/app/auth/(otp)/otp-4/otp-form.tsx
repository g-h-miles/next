'use client';

import { PinCode } from '@/components/ui/pin-code';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
  otp: string;
};

export default function OtpForm() {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ setValue }) => (
        <div className="space-y-5 lg:space-y-8">
          <PinCode
            variant="outline"
            setValue={(value) => setValue('otp', String(value))}
            className="pb-2"
            size="lg"
          />

          <Button
            className="w-full text-base font-medium"
            type="submit"
            size="xl"
            variant="outline"
            rounded="lg"
          >
            Resend OTP
          </Button>
          <Button
            className="w-full text-base font-medium"
            type="submit"
            size="xl"
            rounded="lg"
          >
            Verify OTP
          </Button>
        </div>
      )}
    </Form>
  );
}
