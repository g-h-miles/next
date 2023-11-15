'use client';

import { useEffect, useRef, useState } from 'react';
import cn from '@/utils/class-names';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import { Collapse } from '@/components/ui/collapse';
import { PiCaretDownBold, PiPlusBold } from 'react-icons/pi';
import { generateSlug } from '@/utils/generate-slug';
import { LayoverAirPortOptionType } from '@/app/shared/explore-flight/listing-filters/filter-utils';

// type FilterOptions = {
//   name: string;
//   count?: number;
//   color?: string;
//   isPrice?: boolean;
//   isTooltip?: boolean;
// };

type FilterWithSearchProps = {
  title: string;
  name: string;
  data: LayoverAirPortOptionType[];
  state: any;
  clearFilter?: (key: string[]) => void;
  applyFilter: (query: string, value: any) => void;
};

const MAX_OPTION_COUNT = 6;

function pickOPtions(
  arr: LayoverAirPortOptionType[],
  count: number
): LayoverAirPortOptionType[] {
  let len = 0;

  const options: LayoverAirPortOptionType[] = [];

  arr.map((item) => {
    if (len < count) {
      options.push(item);
      !item.isGroupTitle && len++;
    }
  });

  return options;
}

function getOptionsLength(arr: LayoverAirPortOptionType[]) {
  let len = 0;
  arr.map((el) => {
    if (!el.isGroupTitle) len++;
  });
  return len;
}

export default function FilterWithGroup({
  title,
  name,
  data,
  state,
  clearFilter,
  applyFilter,
}: FilterWithSearchProps) {
  const [filteredOptions, setFilteredOptions] = useState<
    LayoverAirPortOptionType[]
  >([]);
  const [values, setValues] = useState<string[]>(
    state[name]?.length ? state[name].split(',') : []
  );

  const [event, setEvent] = useState(false);
  const clearBtnRef = useRef<HTMLSpanElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  function handleOnChange(e: React.ChangeEvent<any>) {
    setEvent(() => e.target.checked);
  }

  // apply & clear filter
  useEffect(() => {
    if (values.length) applyFilter(name, values);
    if (values.length == 0 && event !== true) {
      clearFilter && clearFilter([name]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  function handleShowMore() {
    setFilteredOptions(data);
  }

  useEffect(() => {
    setFilteredOptions(pickOPtions(data, MAX_OPTION_COUNT));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleReset() {
    setValues([]);
    clearFilter && clearFilter([name]);
  }

  return (
    <>
      <Collapse
        className="py-5"
        header={({ open, toggle }) => (
          <div className="relative">
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={toggle}
              className="flex w-full cursor-pointer items-center justify-between text-base font-semibold text-gray-900"
            >
              {title}
              <PiCaretDownBold
                strokeWidth={3}
                className={cn(
                  'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                  open && 'rotate-0 rtl:rotate-0'
                )}
              />
            </button>
            {!!values.length && (
              <span
                className="absolute right-9 top-0.5 cursor-pointer text-sm font-medium hover:underline"
                onClick={handleReset}
              >
                Reset
              </span>
            )}
          </div>
        )}
      >
        <div className="flex flex-col pt-5">
          <CheckboxGroup
            values={values}
            setValues={setValues}
            onChange={(e) => handleOnChange(e)}
            className="space-y-3"
          >
            {filteredOptions.map((item: LayoverAirPortOptionType) => {
              if (item.isGroupTitle) {
                return (
                  <p
                    key={`${item.name}-key-${item.id}`}
                    className="text-sm font-semibold text-gray-900"
                  >
                    {item.name}
                  </p>
                );
              } else if (!item.isGroupTitle) {
                return (
                  <Checkbox
                    key={`${item.name}-key-${item.id}`}
                    label={item.name}
                    labelClassName="w-full"
                    name={item.name.toLowerCase()}
                    value={generateSlug(item.name)}
                    {...(item.disabled && { disabled: item.disabled })}
                  />
                );
              }
            })}
          </CheckboxGroup>
          {filteredOptions.length !== data.length && (
            <button
              className="mt-4 flex items-center text-start font-semibold text-blue focus:outline-none"
              onClick={handleShowMore}
            >
              <PiPlusBold className="me-1 h-3 w-3" />
              {getOptionsLength(data) - MAX_OPTION_COUNT} more
            </button>
          )}

          {!data.length ? (
            <div className="text-gray-500">No result found</div>
          ) : null}
        </div>
      </Collapse>
    </>
  );
}
