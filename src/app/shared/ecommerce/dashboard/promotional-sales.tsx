'use client';

import { useState } from 'react';
import { DatePicker } from '@/components/ui/datepicker';
import WidgetCard from '@/components/cards/widget-card';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import cn from '@/utils/class-names';
import { useMedia } from '@/hooks/use-media';

const data = [
  {
    name: 'Youtube',
    sales: 31.47,
    fill: '#FF0000',
  },
  {
    name: 'Instagram',
    sales: 26.69,
    fill: '#E1306C',
  },
  {
    name: 'Twitter',
    sales: 15.69,
    fill: '#1DA1F2',
  },
  {
    name: 'Facebook',
    sales: 8.22,
    fill: '#4267B2',
  },
];

export default function PromotionalSales({
  className,
}: {
  className?: string;
}) {
  const isMobile = useMedia('(max-width: 480px)', false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <WidgetCard
      title={'Promotional Sales'}
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
      className={cn('@container', className)}
    >
      <div className="h-96 w-full pb-4 pt-4 @sm:h-96 @xl:pb-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="[&_.recharts-default-legend]:flex [&_.recharts-default-legend]:flex-wrap [&_.recharts-default-legend]:justify-center @xl:[&_.recharts-default-legend]:flex-col [&_.recharts-legend-wrapper]:!static [&_.recharts-legend-wrapper]:!-mt-[22px] [&_.recharts-legend-wrapper]:!leading-[22px] @xs:[&_.recharts-legend-wrapper]:!mt-0 @xl:[&_.recharts-legend-wrapper]:!absolute @xl:[&_.recharts-legend-wrapper]:!end-0 @xl:[&_.recharts-legend-wrapper]:!start-auto @xl:[&_.recharts-legend-wrapper]:!top-1/2 @xl:[&_.recharts-legend-wrapper]:!-translate-y-1/2 @xl:[&_.recharts-legend-wrapper]:!translate-x-0 @xl:[&_.recharts-legend-wrapper]:!leading-9"
        >
          <RadialBarChart
            innerRadius="20%"
            outerRadius="110%"
            barSize={isMobile ? 16 : 24}
            data={data}
            className="rtl:[&_.recharts-legend-item>svg]:ml-1"
          >
            <RadialBar
              label={{ fill: '#ffffff', position: 'insideStart' }}
              background
              dataKey="sales"
              className="[&_.recharts-radial-bar-background-sector]:fill-gray-100"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
