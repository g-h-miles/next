'use client';

import { ResponsiveContainer, FunnelChart, Funnel, Cell } from 'recharts';
import WidgetCard from '@/components/cards/widget-card';
import cn from '@/utils/class-names';

const data = [
  { name: 'Damaged Packaging', value: 100, color: '#3872FA' },
  { name: 'Missing Parts', value: 80, color: '#7928ca' },
  { name: 'Late Delivery', value: 50, color: '#eab308' },
  { name: 'Lost Shipment', value: 30, color: '#f1416c' },
  { name: 'Others', value: 20, color: '#c084fc' },
];

export default function ComplaintReason({ className }: { className?: string }) {
  return (
    <WidgetCard
      title="Complaint Reason"
      className={cn('flex flex-col justify-between', className)}
    >
      <div className="h-80 w-full pt-9 @2xl:mx-auto @2xl:w-[28rem] @6xl:h-[28rem] @7xl:h-80 @7xl:pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Funnel dataKey="value" data={data} isAnimationActive>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                  stroke={entry.color}
                  className="dark:[fill-opacity:0.9]"
                />
              ))}
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-1">
            <span
              style={{ backgroundColor: entry.color }}
              className="h-2 w-4 rounded-sm"
            />
            {entry.name}
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
