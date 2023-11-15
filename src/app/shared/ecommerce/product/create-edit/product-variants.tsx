'use client';

import dynamic from 'next/dynamic';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import { useCallback } from 'react';
import {
  variantOption,
  productVariants,
} from '@/app/shared/ecommerce/product/create-edit/form-utils';
import { Button } from '@/components/ui/button';
import { ActionIcon } from '@/components/ui/action-icon';
import TrashIcon from '@/components/icons/trash';
import SelectLoader from '@/components/loader/select-loader';
import { PiPlusBold } from 'react-icons/pi';
const Select = dynamic(() => import('@/components/ui/select'), {
  ssr: false,
  loading: () => <SelectLoader />,
});

export default function ProductVariants({ className }: { className?: string }) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'productVariants',
  });

  const addVariant = useCallback(() => append([...productVariants]), [append]);

  console.log('fields', fields);

  return (
    <FormGroup
      title="Variant Options"
      description="Add your product variants here"
      className={cn(className)}
    >
      {fields.map((item, index) => (
        <div key={item.id} className="col-span-full flex gap-4 xl:gap-7">
          <Controller
            name={`productVariants.${index}.name`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                options={variantOption}
                value={value}
                onChange={onChange}
                label="Variant Name"
                className="w-full @2xl:w-auto @2xl:flex-grow"
                getOptionValue={(option) => option.name}
              />
            )}
          />
          <Input
            type="number"
            label="Variant Value"
            placeholder="150.00"
            className="flex-grow"
            prefix={'$'}
            {...register(`productVariants.${index}.value`)}
          />
          {fields.length > 1 && (
            <ActionIcon
              onClick={() => remove(index)}
              variant="flat"
              className="mt-7 shrink-0"
            >
              <TrashIcon className="h-4 w-4" />
            </ActionIcon>
          )}
        </div>
      ))}
      <Button
        onClick={addVariant}
        variant="outline"
        className="col-span-full ml-auto w-auto"
      >
        <PiPlusBold className="me-2 h-4 w-4" /> Add Variant
      </Button>
    </FormGroup>
  );
}
