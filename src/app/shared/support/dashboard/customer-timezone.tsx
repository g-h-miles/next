'use client';

import WorldMap from 'react-svg-worldmap';
import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { useMeasure } from '@/hooks/use-measure';
import WidgetCard from '@/components/cards/widget-card';
import { useMedia } from '@/hooks/use-media';

const data = [
  { country: 'US', name: 'United States', value: 40, style: 'bg-[#36a2eb]' },
  { country: 'CA', name: 'Canada', value: 20, style: 'bg-[#5eb5ef]' },
  { country: 'IN', name: 'India', value: 15, style: 'bg-[#86c7f3]' },
  { country: 'CN', name: 'China', value: 5, style: 'bg-[#afdaf7]' },
  { country: 'GB', name: 'United Kingdom', value: 5, style: 'bg-[#d7ecfb]' },
  { country: 'FR', name: 'France', value: 5, style: 'bg-[#d7ecfb]' },
];

export default function CustomerTimezone({
  className,
}: {
  className?: string;
}) {
  const [ref, { width }] = useMeasure();
  const isWide = useMedia('(min-width: 2160px)', false);

  return (
    <WidgetCard title="Customer Timezone" className={cn('relative', className)}>
      <div
        // @ts-ignore
        ref={ref}
        className="flex items-center justify-center [&_figure]:!bg-transparent [&_svg]:dark:invert"
      >
        <WorldMap
          color="#028ca6"
          valueSuffix="%"
          size={isWide ? 'lg' : width}
          data={data}
        />
      </div>

      <div className="offset-height h-24 xs:h-20 lg:h-14 3xl:h-12" />
      <div className="absolute bottom-0 -mx-7 w-full border-t border-dashed border-gray-200 px-4 py-3 xs:p-5">
        <div className="mx-auto flex w-full max-w-md flex-wrap justify-center gap-x-3 gap-y-1.5 text-center">
          {data.map((country) => (
            <div key={country.name} className="flex items-center gap-1">
              <Badge renderAsDot className={cn(country.style, 'dark:invert')} />
              <Text className="text-gray-500 dark:text-gray-600">
                {country.name}
                <Text
                  as="span"
                  className="ms-1 font-medium text-gray-700"
                >{`${country.value}%`}</Text>
              </Text>
            </div>
          ))}
        </div>
      </div>
    </WidgetCard>
  );
}
