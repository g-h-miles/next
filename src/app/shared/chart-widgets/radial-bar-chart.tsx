'use client';

import WidgetCard from '@/components/cards/widget-card';
import {
  RadialBarChart as RadialBarChartComponent,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import cn from '@/utils/class-names';
import { useMedia } from '@/hooks/use-media';

const data = [
  {
    name: 'Youtube',
    sales: 31.47,
    fill: '#FF0000',
  },
  {
    name: 'Instagram',
    sales: 26.69,
    fill: '#E1306C',
  },
  {
    name: 'Twitter',
    sales: 15.69,
    fill: '#1DA1F2',
  },
  {
    name: 'Facebook',
    sales: 8.22,
    fill: '#4267B2',
  },
];

export default function RadialBarChart({ className }: { className?: string }) {
  const isMobile = useMedia('(max-width: 480px)', false);
  return (
    <WidgetCard
      title={'Radial Bar Chart'}
      className={cn('@container', className)}
    >
      <div className="mt-5 h-96 w-full pb-6 @sm:h-96 @xl:pb-0 @2xl:aspect-[1060/660] @2xl:h-auto lg:mt-7">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="[&_.recharts-default-legend]:flex [&_.recharts-default-legend]:flex-wrap [&_.recharts-default-legend]:justify-center @xl:[&_.recharts-default-legend]:flex-col [&_.recharts-legend-wrapper]:!static [&_.recharts-legend-wrapper]:!-mt-[22px] [&_.recharts-legend-wrapper]:!leading-[22px] @xs:[&_.recharts-legend-wrapper]:!mt-0 @xl:[&_.recharts-legend-wrapper]:!absolute @xl:[&_.recharts-legend-wrapper]:!end-0 @xl:[&_.recharts-legend-wrapper]:!start-auto @xl:[&_.recharts-legend-wrapper]:!top-1/2 @xl:[&_.recharts-legend-wrapper]:!-translate-y-1/2 @xl:[&_.recharts-legend-wrapper]:!translate-x-0 @xl:[&_.recharts-legend-wrapper]:!leading-9"
        >
          <RadialBarChartComponent
            innerRadius="20%"
            outerRadius="110%"
            barSize={isMobile ? 16 : 24}
            data={data}
            className="rtl:[&_.recharts-legend-item>svg]:ml-1"
          >
            <RadialBar
              label={{ fill: '#ffffff', position: 'insideStart' }}
              background
              dataKey="sales"
              className="[&_.recharts-radial-bar-background-sector]:fill-gray-100"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
          </RadialBarChartComponent>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
