import { Controller, useFormContext } from 'react-hook-form';
import { RadioGroup } from '@/components/ui/radio-group';
import { AdvancedRadio } from '@/components/ui/advanced-radio';
import { PiCheckCircleFill } from 'react-icons/pi';

const availability = [
  {
    value: 'online',
    name: 'Only available online.',
  },
  {
    value: 'coming-soon',
    name: 'Coming soon',
  },
  {
    value: 'offline',
    name: 'Only available offline.',
  },
];

export default function ProductAvailability() {
  const { control } = useFormContext();

  return (
    <Controller
      name="productAvailability"
      control={control}
      render={({ field: { value, onChange } }) => (
        <RadioGroup
          value={value}
          setValue={onChange}
          className="col-span-full grid gap-4 @2xl:grid-cols-3 @4xl:gap-6"
        >
          {availability.map((item) => (
            <AdvancedRadio
              key={item.value}
              value={item.value}
              className="flex justify-between gap-6 rounded-xl border border-gray-200 p-6 text-gray-600 hover:cursor-pointer hover:border-gray-700 @4xl:gap-20"
              inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-gray-700 [&:checked:enabled~span]:border-gray-700 [&:checked~span>.icon]:block"
            >
              <span>{item.name}</span>
              <PiCheckCircleFill className="icon hidden h-5 min-w-[1.25rem] text-gray-900" />
            </AdvancedRadio>
          ))}
        </RadioGroup>
      )}
    />
  );
}
