'use client';

// import NoSSR from '@/components/no-ssr';
import WidgetCard from '@/components/cards/widget-card';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import {
  Bar,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';
import SimpleBar from '@/components/ui/simplebar';
import { DatePicker } from '@/components/ui/datepicker';

type DataType = {
  label: string;
  inTransit: number;
  totalOrder: number;
  outForDelivery: number;
  deliveryFailed: number;
};

const data: DataType[] = [
  {
    label: 'Jan',
    inTransit: 12,
    totalOrder: 34,
    outForDelivery: 24,
    deliveryFailed: 5,
  },
  {
    label: 'Feb',
    totalOrder: 60,
    inTransit: 35,
    outForDelivery: 45,
    deliveryFailed: 20,
  },
  {
    label: 'Mar',
    inTransit: 24,
    totalOrder: 51,
    outForDelivery: 36,
    deliveryFailed: 10,
  },
  {
    label: 'Apr',
    inTransit: 12,
    totalOrder: 37,
    outForDelivery: 25,
    deliveryFailed: 0,
  },
  {
    label: 'May',
    inTransit: 41,
    totalOrder: 78,
    outForDelivery: 56,
    deliveryFailed: 12,
  },
  {
    label: 'Jun',
    inTransit: 28,
    totalOrder: 68,
    outForDelivery: 42,
    deliveryFailed: 10,
  },
  {
    label: 'Jul',
    inTransit: 39,
    totalOrder: 50,
    outForDelivery: 39,
    deliveryFailed: 20,
  },
  {
    label: 'Aug',
    inTransit: 5,
    totalOrder: 53,
    outForDelivery: 37,
    deliveryFailed: 0,
  },
  {
    label: 'Sep',
    inTransit: 18,
    totalOrder: 39,
    outForDelivery: 27,
    deliveryFailed: 6,
  },
  {
    label: 'Oct',
    inTransit: 28,
    totalOrder: 61,
    outForDelivery: 50,
    deliveryFailed: 10,
  },
  {
    label: 'Nov',
    inTransit: 18,
    totalOrder: 38,
    outForDelivery: 29,
    deliveryFailed: 4,
  },
  {
    label: 'Dec',
    inTransit: 35,
    totalOrder: 67,
    outForDelivery: 47,
    deliveryFailed: 8,
  },
];

const ticketStatus = [
  { name: 'Total Order' },
  { name: 'Out for Delivery' },
  { name: 'In Transit' },
  { name: 'Delivery Failed' },
];

const COLORS = ['#3872FA', '#eab308', '#7928ca', '#f1416c'];

export function DeliveryStatus({ className }: { className?: string }) {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <WidgetCard
      title="Delivery Status"
      className={className}
      headerClassName="items-center"
      action={
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="yyyy"
          placeholderText="Select Year"
          showYearPicker
          maxDate={new Date()}
          inputProps={{ variant: 'text', inputClassName: 'p-0 px-1 h-auto' }}
          popperPlacement="bottom-end"
          className="w-[100px]"
        />
      }
    >
      <div className="mt-3 flex flex-wrap items-start gap-3 lg:gap-7">
        {ticketStatus.map((item, index) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-[2px] @2xl:h-4 @2xl:w-4"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <SimpleBar>
        <div className="mt-5 h-[460px] w-full @sm:mt-3 @lg:mt-8">
          <ResponsiveContainer width="100%" height="100%" minWidth="1450px">
            <ComposedChart
              data={data}
              margin={{
                left: -25,
              }}
              barSize={28}
              className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
            >
              <CartesianGrid
                vertical={false}
                strokeOpacity={0.435}
                strokeDasharray="8 10"
              />
              <XAxis dataKey="label" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar dataKey="totalOrder" fill="#3872FA" radius={4} />
              <Bar dataKey="outForDelivery" fill="#eab308" radius={4} />
              <Line
                type="monotone"
                dataKey="inTransit"
                stroke="#7928ca"
                fill="#7928ca"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="bump"
                dataKey="deliveryFailed"
                stroke="#f1416c"
                fill="#f1416c"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
