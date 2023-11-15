'use client';

import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { ActionIcon } from '@/components/ui/action-icon';
import WidgetCard from '@/components/cards/widget-card';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import { chartData, widgetData } from '@/data/card-widgets-data';

export default function AreaChartList({ className }: { className?: string }) {
  return (
    <>
      {widgetData.map((item) => (
        <WidgetCard
          key={item.name}
          title={item.name}
          description={'67% acquired this week'}
          rounded="lg"
          action={
            <ActionIcon variant="outline" rounded="full">
              <PiSlidersHorizontalDuotone className="h-auto w-5" />
            </ActionIcon>
          }
          descriptionClassName="text-gray-500 mt-1.5"
          className={cn(className)}
        >
          <div className="mt-5 grid w-full grid-cols-1 justify-around gap-6 @sm:py-2 @7xl:gap-8">
            <div className="h-72 w-full @sm:pt-3">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{
                    left: -30,
                  }}
                >
                  <YAxis tickLine={false} axisLine={false} />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="natural"
                    dataKey="bounceRate"
                    stroke={item.color}
                    fill={item.color}
                    strokeWidth={2}
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {item.stat.map((stat) => (
                <div key={stat.title} className="flex items-center">
                  <div
                    className={cn(
                      'me-3.5 flex h-10 w-10 items-center justify-center rounded-md bg-opacity-10 p-[9px]',
                      stat.bgColor,
                      stat.textColor
                    )}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <Text className="mb-1 text-gray-600">{stat.title}</Text>
                    <Title as="h6" className="font-semibold">
                      {stat.metric}
                    </Title>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </WidgetCard>
      ))}
    </>
  );
}
