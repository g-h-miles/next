'use client';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { PiCaretDoubleUpDuotone, PiDownloadSimpleBold } from 'react-icons/pi';
import WidgetCard from '@/components/cards/widget-card';
import SimpleBar from '@/components/ui/simplebar';
import { useMedia } from '@/hooks/use-media';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { toCurrency } from '@/utils/to-currency';
import { Title } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

type DataType = {
  name: string;
  Profit: number;
};

const data: DataType[] = [
  {
    name: 'Day 1',
    Profit: 682,
  },
  {
    name: 'Day 2',
    Profit: 690,
  },
  {
    name: 'Day 3',
    Profit: 910,
  },
  {
    name: 'Day 4',
    Profit: 656,
  },
  {
    name: 'Day 5',
    Profit: 804,
  },
  {
    name: 'Day 6',
    Profit: 747,
  },
  {
    name: 'Day 7',
    Profit: 902,
  },
  {
    name: 'Day 8',
    Profit: 820,
  },
  {
    name: 'Day 9',
    Profit: 582,
  },
  {
    name: 'Day 10',
    Profit: 775,
  },
  {
    name: 'Day 11',
    Profit: 615,
  },
  {
    name: 'Day 12',
    Profit: 973,
  },
  {
    name: 'Day 13',
    Profit: 873,
  },
  {
    name: 'Day 14',
    Profit: 696,
  },
  {
    name: 'Day 15',
    Profit: 977,
  },
];

const formatYAxisTick = (value: number): string => {
  if (value >= 1000) {
    return `$${value / 1000}k`; // Convert value to thousands (k)
  }
  return value.toString(); // Keep small values as is
};

export default function ProfitChart({ className }: { className?: string }) {
  const isTablet = useMedia('(max-width: 800px)', false);

  return (
    <WidgetCard title="" className={className}>
      <div className="grid grid-cols-10 gap-y-8">
        <div className="col-span-full flex flex-col @2xl:flex-row @2xl:justify-between @4xl:col-span-full @7xl:col-span-2 @7xl:flex-col">
          <div>
            <p className="text-sm 2xl:text-base">Profit</p>
            <Title as="h3" className="mt-2 text-2xl font-semibold">
              {toCurrency(105000)}
            </Title>
            <p className="mt-2 flex items-center gap-1 font-lexend font-normal text-green 2xl:text-base">
              <PiCaretDoubleUpDuotone className="me-1 h-4 w-4" />
              {toCurrency(1400)}
            </p>
            <p className="mt-2">Average per month</p>
          </div>

          <Button
            variant="outline"
            className="mt-6 gap-2 @2xl:mt-0 @5xl:mt-auto"
          >
            <PiDownloadSimpleBold /> Download Report
          </Button>
        </div>
        <div className="col-span-full @3xl:col-span-full @7xl:col-span-8">
          <SimpleBar>
            <div className="h-[400px] w-full @4xl:h-[260px] @7xl:h-[24rem]">
              <ResponsiveContainer
                width="100%"
                height="100%"
                {...(isTablet && { minWidth: '700px' })}
              >
                <AreaChart
                  data={data}
                  margin={{
                    left: -10,
                    right: 15,
                    bottom: 25,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="colorGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="0 0"
                    strokeOpacity={0.435}
                    vertical={false}
                  />
                  <XAxis
                    axisLine={false}
                    dataKey="name"
                    tickMargin={10}
                    tickLine={false}
                    angle={-45}
                    textAnchor="end"
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={formatYAxisTick}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={false} />
                  <Area
                    strokeWidth={2}
                    type="monotone"
                    dataKey="Profit"
                    stroke="#10b981"
                    fill="url(#colorGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </SimpleBar>
        </div>
      </div>
    </WidgetCard>
  );
}
