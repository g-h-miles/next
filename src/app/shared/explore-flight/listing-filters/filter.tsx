import {
  InitialStateType,
  otherOptions,
  getOptionByValue,
} from '@/app/shared/explore-flight/listing-filters/filter-utils';
import Select from '@/components/ui/select';
import cn from '@/utils/class-names';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

export default function Filter({
  className,
  state,
  applyFilter,
}: {
  className?: string;
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
}) {
  // console.log(state['filter']);

  return (
    <div className={cn('flex', className)}>
      <Select
        placeholder={'Other sort'}
        variant="text"
        prefix={<HiOutlineAdjustmentsHorizontal className="h-5 w-5" />}
        selectClassName="h-[42px] pl-5 pr-3.5 min-w-[150px] focus:ring-0"
        dropdownClassName="p-1.5"
        optionClassName="h-9"
        options={otherOptions}
        onChange={(option: any) => applyFilter('filter', option.value)}
        value={getOptionByValue(state['filter'], otherOptions)}
        className="w-[296px]"
      />
    </div>
  );
}
