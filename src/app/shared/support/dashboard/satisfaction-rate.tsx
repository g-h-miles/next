'use client';

import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import WidgetCard from '@/components/cards/widget-card';
import { useElementSize } from '@/hooks/use-element-size';
import { Title, Text } from '@/components/ui/text';
import { useMedia } from '@/hooks/use-media';

type DataType = {
  name: string;
  color: string;
  percentage: number;
};

const RADIAN = Math.PI / 180;
const data: DataType[] = [
  { name: 'Dissatisfied', percentage: 25, color: '#f1416c' },
  { name: 'Neutral', percentage: 25, color: '#7928ca' },
  { name: 'Satisfied', percentage: 25, color: '#3872FA' },
  { name: 'Very Satisfied', percentage: 25, color: '#10b981' },
];
const percentage = 68;

const needle = (
  percentage: number,
  data: DataType[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string
) => {
  let total = 0;
  data.forEach((v) => {
    total += v.percentage;
  });
  const ang = 180.0 * (1 - percentage / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return (
    <g>
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="none"
        fill={color}
      />
    </g>
  );
};

export default function SatisfactionRate({
  className,
}: {
  className?: string;
}) {
  const [chartRef, { width }] = useElementSize();
  const isMobile = useMedia('(max-width: 320px)', false);

  const config = {
    cx: width / 2,
    cy: 200,
    iR: isMobile ? 80 : 100,
    oR: isMobile ? 110 : 150,
  };

  return (
    <WidgetCard title="Customer Satisfaction Rate" className={className}>
      <div ref={chartRef} className="h-64 w-full md:h-72 lg:h-64 3xl:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className="relative [&>.recharts-surface]:mx-auto [&>.recharts-surface]:max-w-md [&>.recharts-surface]:md:max-w-none">
            <Pie
              dataKey="percentage"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={config.cx}
              cy={config.cy}
              innerRadius={config.iR}
              outerRadius={config.oR}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {needle(
              percentage,
              data,
              config.cx,
              config.cy,
              config.iR,
              config.oR,
              '#111'
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-6 gap-y-4 @md:grid-cols-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center">
            <span
              className="me-2 h-2.5 w-3.5 flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <Text as="span" className=" whitespace-nowrap">
              {item.name}
            </Text>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
