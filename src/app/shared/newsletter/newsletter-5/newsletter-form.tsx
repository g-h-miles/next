'use client';

import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';
import {
  NewsLetterFormSchema,
  newsLetterFormSchema,
} from '@/utils/validators/newsletter.schema';

const initialValues = {
  email: '',
};

export default function NewsLetterForm({ className }: { className?: string }) {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<NewsLetterFormSchema> = (data) => {
    console.log(data);
    setReset(initialValues);
  };
  return (
    <>
      <Form<NewsLetterFormSchema>
        validationSchema={newsLetterFormSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="relative mx-auto max-w-lg">
            <Input
              placeholder="Enter your email"
              inputClassName="w-full text-base pr-36"
              size="xl"
              rounded="pill"
              {...register('email')}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              className="absolute right-1 top-1 text-base font-medium text-white dark:text-gray-100"
              size="lg"
              rounded="pill"
            >
              Subscribe
            </Button>
          </div>
        )}
      </Form>
      <p className="mt-4 text-center text-sm font-medium text-gray-500 @2xl:text-base">
        Your email is safe with us, we don’t spam.
      </p>
    </>
  );
}
