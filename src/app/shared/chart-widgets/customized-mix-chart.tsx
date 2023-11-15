'use client';

import WidgetCard from '@/components/cards/widget-card';
import {
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { useMedia } from '@/hooks/use-media';
import {
  RoundedTopBar,
  RoundedTopBarFill,
} from '@/components/charts/rounded-topbar';
import { CustomYAxisTick } from '@/components/charts/custom-yaxis-tick';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import ButtonGroupAction from '@/components/charts/button-group-action';
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';

const data = [
  {
    month: 'Jan',
    newUser: 5000,
    user: 1600,
    sessions: 4000,
  },
  {
    month: 'Feb',
    newUser: 8500,
    user: 2000,
    sessions: 5798,
  },
  {
    month: 'Mar',
    newUser: 7000,
    user: 3000,
    sessions: 8300,
  },
  {
    month: 'Apr',
    newUser: 5780,
    user: 3908,
    sessions: 6798,
  },
  {
    month: 'May',
    newUser: 4890,
    user: 2500,
    sessions: 5000,
  },
  {
    month: 'Jun',
    newUser: 8000,
    user: 3200,
    sessions: 7800,
  },
  {
    month: 'Jul',
    newUser: 4890,
    user: 2500,
    sessions: 8500,
  },
  {
    month: 'Aug',
    newUser: 3780,
    user: 3908,
    sessions: 9908,
  },
  {
    month: 'Sep',
    newUser: 7800,
    user: 2800,
    sessions: 8500,
  },
  {
    month: 'Oct',
    newUser: 5780,
    user: 1908,
    sessions: 7208,
  },
  {
    month: 'Nov',
    newUser: 4780,
    user: 1908,
    sessions: 4908,
  },
  {
    month: 'Dec',
    newUser: 7500,
    user: 3000,
    sessions: 9000,
  },
];

const filterOptions = ['Week', 'Month', 'Year'];

export default function CustomizedMixChart({
  className,
}: {
  className?: string;
}) {
  const isMediumScreen = useMedia('(max-width: 1200px)', false);
  const isTablet = useMedia('(max-width: 800px)', false);
  function handleFilterBy(data: string) {
    console.log('Audience Metrics Filter:', data);
  }

  return (
    <WidgetCard
      title={'Customized Mix Chart'}
      description={
        <>
          <Badge
            renderAsDot
            className="me-0.5 bg-[#eab308] dark:bg-[#7c88b2]"
          />{' '}
          Users
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#5a5fd7]" /> New Users
          <Badge renderAsDot className="me-0.5 ms-4 bg-[#10b981]" /> Sessions
        </>
      }
      descriptionClassName="text-gray-500 mt-1.5 mb-3 @lg:mb-0"
      action={
        <ButtonGroupAction
          options={filterOptions}
          onChange={(data) => handleFilterBy(data)}
          className="-ms-2 mb-3 @lg:mb-0 @lg:ms-0"
        />
      }
      headerClassName="flex-col @lg:flex-row"
      rounded="lg"
      className={className}
    >
      <SimpleBar>
        <div className={cn('h-[420px] w-full pt-9 @7xl:h-[480px]')}>
          <ResponsiveContainer
            width="100%"
            {...(isTablet && { minWidth: '700px' })}
            height="100%"
          >
            <ComposedChart
              data={data}
              barSize={isMediumScreen ? 20 : 28}
              className="[&_.recharts-cartesian-axis-tick-value]:fill-gray-500  [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
            >
              <defs>
                <linearGradient id="analyticsArea" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#F0F1FF"
                    className=" [stop-opacity:0.2]"
                  />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="step"
                dataKey="sessions"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#analyticsArea)"
              />
              <Bar
                dataKey="newUser"
                fill="#5a5fd7"
                {...(isTablet
                  ? { stackId: 'userMetrics' }
                  : { shape: <RoundedTopBarFill /> })}
              />
              <Bar
                dataKey="user"
                fill="#eab308"
                {...(isTablet && { stackId: 'userMetrics' })}
                shape={<RoundedTopBar />}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
