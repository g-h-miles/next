'use client';

import { useState } from 'react';
import WidgetCard from '@/components/cards/widget-card';
import { DatePicker } from '@/components/ui/datepicker';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { useMedia } from '@/hooks/use-media';
import SimpleBar from '@/components/ui/simplebar';

const data = [
  {
    month: 'Jan',
    creationTime: 4,
    responseTime: 5,
  },
  {
    month: 'Feb',
    creationTime: 2,
    responseTime: 3,
  },
  {
    month: 'Mar',
    creationTime: 3,
    responseTime: 2,
  },
  {
    month: 'Apr',
    creationTime: 4,
    responseTime: 3,
  },
  {
    month: 'May',
    creationTime: 4,
    responseTime: 3,
  },
  {
    month: 'Jun',
    creationTime: 6,
    responseTime: 5,
  },
  {
    month: 'Jul',
    creationTime: 3,
    responseTime: 2,
  },
  {
    month: 'Aug',
    creationTime: 4,
    responseTime: 3,
  },
  {
    month: 'Sep',
    creationTime: 5,
    responseTime: 4,
  },
  {
    month: 'Oct',
    creationTime: 5,
    responseTime: 4,
  },
  {
    month: 'Nov',
    creationTime: 6,
    responseTime: 5,
  },
  {
    month: 'Dec',
    creationTime: 7,
    responseTime: 6,
  },
];

export default function ResponseRate({ className }: { className?: string }) {
  const isTablet = useMedia('(max-width: 820px)', false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <WidgetCard
      title="Response Rate"
      className={className}
      description={
        <>
          <span className="flex items-center gap-1">
            <span className="inline-flex h-3 w-3 rounded-[2px] bg-[#3872FA]" />
            Creation Time
          </span>
          <span className="flex items-center gap-1">
            <span className="ms-1 inline-flex h-3 w-3 rounded-[2px] bg-[#10b981]" />
            Response Time
          </span>
        </>
      }
      descriptionClassName="text-gray-500 mt-1.5 flex flex-col md:flex-row items-center gap-2"
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
      <SimpleBar>
        <div className="h-96 w-full pt-9">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTablet && { minWidth: '700px' })}
          >
            <AreaChart
              data={data}
              margin={{
                left: -5,
                right: 5,
                bottom: 10,
              }}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <defs>
                <linearGradient id="newCustomer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffdadf" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="oldCustomer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dbeafe" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#3872FA" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tickMargin={20}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={20}
                unit="hrs"
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="natural"
                dataKey="responseTime"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#newCustomer)"
              />
              <Area
                type="natural"
                dataKey="creationTime"
                stroke="#3872FA"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#oldCustomer)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
