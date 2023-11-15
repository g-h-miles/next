'use client';

import WidgetCard from '@/components/cards/widget-card';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function StackedAreaChart({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard title={'Stacked Area Chart'} className={className}>
      <div className="mt-5 aspect-[1060/660] w-full lg:mt-7">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              left: -20,
            }}
            className="[&_.recharts-cartesian-grid-vertical]:opacity-0"
          >
            <defs>
              <linearGradient
                id="stackedAreaChart1"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#3872FA"
                  className="[stop-opacity:0.4] dark:[stop-opacity:0.3]"
                />
                <stop offset="95%" stopColor={'#3872FA'} stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="stackedAreaChart2"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#10b981"
                  className="[stop-opacity:0.4] dark:[stop-opacity:0.3]"
                />
                <stop offset="95%" stopColor={'#10b981'} stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="stackedAreaChart3"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#eab308"
                  className="[stop-opacity:0.4] dark:[stop-opacity:0.3]"
                />
                <stop offset="95%" stopColor={'#eab308'} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              strokeWidth={2}
              stroke="#3872FA"
              // fill="#3872FA"
              fill="url(#stackedAreaChart1)"
              // fillOpacity={0.5}
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              strokeWidth={2}
              stroke="#10b981"
              // fill="#10b981"
              fill="url(#stackedAreaChart2)"
              // fillOpacity={0.5}
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#eab308"
              strokeWidth={2}
              // fill="#eab308"
              fill="url(#stackedAreaChart3)"
              // fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
