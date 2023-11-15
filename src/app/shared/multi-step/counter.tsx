'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiPlusBold, PiMinusBold } from 'react-icons/pi';

export default function CounterInput({
  label,
  error,
  min,
  onChange,
  defaultValue,
}: {
  label: string;
  error?: string;
  min?: number;
  onChange?: (value: number) => void;
  defaultValue?: number;
}) {
  const [value, setValue] = useState(defaultValue ?? 1);

  function handleIncrement() {
    let newValue = value + 1;
    setValue(newValue);
    onChange && onChange(newValue);
  }

  function handleDecrement() {
    let newValue = value > 1 ? value - 1 : 1;
    setValue(newValue);
    onChange && onChange(newValue);
  }

  useEffect(() => {
    setValue(defaultValue ?? 1);
    onChange && onChange(defaultValue ?? 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between rounded-lg border border-gray-200 px-5 py-4 transition-all duration-200 hover:border-gray-1000 lg:px-9 lg:py-9 ">
        <span className="font-medium text-gray-900 dark:text-white md:text-lg">
          {label}
        </span>
        <Input
          size="lg"
          type="number"
          min={min}
          value={value}
          placeholder="1"
          variant="text"
          readOnly
          inputClassName="[&_input]:text-center"
          className="w-28 md:w-36 [&_label_div]:!p-0"
          suffix={
            <ActionIcon
              onClick={handleIncrement}
              title="Increment"
              size="sm"
              variant="outline"
              className="scale-90"
            >
              <PiPlusBold className="h-3.5 w-3.5" />
            </ActionIcon>
          }
          suffixClassName="flex items-center"
          prefix={
            <ActionIcon
              onClick={handleDecrement}
              title="Decrement"
              size="sm"
              variant="outline"
              className="scale-90"
            >
              <PiMinusBold className="h-3.5 w-3.5" />
            </ActionIcon>
          }
        />
      </div>
      {!!error && <p className="mt-1 text-xs text-red">{error}</p>}
    </div>
  );
}
