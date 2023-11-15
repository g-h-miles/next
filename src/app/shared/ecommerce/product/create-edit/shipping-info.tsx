'use client';

import { useCallback } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import { Switch } from '@/components/ui/switch';
import { locationShipping } from '@/app/shared/ecommerce/product/create-edit/form-utils';
import { Button } from '@/components/ui/button';
import { ActionIcon } from '@/components/ui/action-icon';
import TrashIcon from '@/components/icons/trash';
import { PiPlusBold } from 'react-icons/pi';

export default function ShippingInfo({ className }: { className?: string }) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'locationShipping',
  });

  const addCustomField = useCallback(
    () => append([...locationShipping]),
    [append]
  );

  return (
    <FormGroup
      title="Shipping"
      description="Add your shipping info here"
      className={cn(className)}
    >
      <Controller
        name="freeShipping"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Switch
            label="Free Shipping"
            className="col-span-full"
            value={value}
            checked={value}
            onChange={onChange}
            switchClassName="dark:border-gray-400 "
            handlerClassName="dark:bg-gray-400"
          />
        )}
      />

      <Input
        label="Shipping Price"
        placeholder="150.00"
        {...register('shippingPrice')}
        error={errors.shippingPrice?.message as string}
        prefix={'$'}
        type="number"
      />
      <Controller
        name="locationBasedShipping"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Switch
            label="Location Based Shipping"
            className="col-span-full"
            value={value}
            checked={value}
            onChange={onChange}
            switchClassName="dark:border-gray-400 "
            handlerClassName="dark:bg-gray-400"
          />
        )}
      />

      {fields.map((item, index) => (
        <div key={item.id} className="col-span-full flex gap-4 xl:gap-7">
          <Input
            label="Location Name"
            placeholder="location name"
            className="flex-grow"
            {...register(`locationShipping.${index}.name`)}
          />
          <Input
            label="Shipping Charge"
            placeholder="150.00"
            className="flex-grow"
            {...register(`locationShipping.${index}.value`)}
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
        onClick={addCustomField}
        variant="outline"
        className="col-span-full ml-auto w-auto"
      >
        <PiPlusBold className="me-2 h-4 w-4" strokeWidth={2} /> Add Item
      </Button>
    </FormGroup>
  );
}
