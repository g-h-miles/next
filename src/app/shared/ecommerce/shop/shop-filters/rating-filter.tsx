'use client';

import { useEffect, useState } from 'react';
import { Title } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { PiStar, PiStarFill } from 'react-icons/pi';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import { ratingData } from './filter-utils';

// get rating calculation
function getRating(rating: number) {
  return (
    <div className="flex items-center">
      {[...new Array(5)].map((_, index) => {
        return index < rating ? (
          <PiStarFill className="w-4 fill-orange text-orange" key={index} />
        ) : (
          <PiStar className="w-4 fill-gray-300 text-gray-500" key={index} />
        );
      })}
    </div>
  );
}

// Color rating component
export default function RatingFilter({
  state,
  applyFilter,
}: {
  state: any;
  applyFilter: (query: string, value: any) => void;
}) {
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    if (state.ratings.length && typeof state.ratings === 'string')
      setValues(state.ratings.split(','));
  }, [state.ratings]);

  useEffect(() => {
    if (values.length) applyFilter('ratings', values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <div className="block">
      <Title as="h6" className="font-semibold">
        Rating
      </Title>
      <div className="flex flex-col space-y-3 pt-5">
        <CheckboxGroup
          values={values}
          setValues={setValues}
          className="space-y-3.5"
        >
          {ratingData?.map((item: any) => (
            <Checkbox
              key={`${item.name}-key-${item.id}`}
              label={
                <div className="flex items-center justify-between">
                  {getRating(item.id)}
                  <span className="text-xs opacity-80">({item.products})</span>
                </div>
              }
              labelClassName="w-full"
              name={`item-${item.id}`}
              value={item.id.toString()}
            />
          ))}
        </CheckboxGroup>
      </div>
    </div>
  );
}
