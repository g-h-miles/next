'use client';

import { useEffect, useState } from 'react';
import { Title } from '@/components/ui/text';
import RangeSlider from '@/components/ui/range-slider';

// Price rating component
export default function PriceFilter({
  state,
  applyFilter,
}: {
  state: any;
  applyFilter: (query: string, value: any) => void;
}) {
  const [price, setPrice] = useState({
    min: 500,
    max: 2500,
  });

  useEffect(() => {
    if (state.price.length && typeof state.price === 'string') {
      const priceArr = state.price.split(',');

      setPrice({
        min: parseInt(priceArr[0]),
        max: parseInt(priceArr[1]),
      });
    }
  }, [state.price]);

  function handleRangeChange(value: any) {
    setPrice({
      min: value[0],
      max: value[1],
    });
  }
  function handleMaxChange(max: number) {
    setPrice({
      ...price,
      max: max || price.min,
    });
  }
  function handleMinChange(min: number) {
    setPrice({
      ...price,
      min: min || 0,
    });
  }

  return (
    <div className="block">
      <div className="">
        <Title as="h6" className="font-semibold">
          Price
        </Title>
        <div className="mb-3.5 flex items-center pt-5">
          <div className="flex items-center">
            $
            <input
              type="number"
              value={price.min}
              onChange={(e) => handleMinChange(parseInt(e.target.value))}
              className="w-12 border-none bg-transparent p-0 text-sm outline-none focus:shadow-none focus:ring-0"
              min={0}
              max={price.max}
              readOnly
            />
          </div>
          -
          <div className="flex items-center ps-5">
            $
            <input
              type="number"
              value={price.max}
              onChange={(e) => handleMaxChange(parseInt(e.target.value))}
              className="border-none bg-transparent p-0 text-sm outline-none focus:shadow-none focus:ring-0"
              min={price.min}
              readOnly
            />
          </div>
        </div>
        <RangeSlider
          range
          min={0}
          max={10000}
          value={[price.min, price.max]}
          onChange={(value: any) => {
            handleRangeChange(value);
            applyFilter('price', value);
          }}
        />
      </div>
    </div>
  );
}
