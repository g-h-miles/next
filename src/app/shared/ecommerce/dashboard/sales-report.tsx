'use client';

import { useState } from 'react';
import WidgetCard from '@/components/cards/widget-card';
import { DatePicker } from '@/components/ui/datepicker';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { useMedia } from '@/hooks/use-media';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import { RoundedBottomBar } from '@/components/charts/rounded-bottombar';
import { RoundedTopBar } from '@/components/charts/rounded-topbar';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import SimpleBar from '@/components/ui/simplebar';

const data = [
  {
    month: 'Jan',
    revenue: 5000,
    expense: 1500,
  },
  {
    month: 'Feb',
    revenue: 4600,
    expense: 3798,
  },
  {
    month: 'Mar',
    revenue: 5900,
    expense: 1300,
  },
  {
    month: 'Apr',
    revenue: 5780,
    expense: 3908,
  },
  {
    month: 'May',
    revenue: 4890,
    expense: 2500,
  },
  {
    month: 'Jun',
    revenue: 8000,
    expense: 3200,
  },
  {
    month: 'Jul',
    revenue: 4890,
    expense: 2500,
  },
  {
    month: 'Aug',
    revenue: 3780,
    expense: 3908,
  },
  {
    month: 'Sep',
    revenue: 7800,
    expense: 2800,
  },
  {
    month: 'Oct',
    revenue: 5780,
    expense: 1908,
  },
  {
    month: 'Nov',
    revenue: 2780,
    expense: 3908,
  },
  {
    month: 'Dec',
    revenue: 7500,
    expense: 3000,
  },
];

export default function SalesReport({ className }: { className?: string }) {
  const isTablet = useMedia('(max-width: 820px)', false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <WidgetCard
      title={'Sales Report'}
      description={
        <>
          <Badge renderAsDot className="me-0.5 bg-[#282ECA]" /> Revenue
          <Badge
            renderAsDot
            className="me-0.5 ms-4 bg-[#B8C3E9] dark:bg-[#7c88b2]"
          />{' '}
          Expense
        </>
      }
      descriptionClassName="text-gray-500 mt-1.5"
      action={
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="yyyy"
          placeholderText="Select Year"
          showYearPicker
          inputProps={{ variant: 'text', inputClassName: 'p-0 px-1 h-auto' }}
          popperPlacement="bottom-end"
          className="w-[100px]"
        />
      }
      className={className}
    >
      <SimpleBar>
        <div className="h-96 w-full pt-9">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTablet && { minWidth: '700px' })}
          >
            <ComposedChart
              data={data}
              barSize={isTablet ? 20 : 24}
              className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <defs>
                <linearGradient id="salesReport" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#F0F1FF"
                    className=" [stop-opacity:0.1]"
                  />
                  <stop offset="95%" stopColor="#8200E9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick prefix={'$'} />}
              />
              <Tooltip
                content={
                  <CustomTooltip className="[&_.chart-tooltip-item:last-child]:hidden" />
                }
              />
              <Bar
                dataKey="revenue"
                fill="#282ECA"
                stackId="a"
                shape={<RoundedBottomBar />}
              />
              <Bar
                dataKey="expense"
                stackId="a"
                fill="#B8C3E9"
                fillOpacity={0.9}
                shape={
                  <RoundedTopBar className="fill-[#B8C3E9] dark:fill-[#7c88b2]" />
                }
              />
              <Area
                type="bump"
                dataKey="revenue"
                stroke="#8200E9"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#salesReport)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
