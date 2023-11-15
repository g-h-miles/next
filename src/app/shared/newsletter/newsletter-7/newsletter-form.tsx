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
          <div className="mx-auto max-w-lg">
            <Input
              placeholder="Enter your email"
              inputClassName="w-full text-base pr-36"
              size="xl"
              {...register('email')}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              className="mt-3 w-full text-base font-medium text-white dark:text-gray-100"
              size="xl"
            >
              Subscribe
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
