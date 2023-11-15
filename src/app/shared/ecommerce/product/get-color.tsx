'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { FieldError } from '@/components/ui/field-error';
import { ProductColor } from '@/types';
import cn from '@/utils/class-names';

export function GetColor({ colors }: { colors: ProductColor[] }) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="productColor"
        render={({ field: { value } }) => (
          <div className="flex items-center gap-3">
            <div className="-m-1 flex flex-wrap items-center">
              {colors.map((color) => (
                <span
                  className={cn(
                    "relative m-1 h-6 w-6 cursor-pointer rounded-full border-white before:absolute before:start-1/2 before:top-1/2 before:h-[26px] before:w-[26px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:content-[''] ltr:before:-translate-x-1/2 rtl:before:translate-x-1/2 dark:border-gray-200",
                    value?.code === color.code &&
                      'border-4 before:border before:border-gray-900'
                  )}
                  style={{ backgroundColor: color.code }}
                  key={color.name}
                  onClick={() =>
                    setValue('productColor', {
                      name: color.name,
                      code: color.code,
                    })
                  }
                />
              ))}
            </div>
            {value && (
              <span className="font-medium text-gray-500">{value?.name}</span>
            )}
          </div>
        )}
      />
      {errors?.productColor && (
        <FieldError
          className="mt-1"
          error={errors?.productColor?.message as string}
        />
      )}
    </>
  );
}
