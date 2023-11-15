'use client';

import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import cn from '@/utils/class-names';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import { Collapse } from '@/components/ui/collapse';
import { PiCaretDownBold, PiPlusBold } from 'react-icons/pi';
import { generateSlug } from '@/utils/generate-slug';
import { Tooltip } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { BsExclamationCircle } from 'react-icons/bs';

type FilterOptions = {
  name: string;
  count?: number;
  color?: string;
  isPrice?: boolean;
  isTooltip?: boolean;
};

type FilterWithSearchProps = {
  title: string;
  name: string;
  data: FilterOptions[];
  state: any;
  isPrice?: boolean;
  clearFilter?: (key: string[]) => void;
  applyFilter: (query: string, value: any) => void;
};

export default function FilterWithAccordion({
  title,
  name,
  data,
  isPrice = false,
  state,
  clearFilter,
  applyFilter,
}: FilterWithSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [values, setValues] = useState<string[]>(
    state[name]?.length ? state[name].split(',') : []
  );

  const [event, setEvent] = useState(false);
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

  const filteredData = data.filter((element) => {
    if (searchTerm === '') {
      return element;
    } else {
      return element.name.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <>
      <Collapse
        className="py-5"
        header={({ open, toggle }) => (
          <button
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
        )}
      >
        <div className="flex flex-col pt-5">
          <CheckboxGroup
            values={values}
            setValues={setValues}
            onChange={(e) => handleOnChange(e)}
            className="space-y-3.5"
          >
            {filteredData
              ?.slice(0, 5)
              .map((item: any) => (
                <Checkbox
                  key={`${item.name}-key-${item.id}`}
                  label={
                    <FilterOption
                      name={item.name}
                      count={item.count}
                      isPrice={isPrice}
                      {...(item?.isTooltip && { isTooltip: item.isTooltip })}
                      {...(item?.color && { color: item.color })}
                    />
                  }
                  labelClassName="w-full"
                  name={item.name.toLowerCase()}
                  value={generateSlug(item.name)}
                />
              ))}
          </CheckboxGroup>

          {filteredData!.length > 5 ? (
            <CollapsibleFilterOptions data={filteredData}>
              <CheckboxGroup
                values={values}
                setValues={setValues}
                className="space-y-3.5 pt-3.5"
              >
                {filteredData
                  ?.slice(5, filteredData.length)
                  .map((item: any) => (
                    <Checkbox
                      key={`${item.name}-key-${item.id}`}
                      label={
                        <FilterOption
                          name={item.name}
                          count={item.count}
                          isPrice={isPrice}
                          {...(item?.isTooltip && {
                            isTooltip: item.isTooltip,
                          })}
                          {...(item?.color && { color: item.color })}
                        />
                      }
                      labelClassName="w-full"
                      name={item.name.toLowerCase()}
                      value={generateSlug(item.name)}
                    />
                  ))}
              </CheckboxGroup>
            </CollapsibleFilterOptions>
          ) : null}

          {!filteredData.length ? (
            <div className="text-gray-500">No result found</div>
          ) : null}
        </div>
      </Collapse>
    </>
  );
}

function FilterOption({
  name,
  count,
  color,
  isPrice,
  isTooltip,
}: FilterOptions) {
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex shrink-0 items-center">
        {color ? (
          <span
            className="me-1.5 block h-4 w-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        ) : null}

        {name}
        {isTooltip && (
          <Tooltip content={() => 'top'} placement="right">
            <Button variant="text" className="ms-1.5 h-4 p-0">
              <BsExclamationCircle className="h-4 w-4" />
            </Button>
          </Tooltip>
        )}
      </div>

      {count ? (
        <span className="text-xs opacity-80">
          {isPrice ? `$${count}` : `(${count})`}
        </span>
      ) : null}
    </div>
  );
}

function CollapsibleFilterOptions({
  data,
  children,
}: React.PropsWithChildren<{ data: FilterOptions[] }>) {
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Panel className="space-y-3.5">
              {children}
            </Disclosure.Panel>

            {!open && (
              <Disclosure.Button className="mt-3.5 w-full px-6 text-start font-normal text-blue focus:outline-none">
                <span className="flex items-center">
                  <PiPlusBold className="me-1 h-3 w-3" />
                  {data.length - 5} more
                </span>
              </Disclosure.Button>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
}
