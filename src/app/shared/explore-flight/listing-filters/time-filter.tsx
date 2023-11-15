'use client';

import { useEffect, useState } from 'react';
import RangeSlider from '@/components/ui/range-slider';

// Times rating component
export default function TimeFilter({
  state,
  applyFilter,
}: {
  state: any;
  applyFilter: (query: string, value: any) => void;
}) {
  const [time, setTime] = useState({
    min: 1,
    max: 12,
  });

  useEffect(() => {
    if (state?.time?.length && typeof state?.time === 'string') {
      const timeArr = state?.time.split(',');

      setTime({
        min: parseInt(timeArr[0]),
        max: parseInt(timeArr[1]),
      });
    }
  }, [state?.time]);

  function handleRangeChange(value: any) {
    setTime({
      min: value[0],
      max: value[1],
    });
  }
  function handleMaxChange(max: number) {
    setTime({
      ...time,
      max: max || time.min,
    });
  }
  function handleMinChange(min: number) {
    setTime({
      ...time,
      min: min || 0,
    });
  }

  return (
    <div className="block">
      <div className="">
        <div className="mb-3.5 flex items-center">
          <div className="flex items-center gap-1">
            Wed
            <input
              type="number"
              value={time.min}
              onChange={(e) => handleMinChange(parseInt(e.target.value))}
              className="w-4 border-none bg-transparent p-0 text-sm outline-none focus:shadow-none focus:ring-0"
              min={0}
              max={time.max}
              readOnly
            />
          </div>
          -
          <div className="flex items-center gap-1 ps-1">
            Thu
            <input
              type="number"
              value={time.max}
              onChange={(e) => handleMaxChange(parseInt(e.target.value))}
              className="border-none bg-transparent p-0 text-sm outline-none focus:shadow-none focus:ring-0"
              min={time.min}
              readOnly
            />
          </div>
        </div>
        <RangeSlider
          range
          min={0}
          max={24}
          value={[time.min, time.max]}
          onChange={(value: any) => {
            handleRangeChange(value);
            applyFilter('times', value);
          }}
        />
      </div>
    </div>
  );
}
