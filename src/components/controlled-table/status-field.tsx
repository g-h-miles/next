import Select, { SelectBoxProps, SelectOption } from '@/components/ui/select';

export default function StatusField({
  placeholder = 'Select status',
  ...props
}: SelectBoxProps<SelectOption>) {
  return (
    <Select
      placeholder={placeholder}
      selectClassName="h-9 min-w-[150px]"
      dropdownClassName="p-1.5"
      optionClassName="h-9"
      {...props}
    />
  );
}
