'use client';

import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import cn from '@/utils/class-names';
import { Title } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ActionIcon } from '@/components/ui/action-icon';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import {
  PiCreditCard,
  PiInfo,
  PiMagnifyingGlassBold,
  PiPlusBold,
  PiXBold,
} from 'react-icons/pi';
import { generateSlug } from '@/utils/generate-slug';
import { Tooltip } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { BsExclamationCircle } from 'react-icons/bs';

type FilterOptions = {
  name: string;
  count?: string | number;
  color?: string;
  isTooltip?: boolean;
};

type FareAssistantProps = {
  title: string;
  name: string;
  data: FilterOptions[];
  state: any;
  isSelectableTabs?: boolean;
  isCheckBoxFilter?: boolean;
  clearFilter?: (key: string[]) => void;
  applyFilter: (query: string, value: any) => void;
};

export default function FareAssistant({
  title,
  name,
  data,
  state,
  clearFilter,
  applyFilter,
}: FareAssistantProps) {
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

  const selectedAllValues = filteredData.map((element) => {
    return generateSlug(element.name);
  });

  return (
    <>
      <div className="block">
        <Title
          as="h6"
          className="flex items-center gap-1 font-inter font-semibold"
        >
          {title}
          <Tooltip
            content={() => (
              <p className="max-w-[25ch]">
                Customize your results with your preferred payment method
              </p>
            )}
            placement="top"
          >
            <Button variant="text" className="h-4 p-0">
              <PiInfo className="h-4 w-4" />
            </Button>
          </Tooltip>
        </Title>
        <div className="mt-2 flex items-center gap-3">
          <span>
            <PiCreditCard className="h-5 w-auto" />
          </span>
          Payment method
        </div>

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
      </div>
    </>
  );
}

type FilterOptionSearchProps = {
  title: string;
  isSearchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

function FilterOptionSearch({
  isSearchOpen,
  searchTerm,
  title,
  setSearchTerm,
  setSearchOpen,
}: FilterOptionSearchProps) {
  return (
    <div
      className={cn(
        'absolute end-0 z-10 flex w-full',
        isSearchOpen ? '-top-1' : '-top-0.5'
      )}
    >
      {isSearchOpen && (
        <Input
          type="search"
          size="sm"
          rounded="pill"
          value={searchTerm}
          onClear={() => setSearchTerm('')}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder={`Search for ${title.toLowerCase()}...`}
          inputClassName="bg-gray-50 ps-3 pe-9"
          className="w-full"
        />
      )}
      <ActionIcon
        size="sm"
        variant={isSearchOpen ? 'text' : 'flat'}
        rounded="full"
        className={cn(
          'absolute z-10 transition-none',
          isSearchOpen ? 'end-1.5 top-0.5' : 'end-0'
        )}
        onClick={() => {
          setSearchOpen(!isSearchOpen);
          setSearchTerm('');
        }}
      >
        {isSearchOpen ? (
          <PiXBold className="h-auto w-4" />
        ) : (
          <PiMagnifyingGlassBold className="h-auto" />
        )}
      </ActionIcon>
    </div>
  );
}

function FilterOption({ name, count, color, isTooltip }: FilterOptions) {
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

      {String(count) ? (
        <span className="text-xs opacity-80">{count}</span>
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
