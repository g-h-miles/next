'use client';

import { useState } from 'react';
import WidgetCard from '@/components/cards/widget-card';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Line,
} from 'recharts';
import { RoundedTopBarFill } from '@/components/charts/rounded-topbar';
import { useMedia } from '@/hooks/use-media';
import SimpleBar from '@/components/ui/simplebar';
import DropdownAction from '@/components/charts/dropdown-action';
import cn from '@/utils/class-names';

const dailyData = [
  {
    label: 'Mon',
    new: 98,
    solved: 80,
    overdue: 18,
  },
  {
    label: 'Tue',
    new: 87,
    solved: 49,
    overdue: 16,
  },
  {
    label: 'Thu',
    new: 50,
    solved: 86,
    overdue: 32,
  },
  {
    label: 'Wed',
    new: 45,
    solved: 68,
    overdue: 12,
  },
  {
    label: 'Fri',
    new: 25,
    solved: 38,
    overdue: 10,
  },
  {
    label: 'Sat',
    new: 80,
    solved: 59,
    overdue: 12,
  },
  {
    label: 'Sun',
    new: 87,
    solved: 48,
    overdue: 16,
  },
];

const monthlyData = [
  {
    label: 'Jan',
    new: 565,
    solved: 454,
    overdue: 320,
  },
  {
    label: 'Feb',
    new: 189,
    solved: 551,
    overdue: 68,
  },
  {
    label: 'Mar',
    new: 430,
    solved: 300,
    overdue: 150,
  },
  {
    label: 'Apr',
    new: 571,
    solved: 583,
    overdue: 230,
  },
  {
    label: 'May',
    new: 452,
    solved: 700,
    overdue: 200,
  },
  {
    label: 'Jun',
    new: 438,
    solved: 268,
    overdue: 160,
  },
  {
    label: 'Jul',
    new: 675,
    solved: 170,
    overdue: 100,
  },
  {
    label: 'Aug',
    new: 735,
    solved: 541,
    overdue: 200,
  },
  {
    label: 'Sep',
    new: 479,
    solved: 741,
    overdue: 250,
  },
  {
    label: 'Oct',
    new: 548,
    solved: 421,
    overdue: 110,
  },
  {
    label: 'Nov',
    new: 261,
    solved: 621,
    overdue: 100,
  },
  {
    label: 'Dec',
    new: 757,
    solved: 661,
    overdue: 80,
  },
];

const ticketStatus = [{ name: 'New' }, { name: 'Solved' }, { name: 'Overdue' }];
const COLORS = ['#7928ca', '#10b981', '#eab308'];

const viewOptions = [
  {
    value: 'Daily',
    name: 'Daily',
  },
  {
    value: 'Monthly',
    name: 'Monthly',
  },
];

export default function TicketActivity({ className }: { className?: string }) {
  const [data, setData] = useState(monthlyData);
  const isTablet = useMedia('(max-width: 800px)', false);

  function handleChange(viewType: string) {
    if (viewType === 'Daily') {
      setData(monthlyData);
    } else {
      setData(dailyData);
    }
  }

  return (
    <WidgetCard
      title="Daily Ticket Activity"
      headerClassName="items-center"
      action={<DropdownAction options={viewOptions} onChange={handleChange} />}
      className={cn('min-h-[28rem]', className)}
    >
      <div className="mt-1.5 flex flex-wrap items-start gap-3 lg:gap-7">
        {ticketStatus.map((item, index) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span
              className="h-4 w-4 rounded-[2px]"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <SimpleBar>
        <div className="h-[28rem] w-full pt-6 @lg:pt-8">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTablet && { minWidth: '1100px' })}
          >
            <ComposedChart
              data={data}
              margin={{
                left: -25,
              }}
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
              <Bar
                dataKey="new"
                fill={COLORS[0]}
                barSize={28}
                shape={<RoundedTopBarFill />}
              />
              <Bar
                type="natural"
                dataKey="solved"
                fill={COLORS[1]}
                barSize={28}
                shape={<RoundedTopBarFill />}
              />
              <Line
                type="natural"
                dataKey="overdue"
                stroke={COLORS[2]}
                dot={false}
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
