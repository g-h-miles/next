import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Radio, RadioGroup } from '@/components/ui/radio';
import cn from '@/utils/class-names';
import { Checkbox } from '@/components/ui/checkbox';

interface DifferentBillingAddressProps {
  className?: string;
}

export default function DifferentBillingAddress({
  className,
}: DifferentBillingAddressProps) {
  const { control } = useFormContext();

  const sameShippingAddress = useWatch({
    control,
    name: 'sameShippingAddress',
  });

  return (
    <Controller
      name="sameShippingAddress"
      control={control}
      render={({ field: { value, onChange } }) => (
        <Checkbox
          value={value}
          defaultChecked={value}
          onChange={onChange}
          label="Shipping Address is the same as Billing Address"
        />
        // <RadioGroup
        //   value={value}
        //   setValue={onChange}
        //   className={cn('col-span-2 flex flex-col space-y-5 pt-1', className)}
        // >
        //   <Radio
        //     label="Shipping Address is the same as Billing Address"
        //     value="yes"
        //     inputClassName="dark:checked:!bg-gray-200 dark:checked:!border-gray-200 dark:focus:ring-gray-200 dark:focus:ring-offset-gray-0"
        //   />
        //   <Radio
        //     label="Different Shipping Address"
        //     value="no"
        //     inputClassName="dark:checked:!bg-gray-200 dark:checked:!border-gray-200 dark:focus:ring-gray-200 dark:focus:ring-offset-gray-0"
        //   />
        // </RadioGroup>
      )}
    />
  );
}
