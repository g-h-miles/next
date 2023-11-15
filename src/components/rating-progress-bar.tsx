import cn from '@/utils/class-names';
import { PiStarFill } from 'react-icons/pi';

type RatingProgressProps = {
  label?: number;
  ratingCount: number;
  totalReviews: number;
  progressBarClassName?: string;
};

export default function RatingProgressBar({
  label = 0,
  ratingCount,
  totalReviews,
  progressBarClassName = 'bg-primary',
}: RatingProgressProps) {
  return (
    <div className="flex items-center text-sm">
      <div className="flex w-11 shrink-0 items-center space-x-1 font-semibold rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900">{label}</span>{' '}
        <PiStarFill className="w-4 fill-orange text-orange" />
      </div>
      <div className="relative h-1 w-52 overflow-hidden rounded-md bg-primary-lighter">
        <div
          className={cn('absolute h-full rounded-md', progressBarClassName)}
          style={{
            width: `${(ratingCount / totalReviews) * 100}%`,
          }}
        />
      </div>
      <div className="shrink-0 ltr:pl-5 rtl:pr-5">{ratingCount ?? 0}</div>
    </div>
  );
}
