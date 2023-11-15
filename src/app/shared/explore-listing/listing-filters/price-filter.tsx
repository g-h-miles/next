import { useEffect, useState } from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { AdvancedRadio } from '@/components/ui/advanced-radio';
import { PiMinus } from 'react-icons/pi';
import SelectBox from '@/components/ui/select';
import { useMedia } from '@/hooks/use-media';
import { InitialStateType, noMaximumData, noMinimumData } from './filter-utils';
import { useIsMounted } from '@/hooks/use-is-mounted';

export default function PriceFilter({
  state,
  applyFilter,
  setOpen,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
  setOpen?: any;
}) {
  const [pricing, setPricing] = useState('last-price');
  const [price, setPrice] = useState<number[]>([0, 100000]);
  const isWide = useMedia('(min-width: 1537px)', false);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (typeof state.price === 'string') {
      setPrice(state.price?.split(',').map((n: string) => +n));
    }
    if (state.pricing && typeof state.pricing === 'string') {
      setPricing(state.pricing);
    }
  }, [state.price, state.pricing]);

  useEffect(() => {
    isMounted && applyFilter('pricing', pricing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pricing]);

  return (
    <>
      <RadioGroup
        value={pricing}
        setValue={setPricing}
        className="grid grid-cols-2 items-center overflow-hidden rounded-md border border-gray-300 text-center [&>label:last-of-type>span]:border-0"
      >
        <AdvancedRadio
          name="pricing"
          value="last-price"
          className="border-e border-gray-300 py-2 text-sm transition-colors hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0 dark:border-gray-300 dark:hover:bg-gray-200 dark:hover:text-white dark:peer-checked:bg-gray-50 dark:peer-checked:text-white"
        >
          List Price
        </AdvancedRadio>
        <AdvancedRadio
          name="pricing"
          value="monthly-payment"
          className="py-2 text-sm transition-colors hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0 dark:border-gray-100 dark:hover:bg-gray-200 dark:hover:text-white dark:peer-checked:bg-gray-50 dark:peer-checked:text-white"
        >
          Monthly Payment
        </AdvancedRadio>
      </RadioGroup>
      <div className="mt-5 grid grid-cols-[1fr_12px_1fr] items-center gap-3">
        <SelectBox
          selectClassName=""
          label="Minimum"
          labelClassName="text-start"
          placeholder="No min"
          options={noMinimumData}
          value={price[0]}
          onChange={(value: number) => {
            setPrice((prev) => [value, prev[1]]);
            !isWide && applyFilter('price', [value, price[1]]);
          }}
          getOptionValue={(option) => option.value}
          displayValue={(selected) =>
            noMinimumData?.find((nmin) => nmin.value === selected)?.name ?? ''
          }
        />
        <PiMinus className="relative top-3 w-3 flex-shrink-0" />
        <SelectBox
          selectClassName=""
          label="Maximum"
          labelClassName="text-start"
          placeholder="No max"
          options={noMaximumData}
          value={price[1]}
          onChange={(value: number) => {
            setPrice((prev) => [prev[0], value]);
            !isWide && applyFilter('price', [price[0], value]);
          }}
          getOptionValue={(option) => option.value}
          displayValue={(selected) =>
            noMaximumData?.find((nmax) => nmax.value === selected)?.name ?? ''
          }
        />
      </div>
      {isWide && (
        <Button
          onClick={() => {
            setOpen(false);
            applyFilter('price', price);
          }}
          className="mt-5 w-full rounded-md dark:bg-gray-50 dark:text-white"
        >
          Apply
        </Button>
      )}
    </>
  );
}
