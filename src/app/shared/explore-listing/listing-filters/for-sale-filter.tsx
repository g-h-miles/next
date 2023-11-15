import { useState } from 'react';
import { Radio } from '@/components/ui/radio';
import { Button } from '@/components/ui/button';
import { useMedia } from '@/hooks/use-media';
import { InitialStateType, forsaleData } from './filter-utils';

export default function ForSaleFilter({
  state,
  applyFilter,
  setOpen,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
  setOpen?: any;
}) {
  const [selected, setSelected] = useState('');
  const isWide = useMedia('(min-width: 1537px)', false);

  return (
    <div className="flex flex-col space-y-4">
      {forsaleData?.map((item: any) => (
        <Radio
          key={`${item.name}-key-${item.id}`}
          labelClassName="text-gray-800 font-normal"
          label={item.name}
          name="for_sale"
          value={item.value}
          defaultChecked={state.for_sale === item.value}
          onChange={() => {
            setSelected(item.value);
            !isWide && applyFilter('for_sale', item.value);
          }}
          inputClassName="dark:checked:!bg-gray-300 dark:checked:!border-gray-300 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-0"
        />
      ))}
      {isWide && (
        <Button
          onClick={() => {
            setOpen(false);
            applyFilter('for_sale', selected);
          }}
          className="mt-5 w-full rounded-md dark:bg-gray-50 dark:text-white"
        >
          Apply
        </Button>
      )}
    </div>
  );
}
