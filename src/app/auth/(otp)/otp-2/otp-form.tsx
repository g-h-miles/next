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
        <div className="space-y-10">
          <PinCode
            variant="outline"
            setValue={(value) => setValue('otp', String(value))}
            color="info"
            size="lg"
            className="lg:justify-start"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Button
              className="w-full text-base font-medium"
              type="submit"
              size="xl"
              color="info"
              rounded="pill"
              variant="outline"
            >
              RESEND OTP
            </Button>
            <Button
              className="w-full text-base font-medium"
              type="submit"
              size="xl"
              color="info"
              rounded="pill"
            >
              VERIFY OTP
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
}
