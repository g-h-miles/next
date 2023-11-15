'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiPlusBold, PiMinusBold } from 'react-icons/pi';

export default function QuantityInput({
  name,
  error,
  onChange,
  defaultValue,
}: {
  name?: string;
  error?: string;
  onChange?: (value: number) => void;
  defaultValue?: number;
}) {
  const [value, setValue] = useState(defaultValue ?? 0);

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

  function handleOnChange(inputValue: number) {
    setValue(Number(inputValue));
    onChange && onChange(inputValue);
  }

  useEffect(() => {
    setValue(defaultValue ?? 1);
    onChange && onChange(defaultValue ?? 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Input
      type="number"
      min={0}
      name={name}
      value={value}
      placeholder="1"
      onChange={(e) => handleOnChange(Number(e.target.value))}
      variant="text"
      className="w-32 text-center [&_.is-focus]:ring-0"
      inputClassName="[&_input]:text-center"
      prefix={
        <ActionIcon
          title="Decrement"
          size="sm"
          variant="flat"
          className="scale-90"
          onClick={() => handleDecrement()}
        >
          <PiMinusBold className="h-3.5 w-3.5" />
        </ActionIcon>
      }
      suffix={
        <ActionIcon
          title="Increment"
          size="sm"
          variant="flat"
          className="scale-90"
          onClick={() => handleIncrement()}
        >
          <PiPlusBold className="h-3.5 w-3.5" />
        </ActionIcon>
      }
      suffixClassName="flex items-center"
      error={error}
    />
  );
}
