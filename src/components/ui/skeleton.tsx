import { forwardRef } from 'react';
import cn from '@/utils/class-names';
import rangeMap from '@/utils/range-map';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
// bg-[#f3f3f3];
const classNames = {
  base: 'block relative h-3 w-full bg-[#f3f3f3] dark:bg-gray-200 overflow-hidden rounded',
  before: `before:content-['']`,
  after: `after:absolute after:inset-0 after:bg-red-light after:content-[''] after:bg-skeleton dark:after:bg-skeleton-dark after:animate-skeleton`,
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        className={cn(
          classNames.base,
          classNames.before,
          classNames.after,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export function LineGroup({
  columns = 1,
  className,
  skeletonClassName,
}: {
  columns: number;
  className?: string;
  skeletonClassName?: string;
}) {
  return (
    <div className={cn('grid', className)}>
      {rangeMap(columns, (i) => (
        <Skeleton key={i} className={cn('h-2 rounded', skeletonClassName)} />
      ))}
    </div>
  );
}
