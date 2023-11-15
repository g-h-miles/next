'use client';

import { useState } from 'react';
import cn from '@/utils/class-names';
import { ProductColor } from '@/types';

export default function ColorSwatch({ colors }: { colors?: ProductColor[] }) {
  const [activeColor, setActiveColor] = useState(colors?.[0]);

  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="-m-1 flex flex-wrap items-center">
        {colors?.map((color) => (
          <span
            className={cn(
              "relative m-1 h-5 w-5 cursor-pointer rounded-full border-white before:absolute before:start-1/2 before:top-1/2 before:h-[22px] before:w-[22px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:content-[''] ltr:before:-translate-x-1/2 rtl:before:translate-x-1/2 dark:border-gray-200",
              activeColor === color &&
                'border-4 before:border before:border-gray-900'
            )}
            style={{ backgroundColor: color.code }}
            key={color.code}
            onClick={() => setActiveColor(color)}
          />
        ))}
      </div>

      <div className="text-sm text-gray-500">
        {colors?.length}{' '}
        {colors?.length && colors?.length > 1 ? 'Colors' : 'Color'}
      </div>
    </div>
  );
}
