import { Input } from '@/components/ui/input';
import { NumberInput } from '@/components/ui/number-input';
import { Title } from '@/components/ui/text';
import { PiMinus } from 'react-icons/pi';
import { InitialStateType } from './filter-utils';

export default function BuiltYearFilter({
  state,
  applyFilter,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
}) {
  return (
    <div>
      <Title as="h6" className="mb-5 font-semibold">
        Year Built
      </Title>
      <div className="grid grid-cols-[1fr_20px_1fr] items-center gap-3">
        <NumberInput
          value={state.built_year_min}
          formatType="pattern"
          format="####"
          mask={['Y', 'Y', 'Y', 'Y']}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          onChange={({ target }) => applyFilter('built_year_min', target.value)}
          {...{ variant: 'outline' }}
        />
        <span className="relative top-0 inline-flex flex-shrink-0 items-center justify-center text-center">
          <PiMinus className=" w-3" />
        </span>
        <NumberInput
          value={state.built_year_max}
          formatType="pattern"
          format="####"
          mask={['Y', 'Y', 'Y', 'Y']}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          onChange={({ target }) => applyFilter('built_year_max', target.value)}
          {...{ variant: 'outline' }}
        />
      </div>
    </div>
  );
}
