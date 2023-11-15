'use client';

import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import cn from '@/utils/class-names';
import QuantityInput from '@/app/shared/explore-flight/listing-filters/quantity-input';
import { Radio } from '@/components/ui/radio';
import { Button } from '@/components/ui/button';

interface selectedProps {
  adults: number;
  child: number;
  infants: number;
  cabin: string;
}

interface SelectBoxProps {
  className?: string;
  label?: string;
  defaultSelected: selectedProps;
  labelClassName?: string;
  onChange: ({}: selectedProps) => void;
}

const cabinData = [
  {
    id: '1',
    name: 'Economy',
    value: 'economy',
  },
  {
    id: '2',
    name: 'First Class',
    value: 'first-class',
  },
  {
    id: '3',
    name: 'Business',
    value: 'business',
  },
];

export default function PersonSelect({
  className,
  defaultSelected,
  onChange,
}: SelectBoxProps) {
  const [adults, setAdults] = useState(defaultSelected.adults);
  const [child, setChild] = useState(defaultSelected.child);
  const [cabin, setCabin] = useState(defaultSelected.cabin);
  const [infants, setInfants] = useState(defaultSelected.infants);

  return (
    <div className={className}>
      <Listbox as="div">
        <div className="relative">
          <Listbox.Button as="div">
            {({ open }) => (
              <div className="relative grid grid-cols-1">
                <div
                  className={cn(
                    'flex flex-col items-start gap-1 rounded-lg border border-gray-300 p-4 pt-3 text-left'
                  )}
                >
                  <span className="text-xs uppercase text-gray-500">
                    TRAVELER
                  </span>
                  <span className="text-base font-semibold text-gray-900">
                    <span className="block">
                      {adults + child + infants}{' '}
                      <span className="ml-2">Traveler</span>
                    </span>
                  </span>
                  <span className="text-xs capitalize text-gray-700">
                    {cabin}
                  </span>
                </div>
              </div>
            )}
          </Listbox.Button>

          <Listbox.Options className="absolute left-0 mt-1 grid w-full grid-cols-1 gap-3 rounded-lg border bg-gray-0 p-6 text-left text-base shadow-lg">
            <div>
              <span className="block border-b border-gray-200 pb-3 text-base font-semibold text-gray-900">
                Travelers
              </span>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="text-left text-sm">
                <h5 className="font-inter text-sm font-medium text-gray-900">
                  Adults
                </h5>
                <p className="font-normal xl:mt-1">Age 18+</p>
              </div>
              <QuantityInput
                // FIXME: This is not working
                // @ts-ignore
                name={adults}
                onChange={setAdults}
                defaultValue={adults}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="text-left text-sm">
                <h5 className="font-inter text-sm font-medium text-gray-900">
                  Child
                </h5>
                <p className="font-normal xl:mt-1">Age 1-7</p>
              </div>
              <QuantityInput
                // FIXME: This is not working
                // @ts-ignore
                name={child}
                onChange={setChild}
                defaultValue={child}
              />
            </div>
            <div className="flex w-full items-center justify-between pb-3">
              <div className="text-left text-sm">
                <h5 className="font-inter text-sm font-medium text-gray-900">
                  Infants
                </h5>
                <p className="font-normal xl:mt-1">Under 2</p>
              </div>
              <QuantityInput
                // FIXME: This is not working
                // @ts-ignore
                name={infants}
                onChange={setInfants}
                defaultValue={infants}
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <span className="block border-b border-gray-300 pb-3 text-base font-semibold text-gray-900">
                Cabin Class
              </span>
              <div className="flex flex-col space-y-4">
                {cabinData?.map((item: any) => (
                  <Radio
                    key={`${item.name}-key-${item.id}`}
                    labelClassName="text-gray-800 text-base font-normal"
                    label={item.name}
                    name="for_sale"
                    value={item.value}
                    defaultChecked={cabin.toLowerCase() === item.value}
                    onChange={() => {
                      setCabin(item.value);
                    }}
                    containerClassName="flex-row-reverse justify-between text-base font-semibold"
                    inputClassName="dark:checked:!bg-gray-300 dark:checked:!border-gray-300 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-0"
                  />
                ))}
              </div>
              {/* <div className="grid grid-cols-3 items-center overflow-hidden rounded-md border border-gray-300 [&>label:last-of-type>span]:border-0">
                {Array.from(
                  ['Economy', 'Business', 'First Class'],
                  (x, index) => (
                    <AdvancedRadio
                      onChange={({ target }) => {
                        setCabin(() => target.value);
                      }}
                      key={`cabin-${index}`}
                      name="cabin"
                      value={x.toLowerCase()}
                      checked={x.toLowerCase() === cabin.toLowerCase()}
                      className="border-r border-gray-300 py-2 text-center text-sm hover:cursor-pointer hover:bg-gray-900 hover:text-gray-0 peer-checked:bg-gray-900 peer-checked:font-medium peer-checked:text-gray-0"
                    >
                      {x}
                    </AdvancedRadio>
                  )
                )}
              </div> */}
            </div>

            <Listbox.Option className="mt-3" value={0}>
              <Button
                variant="solid"
                className="w-full"
                onClick={() =>
                  onChange({
                    adults: adults,
                    child: child,
                    cabin: cabin,
                    infants: infants,
                  })
                }
              >
                Apply
              </Button>
            </Listbox.Option>
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
