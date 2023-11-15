'use client';

import { Button } from '@/components/ui/button';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { PinCode } from '@/components/ui/pin-code';

type FormValues = {
  otp: string;
};

export default function OtpForm() {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form<FormValues> onSubmit={onSubmit} className="w-full">
      {({ setValue }) => (
        <div className="space-y-5 lg:space-y-7">
          <PinCode
            variant="outline"
            setValue={(value) => setValue('otp', String(value))}
            size="lg"
          />
          <div className="">
            <Button
              className="mt-4 w-full lg:mt-2"
              type="submit"
              size="xl"
              rounded="pill"
              variant="outline"
            >
              Resend OTP
            </Button>
          </div>
          <Button className="w-full" type="submit" size="xl" rounded="pill">
            Verify OTP
          </Button>
        </div>
      )}
    </Form>
  );
}
