import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ActionIcon } from '@/components/ui/action-icon';
import WidgetCard from '@/components/cards/widget-card';
import CircleProgressBar from '@/components/charts/circle-progressbar';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';

const data = [
  {
    name: 'New Customers',
    value: '60%',
    percentage: 60,
    color: '#3872FA',
    bgColor: 'bg-[#3872FA]',
    bgActiveColor: 'active:enabled:bg-[#2750AF]',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    name: 'Convention Rate',
    value: '71%',
    percentage: 71,
    color: '#10b981',
    bgColor: 'bg-[#10b981]',
    bgActiveColor: 'active:enabled:bg-[#059669]',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    name: 'Page Session',
    value: '80%',
    percentage: 80,
    color: '#f1416c',
    bgColor: 'bg-[#f1416c]',
    bgActiveColor: 'active:enabled:bg-[#f0106c]',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    name: 'Bounce Rate',
    value: '67%',
    percentage: 67,
    color: '#7928ca',
    bgColor: 'bg-[#7928ca]',
    bgActiveColor: 'active:enabled:bg-[#4c2889]',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
];

export default function CircleProgressBars({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      {data.map((item) => (
        <WidgetCard
          key={item.name}
          title={item.name}
          description={'67% acquired this month'}
          rounded="lg"
          action={
            <ActionIcon variant="outline" rounded="full">
              <PiSlidersHorizontalDuotone className="h-auto w-5" />
            </ActionIcon>
          }
          descriptionClassName="text-gray-500 mt-1.5"
          className={cn(className)}
        >
          <div className="mt-5 grid w-full grid-cols-1 justify-around gap-6 @container @sm:py-2 @7xl:gap-8">
            <div className="text-center">
              <div className="mx-auto mb-5 mt-2 w-full max-w-[180px] sm:mb-7 xl:mb-8 2xl:mb-10 2xl:mt-4">
                <CircleProgressBar
                  percentage={item.percentage}
                  size={180}
                  stroke="#f0f0f0"
                  strokeWidth={12}
                  progressColor={item.color}
                  label={
                    <Text className="font-lexend text-xl font-bold text-gray-900 @xs:text-2xl">
                      {item.value}
                    </Text>
                  }
                  strokeClassName="dark:stroke-gray-200"
                />
              </div>
              <Text className="leading-relaxed">
                <Text as="strong" className="font-semibold">
                  Notes:
                </Text>{' '}
                {item.message}
              </Text>
            </div>

            <Button
              size="lg"
              className={cn(
                'text-sm font-semibold text-white',
                item.bgColor,
                item.bgActiveColor
              )}
            >
              View Details
            </Button>
          </div>
        </WidgetCard>
      ))}
    </>
  );
}
