'use client';

import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import WidgetCard from '@/components/cards/widget-card';
import { CustomTooltip } from '@/components/charts/custom-tooltip';

const data = [
  {
    month: 'Mon',
    responseTime: 10,
    lateDeliveries: 45,
  },
  {
    month: 'Tue',
    responseTime: 40,
    lateDeliveries: 40,
  },
  {
    month: 'Wed',
    responseTime: 48,
    lateDeliveries: 30,
  },
  {
    month: 'Thu',
    responseTime: 33,
    lateDeliveries: 30,
  },
  {
    month: 'Fri',
    responseTime: 25,
    lateDeliveries: 25,
  },
  {
    month: 'Sat',
    responseTime: 25,
    lateDeliveries: 25,
  },
  {
    month: 'Sun',
    responseTime: 50,
    lateDeliveries: 15,
  },
];

export default function AvgDeliveryTime({ className }: { className?: string }) {
  return (
    <WidgetCard
      rounded="lg"
      className={className}
      title="Avg Delivery Time"
      description={
        <>
          <Badge renderAsDot className="me-0.5 bg-[#10b981]" /> On Time Delivery
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#FA436B]" /> Late
          Delivery
        </>
      }
      descriptionClassName="mt-1.5"
    >
      <div className="mt-6 h-80 w-full @sm:mt-3 @lg:mt-8 @4xl:h-[22rem]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              left: -5,
              right: 5,
              bottom: 10,
            }}
            className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
          >
            <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              className=" "
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              className=" "
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="responseTime"
              className="fill-[#10b981] dark:[fill-opacity:0.9]"
              name="Average Time"
              barSize={24}
              radius={4}
            />
            <Line
              type="step"
              dataKey="lateDeliveries"
              stroke="#FA436B"
              className="dark:opacity-60"
              strokeWidth={2.3}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
