'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import cn from '@/utils/class-names';
import { initialState } from '@/app/shared/explore-nft/nft-filter-utils';
import { useFilterControls } from '@/hooks/use-filter-control';

export const tags = [
  {
    name: 'Live Auction',
    value: '45',
  },
  {
    name: 'Buy Now',
    value: '973.5k',
  },
  {
    name: 'Reserved Price',
    value: '166.7k',
  },
  {
    name: 'Active Offers',
    value: '2',
  },
];
function Tag({ name, value }: { name: string; value: string }) {
  const { state, reset, applyFilter } = useFilterControls<
    typeof initialState,
    any
  >(initialState);

  const isActive = state['tag'] === name;

  return (
    <Button
      rounded="pill"
      variant={isActive ? 'solid' : 'outline'}
      className={cn(
        'flex cursor-pointer items-center gap-2 border border-gray-300 px-3 py-1.5 duration-200 hover:ring-1 hover:ring-gray-900/30 lg:px-4 lg:py-2.5'
      )}
      onClick={() => applyFilter('tag', name)}
    >
      <span>{name}</span>
      <Badge
        size="sm"
        rounded="lg"
        variant="flat"
        className={cn('bg-gray-900/10 dark:bg-gray-900/20', {
          'bg-gray-100/20 text-gray-50 dark:bg-gray-100/20': isActive,
        })}
      >
        {value}
      </Badge>
    </Button>
  );
}

export function NFTFilterTags({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div>
      {title && <p className="mb-1.5">{title}</p>}
      <div className={cn('flex flex-wrap gap-3', className)}>
        {tags.map((tag, index) => (
          <Tag {...tag} key={'tag-' + index + tag.name} />
        ))}
      </div>
    </div>
  );
}
