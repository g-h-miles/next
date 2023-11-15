'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { PiEye } from 'react-icons/pi';
import { SubmitHandler } from 'react-hook-form';
import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';
import {
  NewsLetterFormSchema,
  newsLetterFormSchema,
} from '@/utils/validators/newsletter.schema';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { sendAccountConfirmationEmail } from '@/server/actions/account-confirmation.action';
import { sendOrderConfirmationEmail } from '@/server/actions/order-confirmation.action';
import { messages } from '@/config/messages';

export default function TemplatePreview({
  icon,
  title = 'Newsletter!',
  // name,
  preview,
  className,
  description = 'Feel free to preview it by clicking the button below.',
}: {
  icon: StaticImport;
  // name: string;
  title?: string;
  preview: string;
  className?: string;
  description?: string;
}) {
  return (
    <div
      className={cn(
        className,
        'rounded-2xl border border-gray-100 bg-white @container dark:bg-gray-100'
      )}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center p-6 @2xl:p-12 3xl:px-16 4xl:px-28">
        <div className="w-full max-w-[640px]">
          <div className="relative mx-auto mb-6 h-20 w-20 @2xl:mb-8 @2xl:h-28 @2xl:w-28">
            <Image
              src={icon}
              alt="newsletter"
              fill
              priority
              sizes="(max-width: 768px) 140px"
            />
          </div>
          <div className="mb-8 text-center @2xl:mb-12">
            <h2 className="mb-2 text-xl @2xl:mb-3 @2xl:text-2xl">{title}</h2>
            <p className="mx-auto max-w-[45ch] text-sm leading-6 text-gray-500 @2xl:text-base">
              {description}
            </p>
          </div>
          <Link href={preview} target="_blank" className="block">
            <Button tag="span" size="lg" className="mx-auto w-full">
              Preview
            </Button>
          </Link>
          {/* <EmailForm template="accountConfirmation" /> */}
        </div>
      </div>
    </div>
  );
}

const initialValues = {
  email: '',
};

function EmailForm({ template }: { template: string }) {
  const [reset, setReset] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<NewsLetterFormSchema> = async (data) => {
    console.log(data);

    setIsLoading(true);
    try {
      if (template === 'accountConfirmation') {
        await sendAccountConfirmationEmail(data);
      }
      if (template === 'orderConfirmation') {
        await sendOrderConfirmationEmail(data);
      }
      setReset(initialValues);
      setIsLoading(false);
      toast.success(messages.emailSentSuccessfully);
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
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
          <div className="relative">
            <Input
              size="xl"
              placeholder="Enter your email"
              inputClassName="w-full text-base pr-36"
              {...register('email')}
              error={errors.email?.message}
            />
            <Button
              size="lg"
              type="submit"
              isLoading={isLoading}
              className="absolute right-1 top-1 text-base font-medium"
            >
              Subscribe
            </Button>
          </div>
        )}
      </Form>
      <p className="mt-3 text-center text-sm font-medium text-gray-500 @2xl:mt-4 @2xl:text-base">
        Your email is safe with us, we don’t spam.
      </p>
    </>
  );
}
