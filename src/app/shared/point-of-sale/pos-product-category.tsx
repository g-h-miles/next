'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useFilterControls } from '@/hooks/use-filter-control';
import {
  filterOptions,
  initialState,
} from '@/app/shared/point-of-sale/pos-category-utils';
import { useElementRePosition } from '@/hooks/use-element-reposition';

function getIndexByValue(arr: any[], value: string) {
  return arr.findIndex((item) => item.value === value);
}

export default function POSProductCategory() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { state, applyFilter, reset } = useFilterControls<
    typeof initialState,
    any
  >(initialState);

  useElementRePosition({ ref, activeTab: activeIndex });

  function handleReset(i: number) {
    reset();
    setActiveIndex(i);
  }

  function handleFilter(value: string, i: number) {
    applyFilter('filter', value);
    setActiveIndex(i);
  }

  useEffect(() => {
    if (!state) {
      setActiveIndex(0);
    } else {
      setActiveIndex(getIndexByValue(filterOptions, state['filter']) + 1);
    }
  }, [state]);

  return (
    <div
      ref={ref}
      className="mb-6 flex w-full items-center gap-2.5 overflow-x-auto pb-[1px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <Button
        onClick={() => handleReset(0)}
        variant={state['filter'] ? 'outline' : 'solid'}
        className="flex shrink-0 gap-1.5"
      >
        All Items
      </Button>
      {filterOptions.map((option, idx) => {
        const Icon = option.icon;
        return (
          <Button
            key={option.id + option.value}
            variant={state['filter'] === option.value ? 'solid' : 'outline'}
            className="inline-flex shrink-0 gap-1.5 scroll-smooth focus-visible:border-0 focus-visible:ring-0 active:ring-0 focus-visible:enabled:border-0"
            onClick={() => handleFilter(option.value, idx + 1)}
          >
            <span>
              <Icon className="h-5 w-5" />
            </span>
            {option.name}
          </Button>
        );
      })}
    </div>
  );
}
