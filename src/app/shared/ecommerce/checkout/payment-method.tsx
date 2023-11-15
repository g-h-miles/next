'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapse } from '@/components/ui/collapse';
import { usePatternFormat } from '@/hooks/use-pattern-format';
import { AdvancedRadio, RadioGroup } from '@/components/ui/advanced-radio';
import { NumberInput, NumberInputProps } from '@/components/ui/number-input';
import {
  PiCaretDownBold,
  PiCheckCircleFill,
  PiLockKeyLight,
} from 'react-icons/pi';
import { paymentMethodData } from '@/data/checkout-data';

type CardExpiredType = NumberInputProps & {
  isMask?: boolean;
};

function CardExpired({ isMask = false, ...props }: CardExpiredType) {
  const { format } = usePatternFormat({
    ...props,
    format: '##/##',
  });
  const _format = (val: string) => {
    let month = val.substring(0, 2);
    const year = val.substring(2, 4);

    if (month.length === 1 && parseInt(month[0]) > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      if (Number(month) === 0) {
        month = '01';
      } else if (Number(month) > 12) {
        month = '12';
      }
    }
    return isMask ? format(`${month}${year}`) : `${month}/${year}`;
  };
  return <NumberInput {...props} format={_format} />;
}

export default function PaymentMethod({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const [collapseOpen, setCollapseOpen] = useState(true);

  const paymentMethod = useWatch({
    control,
    name: 'paymentMethod',
  });

  return (
    <div>
      <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5">
        Payment Method
      </Title>
      <div className="space-y-4 [&_label]:block">
        <Collapse
          className={cn(
            'rounded-lg border border-gray-200 hover:border-gray-600',
            collapseOpen && 'ring-2 ring-gray-1000 hover:!border-gray-200'
          )}
          defaultOpen={true}
          header={({ open, toggle }) => (
            <button
              type="button"
              onClick={() => {
                setCollapseOpen(open ? open : true);
                toggle();
              }}
              className={cn(
                'flex w-full cursor-pointer items-center justify-between p-4 text-start @xs:p-6'
              )}
            >
              <div className="pe-6">
                <Title as="h4" className="text-base font-medium @2xl:mb-2">
                  Credit Card
                </Title>
                <Text className="hidden leading-[1.85] @2xl:block">
                  Before placing an order with a large payment amount, We
                  recommend contacting the card issuing bank/institution to
                  avoid the bank flagging your payment or withholding the funds.
                </Text>
              </div>
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <PiCaretDownBold
                  className={cn(
                    'h-3.5 w-3.5 transform transition-transform duration-300',
                    open && 'rotate-180'
                  )}
                />
              </div>
            </button>
          )}
        >
          <div className="border-t border-gray-200 p-4 @xs:p-6">
            <div className="space-y-4 ">
              <div className="flex justify-between font-semibold">
                Card
                <span className="flex items-center text-xs font-normal text-gray-500">
                  <PiLockKeyLight className="me-1 text-gray-500" />
                  Secure and Encrypted
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="cardPayment.cardNumber"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <NumberInput
                      formatType="pattern"
                      format="#### #### #### ####"
                      value={value}
                      placeholder="414111 _ ___ ____"
                      onChange={onChange}
                      mask="_"
                      customInput={Input as React.ComponentType<unknown>}
                      {...{
                        variant: 'outline',
                      }}
                    />
                  )}
                />
                <div className="grid grid-cols-2 gap-2">
                  <Controller
                    name="cardPayment.expireMonth"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <CardExpired
                        isMask
                        formatType="custom"
                        placeholder="MM/YY"
                        mask={['M', 'M', 'Y', 'Y']}
                        value={value}
                        onChange={onChange}
                        customInput={Input as React.ComponentType<unknown>}
                        {...{ variant: 'outline' }}
                      />
                    )}
                  />
                  <Controller
                    name="cardPayment.cardCVC"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <NumberInput
                        formatType="pattern"
                        format="###"
                        placeholder="CVC"
                        mask={['C', 'V', 'C']}
                        value={value}
                        onChange={onChange}
                        customInput={Input as React.ComponentType<unknown>}
                        {...{ variant: 'outline' }}
                      />
                    )}
                  />
                </div>
              </div>
              <Checkbox
                {...register('cardPayment.isSaveCard')}
                label="Save for future purchases"
                variant="flat"
                className="flex [&>label>div]:inline-block [&>label>span]:font-normal"
              />
            </div>
          </div>
        </Collapse>

        <Controller
          name="paymentMethod"
          control={control}
          render={({ field: { value, onChange } }) => (
            <RadioGroup
              value={value}
              setValue={(e) => {
                onChange(e);
                setCollapseOpen(false);
              }}
              className="grid gap-4"
            >
              {paymentMethodData.map((item) => (
                <AdvancedRadio
                  key={item.id}
                  name="paymentMethod"
                  value={item.value}
                  checked={item.value === paymentMethod ? true : false}
                  className="relative rounded-lg border border-gray-200 p-4 hover:cursor-pointer hover:border-gray-600 peer-checked:border-gray-900 @xs:p-6 @2xl:py-8"
                  inputClassName="[&:checked~span>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-gray-1000 [&:checked~span]:!border-gray-1000"
                >
                  <span className="flex flex-col gap-4 @md:flex-row @md:items-center @md:gap-6">
                    <span className="inline-flex @md:shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={60}
                        width={80}
                        className="object-contain"
                      />
                    </span>
                    <span className="block">
                      <Title
                        as="h6"
                        className="mb-2.5 block text-base font-medium @md:mb-2"
                      >
                        {item.name}
                      </Title>
                      <Text
                        as="span"
                        className="block font-normal leading-[1.85] @md:pe-10"
                      >
                        {item.description}
                      </Text>
                    </span>
                  </span>
                  <PiCheckCircleFill className="icon absolute right-4 top-4 hidden h-6 w-6 text-gray-1000 @xs:right-6 @xs:top-6 rtl:left-4 rtl:right-auto @xs:rtl:left-6" />
                </AdvancedRadio>
              ))}
            </RadioGroup>
          )}
        />
      </div>
    </div>
  );
}
