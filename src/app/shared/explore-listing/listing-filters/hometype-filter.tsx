'use client';

import { useEffect, useState } from 'react';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useMedia } from '@/hooks/use-media';
import { InitialStateType, homeTypes } from './filter-utils';

export default function HometypeFilter({
  state,
  applyFilter,
  setOpen,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
  setOpen?: any;
}) {
  const isWide = useMedia('(min-width: 1537px)', false);
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    if (typeof state.home_type === 'string')
      setValues(state.home_type.split(','));
  }, [state.home_type]);

  useEffect(() => {
    if (!isWide && values.length) applyFilter('home_type', values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, isWide]);

  return (
    <>
      <CheckboxGroup
        values={values}
        setValues={setValues}
        className="flex flex-col space-y-4"
      >
        {homeTypes?.map((item: any) => {
          return (
            <Checkbox
              key={`${item.name}-key-${item.id}`}
              label={
                <div className="flex items-center justify-between text-gray-800">
                  {item.name}
                </div>
              }
              labelClassName="w-full"
              name={'home_type'}
              value={item.value}
            />
          );
        })}
      </CheckboxGroup>
      {isWide && (
        <Button
          onClick={() => {
            setOpen(false);
            applyFilter('home_type', values);
          }}
          className="mt-5 w-full rounded-md dark:bg-gray-50 dark:text-white"
        >
          Apply
        </Button>
      )}
    </>
  );
}
