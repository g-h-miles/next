'use client';

import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import WidgetCard from '@/components/cards/widget-card';
import ButtonGroupAction from '@/components/charts/button-group-action';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import cn from '@/utils/class-names';
import { PiInfoFill } from 'react-icons/pi';

const data = [
  {
    month: 'Jan',
    totalSales: 95,
  },
  {
    month: 'Mar',
    totalSales: 70,
  },
  {
    month: 'May',
    totalSales: 113,
  },
  {
    month: 'Jul',
    totalSales: 159,
  },
  {
    month: 'Sep',
    totalSales: 105,
  },
  {
    month: 'Nov',
    totalSales: 140,
  },
];

const filterOptions = ['5 D', '2 W', '1 M', '6 M', '1 Y'];

export default function ProfitWidget({ className }: { className?: string }) {
  function handleFilterBy(data: string) {
    console.log('Profit Filter:', data);
  }

  return (
    <WidgetCard
      title={'Total Profit'}
      description={'$8,950.00'}
      titleClassName="text-gray-500 font-normal font-inter !text-sm"
      descriptionClassName="text-lg font-semibold sm:text-xl 3xl:text-2xl text-gray-900 font-lexend mt-1"
      action={
        <Button variant="outline" size="sm" className="text-sm">
          Details
        </Button>
      }
      headerClassName="mb-6"
      className={cn('flex flex-col', className)}
    >
      <div className="grid flex-grow grid-cols-1 gap-3">
        <ButtonGroupAction
          options={filterOptions}
          defaultActive={filterOptions[0]}
          onChange={(data) => handleFilterBy(data)}
          btnClassName="@sm:px-5"
          className="justify-between self-start rounded-lg border border-gray-200 p-1.5"
        />
        <div className="mt-auto h-64 w-full pb-5 @sm:h-72 @sm:pt-3 @7xl:h-[240px] lg:pb-7">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 6,
                bottom: 30,
              }}
            >
              <defs>
                <linearGradient id="totalSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.125} />
                  <stop offset="95%" stopColor="#ffdadf" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="8 10"
                strokeOpacity={0.5}
                vertical={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="bump"
                dataKey="totalSales"
                stroke="#10b981"
                strokeWidth={2.3}
                fillOpacity={1}
                fill="url(#totalSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <Text className="text-gray-500 @sm:mt-2.5 ">
            <PiInfoFill className="inline-flex h-auto w-4 text-gray-500/80 dark:text-gray-600" />{' '}
            Total profit without tax included.
          </Text>
        </div>
      </div>
    </WidgetCard>
  );
}
