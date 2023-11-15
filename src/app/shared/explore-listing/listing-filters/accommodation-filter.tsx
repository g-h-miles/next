import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { AdvancedRadio } from '@/components/ui/advanced-radio';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useMedia } from '@/hooks/use-media';
import { useEffect, useState } from 'react';
import { InitialStateType } from './filter-utils';

export default function AccommodationFilter({
  state,
  applyFilter,
  setOpen,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
  setOpen?: any;
}) {
  const [bedBaths, setBedBaths] = useState<string[]>(['1+', 'any']);
  const isWide = useMedia('(min-width: 1537px)', false);

  useEffect(() => {
    if (typeof state.bed_and_baths === 'string')
      setBedBaths(state.bed_and_baths.split(','));
  }, [state.bed_and_baths]);

  return (
    <>
      <div>
        <Text
          className={cn(
            'mb-3 text-start text-sm font-medium text-gray-700',
            !isWide && 'mb-5 2xl:text-base'
          )}
        >
          Bedrooms
        </Text>
        <div className="grid grid-cols-6 items-center overflow-hidden rounded-md border border-gray-300 [&>label:last-of-type>span]:border-0">
          {Array.from(['Any', '1+', '2+', '3+', '4+', '5+'], (x, index) => (
            <AdvancedRadio
              onChange={({ target }) => {
                setBedBaths((prev) => [target.value, bedBaths[1]]);
                !isWide &&
                  applyFilter('bed_and_baths', [target.value, bedBaths[1]]);
              }}
              key={`bedrooms-${index}`}
              name="bedrooms"
              value={x.toLowerCase()}
              checked={x.toLowerCase() === bedBaths[0]}
              className="border-r border-gray-300 py-2 text-center text-sm hover:cursor-pointer hover:bg-gray-900 hover:text-white peer-checked:bg-gray-900 peer-checked:font-medium peer-checked:text-gray-0 dark:hover:bg-gray-50  dark:peer-checked:bg-gray-50 dark:peer-checked:text-white"
            >
              {x}
            </AdvancedRadio>
          ))}
        </div>
        <Checkbox
          label="Use exact match"
          className="mt-3"
          labelClassName="text-gray-800"
          size="sm"
        />
      </div>
      <div className="mt-3">
        <Title
          as="h4"
          className="mb-2 py-3 text-start text-sm font-semibold capitalize text-gray-600"
        >
          Number of Bathrooms
        </Title>
        <Text className="mb-3 text-start text-sm font-medium text-gray-700">
          Bathrooms
        </Text>

        <div className="grid grid-cols-6 items-center overflow-hidden rounded-md border border-gray-300 [&>label:last-of-type>span]:border-0">
          {Array.from(['Any', '1+', '2+', '3+', '4+', '5+'], (x, index) => (
            <AdvancedRadio
              onChange={({ target }) => {
                setBedBaths((prev) => [bedBaths[0], target.value]);
                !isWide &&
                  applyFilter('bed_and_baths', [bedBaths[0], target.value]);
              }}
              key={`bathrooms-${index}`}
              name="bathrooms"
              value={x.toLowerCase()}
              checked={x.toLowerCase() === bedBaths[1]}
              className="border-r border-gray-300 py-2 text-center text-sm hover:cursor-pointer hover:bg-gray-900 hover:text-white peer-checked:bg-gray-900 peer-checked:font-medium peer-checked:text-gray-0 dark:hover:bg-gray-50  dark:peer-checked:bg-gray-50 dark:peer-checked:text-white"
            >
              {x}
            </AdvancedRadio>
          ))}
        </div>
      </div>
      {isWide && (
        <Button
          onClick={() => {
            setOpen(false);
            applyFilter('bed_and_baths', bedBaths);
          }}
          className="mt-5 w-full rounded-md dark:bg-gray-50 dark:text-white"
        >
          Apply
        </Button>
      )}
    </>
  );
}
