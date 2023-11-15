'use client';

import { Title } from '@/components/ui/text';
import { genderData, initialState } from './filter-utils';
import { Radio } from '@/components/ui/radio';

export default function GenderSpecificFilter({
  state,
  applyFilter,
}: {
  state: typeof initialState;
  applyFilter: (query: string, value: any) => void;
}) {
  return (
    <div>
      <Title as="h6" className="font-semibold">
        Items for
      </Title>
      <div className="flex flex-col space-y-4 pt-5">
        {genderData?.map((item: any) => (
          <Radio
            key={`${item.name}-key-${item.id}`}
            label={item.name}
            name="gender"
            value={item.slug}
            defaultChecked={state.gender === item.slug}
            onChange={() => applyFilter('gender', item.slug)}
            className="[&>label>span]:font-medium "
            inputClassName="dark:checked:!bg-gray-300 dark:checked:!border-gray-300 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-0"
          />
        ))}
      </div>
    </div>
  );
}
