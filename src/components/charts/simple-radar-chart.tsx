'use client';

import cn from '@/utils/class-names';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const tickStyles = {
  base: '[&_.recharts-polar-grid-concentric-polygon]:stroke-gray-200 [&_line.radiusAxis]:stroke-gray-200 [&_.recharts-polar-radius-axis-tick-value]:fill-gray-500',
  two: 'rtl:[&_.recharts-polar-angle-axis-tick:nth-child(2)]:translate-x-6',
  three:
    'rtl:[&_.recharts-polar-angle-axis-tick:nth-child(3)]:translate-x-7 rtl:[&_.recharts-polar-angle-axis-tick:nth-child(3)]:translate-y-2',
  four: '[&_.recharts-polar-angle-axis-tick:nth-child(4)]:translate-y-2',
  five: 'rtl:[&_.recharts-polar-angle-axis-tick:nth-child(5)]:-translate-x-6 rtl:[&_.recharts-polar-angle-axis-tick:nth-child(5)]:translate-y-2',
  six: 'rtl:[&_.recharts-polar-angle-axis-tick:nth-child(6)]:-translate-x-5 rtl:[&_.recharts-polar-angle-axis-tick:nth-child(6)]:-translate-y-1',
};

type SimpleRadarChartTypes = {
  data: { [key: string]: any }[];
  dataKey: string;
  radarKey: string;
  fill?: string;
  stroke?: string;
  className?: string;
};

export default function SimpleRadarChart({
  data,
  dataKey,
  radarKey,
  fill = '#818cf8',
  stroke = '#818cf8',
  className,
}: SimpleRadarChartTypes) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        className={cn(
          tickStyles.base,
          tickStyles.two,
          tickStyles.three,
          tickStyles.four,
          tickStyles.five,
          tickStyles.six,
          className
        )}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        <PolarGrid className="stroke-gray-200" />
        <PolarAngleAxis dataKey={dataKey} />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey={radarKey}
          stroke={stroke}
          fill={fill}
          strokeWidth={1.5}
          className="fill-opacity-60 dark:fill-opacity-20"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
