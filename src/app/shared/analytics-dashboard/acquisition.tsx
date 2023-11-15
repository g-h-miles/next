'use client';

import WidgetCard from '@/components/cards/widget-card';
import { PiChartBarLight } from 'react-icons/pi';
import { Title, Text } from '@/components/ui/text';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';

const data = [
  {
    day: 'Mon',
    bounceRate: 40,
    pageSession: 40,
  },
  {
    day: 'Tue',
    bounceRate: 90,
    pageSession: 30,
  },
  {
    day: 'Thu',
    bounceRate: 64,
    pageSession: 43,
  },
  {
    day: 'Wed',
    bounceRate: 99,
    pageSession: 50,
  },
  {
    day: 'Fri',
    bounceRate: 50,
    pageSession: 70,
  },
  {
    day: 'Sun',
    bounceRate: 70,
    pageSession: 80,
  },
];

export default function Acquisition({ className }: { className?: string }) {
  return (
    <WidgetCard
      title={'Acquisition'}
      description={
        'Tells you where your visitors originated from, such as search engines, social networks or website referrals'
      }
      rounded="lg"
      descriptionClassName="text-gray-500 mt-0.5 leading-relaxed"
      className={className}
    >
      <div className="mb-6 mt-5 flex items-start">
        <div className="mr-9 flex items-start">
          <div className="me-3 rounded bg-primary-lighter p-2 text-primary dark:bg-primary-dark dark:text-primary-lighter/90">
            <PiChartBarLight className="h-6 w-6" />
          </div>
          <div>
            <Title as="h6" className="font-semibold">
              13.89%
            </Title>
            <Text className="text-gray-500">Bounce Rate</Text>
          </div>
        </div>
        <div className="flex items-start">
          <div className="me-3 rounded bg-primary-lighter p-2 text-primary dark:bg-primary-dark dark:text-primary-lighter/90">
            <PiChartBarLight className="h-6 w-6" />
          </div>
          <div>
            <Title as="h6" className="font-semibold">
              19,065
            </Title>
            <Text className="text-gray-500">Page Session</Text>
          </div>
        </div>
      </div>

      <div className="h-80 w-full @sm:pt-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              left: -30,
            }}
          >
            <XAxis dataKey="day" tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="natural"
              dataKey="bounceRate"
              stackId="acquisitionStackID"
              stroke="#015DE1"
              fill="#015DE1"
              strokeWidth={1.5}
              fillOpacity={0.7}
            />
            <Area
              type="natural"
              dataKey="pageSession"
              stackId="acquisitionStackID"
              stroke="#69B2F8"
              fill="#69B2F8"
              strokeWidth={1.5}
              fillOpacity={0.7}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
