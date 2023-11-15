'use client';

import { AdvancedRadio, RadioGroup } from '@/components/ui/advanced-radio';
import { useEffect, useState } from 'react';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { InitialStateType } from './filter-utils';

export default function ListingTypeFilter({
  state,
  applyFilter,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
}) {
  const [selected, setSelected] = useState('owner-0');
  const isMounted = useIsMounted();

  useEffect(() => {
    if (state.listing_type) setSelected(state.listing_type);
  }, [state.listing_type]);

  useEffect(() => {
    isMounted && applyFilter('listing_type', selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <RadioGroup
      value={selected}
      setValue={setSelected}
      className="grid grid-cols-2 items-center overflow-hidden rounded-md border border-gray-300 [&>label:last-of-type>span]:border-0"
    >
      <AdvancedRadio
        name="listing_type"
        value="agent-0"
        className="border-r border-gray-300 py-2 text-center hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0 dark:hover:bg-gray-200 dark:hover:text-white  dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900"
      >
        By Agent (0)
      </AdvancedRadio>
      <AdvancedRadio
        name="listing_type"
        value="owner-0"
        className="border-r border-gray-300 py-2 text-center hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0 dark:hover:bg-gray-200 dark:hover:text-white dark:peer-checked:border-gray-300 dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900"
      >
        By Owner & Other (0)
      </AdvancedRadio>
    </RadioGroup>
  );
}
