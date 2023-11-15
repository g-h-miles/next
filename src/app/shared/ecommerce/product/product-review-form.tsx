'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import Rate from '@/components/ui/rate';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

type ReviewFormValues = {
  rating: any;
  review: string;
};

export default function ProductReviewForm() {
  const [reset, setReset] = useState({});
  const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
    console.log(data);
    setReset({ rating: '', review: '' });
  };
  return (
    <Form<ReviewFormValues>
      resetValues={reset}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: { rating: '', review: '' },
      }}
    >
      {({ register, control, formState: { errors } }) => (
        <>
          <div className="space-y-6">
            <Controller
              name="rating"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Rate size="sm" value={value} onChange={onChange} />
              )}
            />
            <Textarea
              placeholder="Review...."
              {...register('review')}
              error={errors.review?.message}
              textareaClassName="h-24"
              className="col-span-2"
            />
            <Button
              rounded="pill"
              size="lg"
              className="px-8 dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}
