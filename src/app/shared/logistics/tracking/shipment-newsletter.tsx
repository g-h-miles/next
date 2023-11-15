'use client';

import { useState } from 'react';
import cn from '@/utils/class-names';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { newsLetterFormSchema } from '@/utils/validators/newsletter.schema';

type FormValues = {
  email: string;
};

type NewsletterProps = {
  buttonLabel?: string;
  buttonClassName?: string;
  inputClassName?: string;
  className?: string;
  placeholderText?: string;
};

const initialValues = {
  email: '',
};

export default function ShipmentNewsletterForm({
  buttonLabel = 'Subscribe',
  buttonClassName,
  inputClassName,
  className,
  placeholderText = 'Enter your email',
}: NewsletterProps) {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setReset(initialValues);
  };
  return (
    <>
      <Form<FormValues>
        validationSchema={newsLetterFormSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className={cn('flex items-start gap-4', className)}>
            <Input
              rounded="lg"
              placeholder={placeholderText}
              inputClassName="w-full text-base"
              size="lg"
              className={cn('flex-grow', inputClassName)}
              {...register('email')}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              color="info"
              className={cn(
                'w-full flex-shrink-0 bg-gray-900 dark:text-gray-0',
                buttonClassName
              )}
              size="lg"
            >
              {buttonLabel}
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
