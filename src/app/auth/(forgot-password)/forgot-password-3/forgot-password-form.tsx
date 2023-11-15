'use client';

import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { SubmitHandler } from 'react-hook-form';
import { routes } from '@/config/routes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Text } from '@/components/ui/text';
import { useMedia } from '@/hooks/use-media';
import {
  forgetPasswordSchema,
  ForgetPasswordSchema,
} from '@/utils/validators/forget-password.schema';

const initialValues = {
  email: '',
};

export default function ForgetPasswordForm() {
  const isMedium = useMedia('(max-width: 1200px)', false);
  const [reset, setReset] = useState({});
  const onSubmit: SubmitHandler<ForgetPasswordSchema> = (data) => {
    console.log('forgot password form', data);
    toast.success(
      <Text>
        Reset link sent to this email:{' '}
        <Text as="b" className="font-semibold">
          {data.email}
        </Text>
      </Text>
    );
    setReset(initialValues);
  };

  return (
    <>
      <Form<ForgetPasswordSchema>
        validationSchema={forgetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? 'lg' : 'xl'}
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              {...register('email')}
              error={errors.email?.message}
            />
            <div className="block">
              <Button
                className="mt-1 w-full"
                type="submit"
                size={isMedium ? 'lg' : 'xl'}
              >
                Reset Password
              </Button>
            </div>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        Don’t want to reset?{' '}
        <Link
          href={routes.auth.signIn3}
          className="font-semibold text-gray-700 transition-colors hover:text-gray-1000"
        >
          Sign In
        </Link>
      </Text>
    </>
  );
}
