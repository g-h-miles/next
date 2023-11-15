'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { AdvancedRadio, RadioGroup } from '@/components/ui/advanced-radio';
import cn from '@/utils/class-names';
import { FieldError } from '@/components/ui/field-error';

export default function GetSize({ sizes }: { sizes?: number[] }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="productSize"
        render={({ field: { value, onChange } }) => (
          <RadioGroup
            value={value}
            setValue={onChange}
            className="flex flex-wrap items-center gap-4"
          >
            {sizes?.map((size) => (
              <AdvancedRadio
                key={size}
                value={size}
                className={cn(
                  'flex h-8 shrink-0 items-center justify-center rounded-md border border-gray-300 px-3 py-1.5 font-medium transition-all duration-300 hover:cursor-pointer hover:border-gray-900',
                  String(size) === String(value) &&
                    'border-gray-900 text-gray-900 ring-1 ring-gray-900'
                )}
              >
                {size}
              </AdvancedRadio>
            ))}
          </RadioGroup>
        )}
      />
      {errors?.productSize && (
        <FieldError
          className="mt-1"
          error={errors?.productSize?.message as string}
        />
      )}
    </>
  );
}
