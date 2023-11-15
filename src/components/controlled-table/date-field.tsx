'use client';

import { DatePicker, DatePickerProps } from '@/components/ui/datepicker';

export default function DateFiled({
  onClear,
  placeholderText = 'Select date',
  inputProps,
  ...props
}: DatePickerProps<any> & { onClear?: () => void }) {
  return (
    <div>
      <DatePicker
        monthsShown={1}
        placeholderText={placeholderText}
        selectsRange
        inputProps={{
          inputClassName: 'h-9 [&_input]:text-ellipsis',
          ...inputProps,
        }}
        className="w-72"
        {...props}
      />
    </div>
  );
}
