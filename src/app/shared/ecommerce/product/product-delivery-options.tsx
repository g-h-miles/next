'use client';

import { Title, Text } from '@/components/ui/text';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Collapse } from '@/components/ui/collapse';
import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
import cn from '@/utils/class-names';

type FormValues = {
  pinCode: string;
};

function CheckDelivery() {
  const [reset, setReset] = useState({});
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setReset({ pinCode: '' });
  };

  return (
    <Form<FormValues>
      resetValues={reset}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: { pinCode: '' },
      }}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="relative max-w-sm">
            <Input
              type="text"
              placeholder="Enter pin code"
              inputClassName="text-sm"
              {...register('pinCode')}
              error={errors.pinCode?.message}
            />
            <Button
              className="absolute end-0 top-0 text-sm font-normal"
              type="submit"
              variant="text"
            >
              Check
            </Button>
          </div>
          <p className="pt-1.5 text-xs leading-relaxed text-gray-500">
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </p>
        </>
      )}
    </Form>
  );
}

export default function ProductDeliveryOptions() {
  return (
    <Collapse
      className="border-t last-of-type:border-t-0"
      defaultOpen={true}
      header={({ open, toggle }) => (
        <div
          role="button"
          onClick={toggle}
          className="flex w-full cursor-pointer items-center justify-between py-6 font-lexend text-lg font-semibold text-gray-900"
        >
          Delivery Options
          <div className="flex shrink-0 items-center justify-center">
            <PiCaretDownBold
              className={cn(
                'h-[18px] w-[18px] transform transition-transform duration-300',
                open && 'rotate-180'
              )}
            />
          </div>
        </div>
      )}
    >
      <div className="-mt-2 pb-7">
        <div className="mb-5">
          <CheckDelivery />
        </div>
        <Text className="mb-3 last:mb-0">100% Original Products</Text>
        <Text className="mb-3 last:mb-0">
          Pay on delivery might be available
        </Text>
        <Text className="mb-3 last:mb-0">
          Easy 14 days returns and exchanges
        </Text>
        <Text className="mb-3 last:mb-0">
          Try & Buy might be available for some products
        </Text>
      </div>
    </Collapse>
  );
}
