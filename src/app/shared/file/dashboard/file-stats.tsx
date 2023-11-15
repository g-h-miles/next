'use client';

import cn from '@/utils/class-names';
import { Button } from '@/components/ui/button';
import { Title, Text } from '@/components/ui/text';
import { useScrollableSlider } from '@/hooks/use-scrollable-slider';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import MetricCard from '@/components/cards/metric-card';
import CircleProgressBar from '@/components/charts/circle-progressbar';
import TrendingUpIcon from '@/components/icons/trending-up';
import TrendingDownIcon from '@/components/icons/trending-down';

type FileStatsType = {
  className?: string;
};

const filesStatData = [
  {
    id: 1,
    title: 'Total Images',
    metric: '36,476 GB',
    fill: '#3872FA',
    percentage: 32,
    increased: true,
    decreased: false,
    value: '+32.40',
  },
  {
    id: 2,
    title: 'Total Videos',
    metric: '53,406 GB',
    fill: '#3872FA',
    percentage: 48,
    increased: false,
    decreased: true,
    value: '-18.45',
  },
  {
    id: 3,
    title: 'Total Documents',
    metric: '90,875 GB',
    fill: '#EE0000',
    percentage: 89,
    increased: true,
    decreased: false,
    value: '+20.34',
  },
  {
    id: 4,
    title: 'Total Musics',
    metric: '63,076 GB',
    fill: '#3872FA',
    percentage: 54,
    increased: true,
    decreased: false,
    value: '+14.45',
  },
];

export function FileStatGrid({ className }: { className?: string }) {
  return (
    <>
      {filesStatData.map((stat: any) => {
        return (
          <MetricCard
            key={stat.id}
            title={stat.title}
            metric={stat.metric}
            metricClassName="3xl:text-[22px]"
            className={cn('w-full max-w-full justify-between', className)}
            chart={
              <CircleProgressBar
                percentage={stat.percentage}
                size={80}
                stroke="#D7E3FE"
                strokeWidth={7}
                progressColor={stat.fill}
                useParentResponsive={true}
                label={
                  <Text
                    as="span"
                    className="font-lexend text-base font-medium text-gray-700"
                  >
                    {stat.percentage}%
                  </Text>
                }
                strokeClassName="dark:stroke-gray-300"
              />
            }
          >
            <Text className="mt-3 flex items-center leading-none text-gray-500">
              <Text
                as="span"
                className={cn(
                  'me-2 inline-flex items-center font-medium',
                  stat.increased ? 'text-green' : 'text-red'
                )}
              >
                {stat.increased ? (
                  <TrendingUpIcon className="me-1 h-4 w-4" />
                ) : (
                  <TrendingDownIcon className="me-1 h-4 w-4" />
                )}
                {stat.value}%
              </Text>
              last month
            </Text>
          </MetricCard>
        );
      })}
    </>
  );
}

export default function FileStats({ className }: FileStatsType) {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  return (
    <div
      className={cn(
        'relative flex w-auto items-center overflow-hidden',
        className
      )}
    >
      <Button
        title="Prev"
        variant="text"
        ref={sliderPrevBtn}
        onClick={() => scrollToTheLeft()}
        className="!absolute left-0 top-0 z-10 !h-full w-8 !justify-start rounded-none bg-gradient-to-r from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50/80 dark:via-gray-50/80 3xl:hidden"
      >
        <PiCaretLeftBold className="h-5 w-5" />
      </Button>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderEl}
          className="custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth 2xl:gap-6 3xl:gap-8"
        >
          <FileStatGrid className="min-w-[292px]" />
        </div>
      </div>
      <Button
        title="Next"
        variant="text"
        ref={sliderNextBtn}
        onClick={() => scrollToTheRight()}
        className="!absolute right-0 top-0 z-10 !h-full w-8 !justify-end rounded-none bg-gradient-to-l from-white via-white to-transparent px-0 text-gray-500 hover:text-black dark:from-gray-50/80 dark:via-gray-50/80 3xl:hidden"
      >
        <PiCaretRightBold className="h-5 w-5" />
      </Button>
    </div>
  );
}
