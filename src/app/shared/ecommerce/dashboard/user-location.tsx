'use client';

import { useState } from 'react';
import WorldMap from 'react-svg-worldmap';
import WidgetCard from '@/components/cards/widget-card';
import { Title, Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { DatePicker } from '@/components/ui/datepicker';
import { useElementSize } from '@/hooks/use-element-size';
import cn from '@/utils/class-names';

const data = [
  { country: 'US', name: 'United States', value: 40, style: 'bg-[#028ca6]' },
  { country: 'CA', name: 'Canada', value: 20, style: 'bg-[#8bcad6]' },
  { country: 'IN', name: 'India', value: 15, style: 'bg-[#a1d4de]' },
  { country: 'CN', name: 'China', value: 5, style: 'bg-[#cce8ed]' },
  { country: 'GB', name: 'United Kingdom', value: 5, style: 'bg-[#cce8ed]' },
  { country: 'FR', name: 'France', value: 5, style: 'bg-[#cce8ed]' },
];

export default function UserLocation({ className }: { className?: string }) {
  const [ref, { width }] = useElementSize();
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <WidgetCard
      title={'User Location'}
      action={
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="MMM, yyyy"
          placeholderText="Select Month"
          showMonthYearPicker
          popperPlacement="bottom-end"
          inputProps={{
            variant: 'text',
            inputClassName: 'p-0 px-1 h-auto [&_input]:text-ellipsis',
          }}
          className="w-36"
        />
      }
      className={cn(
        'relative grid grid-cols-1 place-content-between gap-3',
        className
      )}
    >
      <div
        ref={ref}
        className="col-span-full [&_figure]:!bg-transparent [&_svg]:dark:invert"
      >
        <WorldMap color="#028ca6" valueSuffix="%" size={width} data={data} />
      </div>

      <div className="col-span-full -mx-5 border-t border-dashed border-gray-200 px-5 pt-5 lg:-mx-7 lg:px-7">
        <div className="mx-auto flex w-full max-w-md flex-wrap justify-center gap-x-3 gap-y-1.5 text-center">
          {data.map((country) => (
            <div key={country.name} className="flex items-center gap-1">
              <Badge renderAsDot className={cn(country.style, 'dark:invert')} />
              <Text className="text-gray-500 dark:text-gray-600">
                {country.name}
                <Text
                  as="span"
                  className="ms-1 font-lexend font-medium text-gray-700"
                >
                  {`${country.value}%`}
                </Text>
              </Text>
            </div>
          ))}
        </div>
      </div>
    </WidgetCard>
  );
}
