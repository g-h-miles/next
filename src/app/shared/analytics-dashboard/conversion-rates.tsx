'use client';

import WidgetCard from '@/components/cards/widget-card';
import ButtonGroupAction from '@/components/charts/button-group-action';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';

const data = [
  {
    country: 'Italy',
    amount: 590,
  },
  {
    country: 'Japan',
    amount: 868,
  },
  {
    country: 'China',
    amount: 1397,
  },
  {
    country: 'Canada',
    amount: 1480,
  },
  {
    country: 'USA',
    amount: 1520,
  },
  {
    country: 'UK',
    amount: 1400,
  },
];

const filterOptions = ['Week', 'Month', 'Year'];

export default function ConversionRates({ className }: { className?: string }) {
  function handleFilterBy(data: string) {
    console.log('Conversion Rates Filter:', data);
  }

  return (
    <WidgetCard
      title={'Conversion Rates'}
      description={'+43.4% last year'}
      rounded="lg"
      action={
        <ButtonGroupAction
          options={filterOptions}
          onChange={(data) => handleFilterBy(data)}
          className="-ms-2 mb-3 @lg:mb-0 @lg:ms-0"
        />
      }
      descriptionClassName="text-gray-500 mt-1.5 mb-3 @md:mb-0"
      headerClassName="flex-col @md:flex-row"
      className={className}
    >
      <div className="h-96 w-full @sm:py-3">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            margin={{ left: -2 }}
            data={data}
            className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
          >
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="country"
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" barSize={16} radius={4} fill="#3872FA" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
