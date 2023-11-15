import cn from '@/utils/class-names';
import { initialState, tags } from '@/app/shared/explore-flight/listing-filters/filter-utils';
import { useFilterControls } from '@/hooks/use-filter-control';
import Filter from '@/app/shared/explore-flight/listing-filters/filter';

function Tag({ name, value }: { name: string; value: string }) {
  const { state, applyFilter } = useFilterControls<typeof initialState, any>(
    initialState
  );

  const isActive = state['tag'] === name;

  return (
    <div
      className={cn(
        'relative my-3 w-full px-3 text-center @4xl:text-left md:my-5 md:px-5'
      )}
    >
      <div
        className={cn(
          'flex w-full cursor-pointer flex-col gap-2 text-sm font-semibold text-gray-900 md:text-base'
        )}
        onClick={() => applyFilter('tag', name)}
      >
        <span>{name}</span>
        <span className="hidden text-sm font-normal text-gray-500 lg:block">
          {value}
        </span>
      </div>
      {isActive && (
        <div className="absolute inset-x-auto -bottom-3 h-1 w-[calc(100%-24px)] bg-gray-900 md:-bottom-5 md:w-[calc(100%-40px)]"></div>
      )}
    </div>
  );
}

export function Tags({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  const { state, applyFilter } = useFilterControls<typeof initialState, any>(
    initialState
  );

  return (
    <div className="relative z-10 flex w-full flex-col items-center rounded-lg border border-x-gray-200 @container md:flex-row md:divide-x">
      {title && <p className="mb-1.5">{title}</p>}

      <div className={cn('grid w-full grid-cols-3 divide-x', className)}>
        {tags.map((tag, index) => (
          <Tag key={'tag-' + index + tag.name} {...tag} />
        ))}
      </div>

      <Filter
        className="ms-auto hidden pr-5 @4xl:flex"
        state={state}
        applyFilter={applyFilter}
      />
    </div>
  );
}
