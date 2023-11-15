'use client';

import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TrashIcon from '@/components/icons/trash';
import { ActionIcon } from '@/components/ui/action-icon';
import { customFields } from '@/app/shared/ecommerce/product/create-edit/form-utils';
import { PiPlusBold } from 'react-icons/pi';

export default function CustomFields() {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'customFields',
  });

  const addCustomField = useCallback(() => append([...customFields]), [append]);

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id} className="col-span-full flex gap-4 xl:gap-7">
          <Input
            label="Custom Field Name"
            placeholder="custom field name"
            className="flex-grow"
            {...register(`customFields.${index}.label`)}
          />
          <Input
            label="Custom Field Value"
            placeholder="custom field value"
            className="flex-grow"
            {...register(`customFields.${index}.value`)}
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
    </>
  );
}
