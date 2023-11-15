import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import CircleProgressBar from '@/components/charts/circle-progressbar';
import cn from '@/utils/class-names';

const data = [
  {
    name: 'New Customers',
    value: '30,000',
    percentage: 45,
    color: '#3872FA',
  },
  {
    name: 'Convention Rate',
    value: '75%',
    percentage: 75,
    color: '#f1416c',
  },
  {
    name: 'Page Session',
    value: '67%',
    percentage: 67,
    color: '#7928ca',
  },
];

export default function GoalAccomplished({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard
      title={'Goal Accomplished'}
      description={'67% acquired this month'}
      rounded="lg"
      descriptionClassName="text-gray-500 mt-1.5"
      className={cn('grid', className)}
    >
      <div className="mt-5 grid w-full grid-cols-3 justify-around gap-6 @sm:py-3 @md:mt-3 @xl:mt-4 @7xl:gap-8">
        {data.map((item) => (
          <div key={item.name} className="grid grid-cols-1 gap-6 text-center">
            <CircleProgressBar
              percentage={item.percentage}
              size={120}
              stroke="#f0f0f0"
              strokeWidth={5}
              progressColor={item.color}
              useParentResponsive={true}
              label={<Title as="h6">{item.value}</Title>}
              strokeClassName="dark:stroke-gray-200"
            />
            <Text className="text-xs font-semibold text-gray-900 @md:text-sm @7xl:text-base dark:text-gray-700">
              {item.name}
            </Text>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
