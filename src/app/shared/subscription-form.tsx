'use client';

import z from 'zod';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// import images and icons
import { PiBellBold } from 'react-icons/pi';

const subscriptionFormSchema = z.object({
  email: z.string({ required_error: 'This email is required' }).email(),
});

// generate form types from zod validation schema
type SubscriptionFormTypes = z.infer<typeof subscriptionFormSchema>;

export default function SubscriptionForm() {
  const onSubmit: SubmitHandler<SubscriptionFormTypes> = (data) => {
    console.log('subscription-form ->', data);
  };

  return (
    <Form validationSchema={subscriptionFormSchema} onSubmit={onSubmit}>
      {({ register, formState: { errors } }) => (
        <div className="mx-auto flex max-w-lg flex-col gap-3 lg:ml-0 lg:max-w-full lg:flex-row xl:gap-5">
          <Input
            size="xl"
            type="email"
            color="primary"
            variant="outline"
            className="grow pb-1 lg:max-w-[384px]"
            placeholder="example@google.com"
            inputClassName="h-12 xl:h-14 [&>input]:text-center lg:[&>input]:text-start"
            {...register('email')}
            error={errors.email?.message}
          />
          <Button
            size="xl"
            type="submit"
            color="primary"
            className="h-12 px-4 xl:h-14 xl:px-6"
          >
            <PiBellBold className="me-1.5 text-lg" /> Notify Me
          </Button>
        </div>
      )}
    </Form>
  );
}
