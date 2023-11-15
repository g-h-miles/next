import { Collapse } from '@/components/ui/collapse';
import { PiCaretDownBold } from 'react-icons/pi';
import cn from '@/utils/class-names';
import { Switch } from '@/components/ui/switch';
import TrendingIcon from '@/components/icons/trending';

type BookOnTripFinderProps = {
  title: string;
  name: string;
  state: any;
  clearFilter?: (key: string[]) => void;
  applyFilter: (query: string, value: any) => void;
};

export default function BookOnTripFinder({
  title,
  name,
  state,
  clearFilter,
  applyFilter,
}: BookOnTripFinderProps) {
  return (
    <>
      <Collapse
        className="py-5"
        header={({ open, toggle }) => (
          <button
            type="button"
            onClick={toggle}
            className="flex w-full cursor-pointer items-center justify-between text-base font-semibold text-gray-900"
          >
            <div className="flex items-center gap-2">
              {title}
              <TrendingIcon className="h-5 w-5" />
            </div>
            <PiCaretDownBold
              strokeWidth={3}
              className={cn(
                'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                open && 'rotate-0 rtl:rotate-0'
              )}
            />
          </button>
        )}
      >
        <div className="mt-4 flex items-center justify-between text-gray-600">
          <span className="max-w-[146px]">
            Show offers instantly bookable on KAYAK.
          </span>
          <Switch />
        </div>
      </Collapse>
    </>
  );
}
