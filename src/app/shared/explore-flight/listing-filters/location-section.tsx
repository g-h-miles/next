'use client';

import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { PiAirplaneLight } from 'react-icons/pi';
import { locationData } from '@/app/shared/explore-flight/listing-filters/filter-utils';

type LocationProps = {
  id: string;
  city: string;
  cityCode: string;
  country: string;
  airport: string;
};

export default function LocationSelection({
  title,
  value,
  onChange,
}: {
  title: string;
  value: any;
  onChange?: () => void;
}) {
  const [selected, setSelected] = useState(locationData[0]);
  const [query, setQuery] = useState('');

  console.log('value', value);

  const filteredLocation =
    query === ''
      ? locationData
      : locationData.filter((location) =>
          location.city
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="">
      <Combobox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <div className="flex flex-col">
            <span className="mb-1.5 block text-sm text-gray-900">{title}</span>
            <Combobox.Input
              className="h-10 w-full rounded-md border border-gray-300 bg-transparent text-sm leading-[40px] text-gray-500 transition focus:border-gray-900 focus:outline-none focus:ring-0"
              placeholder={`${title}?`}
              displayValue={(location: LocationProps) =>
                location.city + ' ' + location.cityCode
              }
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="custom-scrollbar absolute right-0 z-10 mt-1 max-h-[60vh] w-full overflow-y-auto rounded-md border border-gray-300 bg-gray-0 p-4 text-base shadow-md focus:outline-none sm:w-[400px] sm:text-sm">
              {filteredLocation.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredLocation.map((location) => (
                  <Combobox.Option
                    key={location.id}
                    className={({ active }) =>
                      `relative flex cursor-pointer select-none items-center justify-between gap-2 rounded-md p-2.5 ${
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      }`
                    }
                    value={location}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center gap-2 text-gray-500">
                          <PiAirplaneLight className="h-5 w-5" />
                          <div className="flex flex-col">
                            <strong className="text-base font-semibold text-gray-900">
                              {location.city}
                            </strong>
                            <span>{location.country}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end text-right text-gray-500">
                          <strong className="text-base font-semibold text-gray-900">
                            {location.cityCode}
                          </strong>
                          <span className="hidden max-w-[170px] truncate sm:block">
                            {location.airport}
                          </span>
                        </div>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
