'use client';

import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';

const metricCardClasses = {
  base: 'border border-gray-200 bg-gray-0 p-5 dark:bg-gray-50 lg:p-6',
  rounded: {
    sm: 'rounded-sm',
    DEFAULT: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
  },
};

type MetricCardTypes = {
  title: string;
  metric: string | number;
  icon?: React.ReactNode;
  iconClassName?: string;
  contentClassName?: string;
  chart?: React.ReactNode;
  info?: React.ReactNode;
  rounded?: keyof typeof metricCardClasses.rounded;
  titleClassName?: string;
  metricClassName?: string;
  chartClassName?: string;
  className?: string;
};

export default function MetricCard({
  title,
  metric,
  icon,
  chart,
  info,
  rounded = 'DEFAULT',
  className,
  iconClassName,
  contentClassName,
  titleClassName,
  metricClassName,
  chartClassName,
  children,
}: React.PropsWithChildren<MetricCardTypes>) {
  return (
    <div
      className={cn(
        metricCardClasses.base,
        metricCardClasses.rounded[rounded],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon && (
            <div
              className={cn(
                'flex h-11 w-11 items-center justify-center',
                iconClassName
              )}
            >
              {icon}
            </div>
          )}

          <div className={cn(icon && 'ps-3', contentClassName)}>
            <Text className={cn('mb-0.5 text-gray-500', titleClassName)}>
              {title}
            </Text>
            <Title as="h4" className={cn(metricClassName)}>
              {metric}
            </Title>

            {info ? info : null}
          </div>
        </div>

        {chart ? (
          <div className={cn('h-12 w-20', chartClassName)}>{chart}</div>
        ) : null}
      </div>

      {children}
    </div>
  );
}
