'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
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

export default function NewsLetterForm() {
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
              className="absolute right-1 top-1 aspect-square w-12 !p-0  text-base font-medium text-white dark:text-gray-100"
              size="lg"
              rounded="pill"
            >
              <PiPaperPlaneRightFill className="-mr-1 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      <div className="mt-4 flex justify-center">
        <Link
          href={'/'}
          className="text-center text-base font-medium text-gray-700 underline decoration-gray-700 underline-offset-2"
        >
          No thanks
        </Link>
      </div>
    </>
  );
}
