import { Controller, useFormContext } from 'react-hook-form';
import { RadioGroup } from '@/components/ui/radio-group';
import { Radio } from '@/components/ui/radio';
import { Input } from '@/components/ui/input';

const options = [
  {
    value: 'yes',
    label: 'Track inventory for this product',
  },
  {
    value: 'no',
    label: 'Do not track inventory for this product',
  },
  {
    value: 'by-options',
    label: 'Track inventory by options',
  },
];

export default function InventoryTracing() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="inventoryTracking"
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            setValue={onChange}
            className="col-span-full grid gap-4"
          >
            {options.map((item) => (
              <Radio
                key={item.value}
                value={item.value}
                label={item.label}
                inputClassName="dark:checked:!bg-gray-200 dark:checked:!border-gray-200 dark:focus:ring-gray-200 dark:focus:ring-offset-gray-0"
              />
            ))}
          </RadioGroup>
        )}
      />

      <Input
        type="number"
        label="Current Stock Level"
        placeholder="150"
        {...register('currentStock')}
        error={errors.currentStock?.message as string}
      />
      <Input
        type="number"
        label="Low Stock Level"
        placeholder="20"
        {...register('lowStock')}
        error={errors.lowStock?.message as string}
      />
    </>
  );
}
