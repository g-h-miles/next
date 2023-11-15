'use client ';
import { z } from 'zod';
import { Controller, useFormContext } from 'react-hook-form';
import cn from '@/utils/class-names';
import { Input } from '@/components/ui/input';
import { Radio, RadioGroup } from '@/components/ui/radio';

interface BasicInfoProps {
  className?: string;
}

const priceTypeEnum = ['fixed', 'negotiable'] as const;

export const sizeAndPricingSchema = z.object({
  propertySize: z
    .number()
    .min(0, { message: 'This field is required' })
    .or(z.string().min(1, { message: 'This field is required' })),
  pricePerSft: z
    .number()
    .min(0, { message: 'This field is required' })
    .or(z.string().min(1, { message: 'This field is required' })),
  totalPrice: z
    .number()
    .min(0, { message: 'This field is required' })
    .or(z.string().min(1, { message: 'This field is required' })),
  pricingType: z.enum(priceTypeEnum, {
    errorMap: () => ({
      message: 'Pricing type is required',
    }),
  }),
});

export const sizeAndPricingValues = {
  propertySize: 0,
  pricePerSft: 0,
  totalPrice: 0,
  pricingType: priceTypeEnum[0],
};

export default function SizeAndPricing({ className }: BasicInfoProps) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={cn('grid gap-x-5 gap-y-5 md:gap-y-7', className)}>
      <Input
        type="number"
        labelClassName=" font-medium text-gray-900 dark:text-white"
        label="Property Size"
        placeholder="property size in sft..."
        {...register('propertySize')}
        error={errors.propertySize?.message as string}
      />
      <Input
        type="number"
        labelClassName=" font-medium text-gray-900 dark:text-white"
        label="Price per sft"
        placeholder="price per sft..."
        {...register('pricePerSft')}
        error={errors.pricePerSft?.message as string}
      />
      <Input
        type="number"
        labelClassName="font-medium text-gray-900 dark:text-white"
        label="Total Price"
        placeholder="total price..."
        {...register('totalPrice')}
        error={errors.totalPrice?.message as string}
      />
      <div className="col-span-full">
        <p className="mb-3  font-medium text-gray-900 dark:text-white">
          Pricing Type
        </p>

        <Controller
          control={control}
          name="pricingType"
          render={({ field: { value, onChange } }) => (
            <RadioGroup
              value={value}
              setValue={onChange}
              className="flex gap-4"
            >
              <Radio label="Fixed" value="fixed" />
              <Radio label="Negotiable" value="negotiable" />
            </RadioGroup>
          )}
        />
        {!!errors.pricingType?.message && (
          <p role="alert" className="mt-1.5 text-xs text-red">
            {errors.pricingType?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
