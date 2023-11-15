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
          <div className="grid grid-cols-7 gap-3">
            <Input
              placeholder="Enter your email"
              inputClassName="w-full text-base"
              size="xl"
              className="col-span-full @xl:col-span-5"
              {...register('email')}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              color="info"
              className="col-span-full w-full text-base font-medium @xl:col-span-2"
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
