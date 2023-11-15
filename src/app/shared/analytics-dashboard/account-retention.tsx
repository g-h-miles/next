'use client';

import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import cn from '@/utils/class-names';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';

const data = [
  {
    day: 'Mon',
    expansions: 2,
    cancellations: 13,
  },
  {
    day: 'Tue',
    expansions: 27,
    cancellations: 39,
  },
  {
    day: 'Thu',
    expansions: 21,
    cancellations: 32,
  },
  {
    day: 'Wed',
    expansions: 45,
    cancellations: 25,
  },
  {
    day: 'Fri',
    expansions: 36,
    cancellations: 25,
  },
  {
    day: 'Sun',
    expansions: 50,
    cancellations: 31,
  },
];

export default function AccountRetention({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard
      title={'Account Retention'}
      description={'Number of customers who have active subscription with you.'}
      rounded="lg"
      descriptionClassName="text-gray-500 mt-1.5"
      className={cn('grid grid-cols-1', className)}
    >
      <div className="h-72 w-full @sm:pt-3 @lg:pt-4 @xl:pt-5">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              left: -30,
            }}
          >
            <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
            <XAxis dataKey="day" tickLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="natural"
              dataKey="expansions"
              stroke="#5451FD"
              fill="#5451FD"
              strokeWidth={2.3}
              fillOpacity={0.05}
            />
            <Area
              type="natural"
              dataKey="cancellations"
              stroke="#00EEFD"
              fill="#00EEFD"
              strokeWidth={2.3}
              fillOpacity={0.05}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div>
          <Title as="h6">1,680</Title>
          <Text className="mb-4 mt-0.5 text-xs">Expansions</Text>
          <Text>Customers who have upgraded their subscription with you.</Text>
        </div>
        <div>
          <Title as="h6">1,520</Title>
          <Text className="mb-4 mt-0.5 text-xs">Cancellations</Text>
          <Text>Customers who have ended their subscription with you.</Text>
        </div>
      </div>
    </WidgetCard>
  );
}
