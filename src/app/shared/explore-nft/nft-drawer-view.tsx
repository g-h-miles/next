'use client';

import { Button } from '@/components/ui/button';
import { useFilterControls } from '@/hooks/use-filter-control';
import { useDrawer } from '@/app/shared/drawer-views/use-drawer';
import hasSearchedParams from '@/utils/has-searched-params';
import {
  initialState,
  filterOptions,
} from '@/app/shared/explore-nft/nft-filter-utils';
import Select from '@/components/ui/select';
import { NFTFilterTags } from '@/app/shared/explore-nft/nft-filter-tags';
import DrawerHeader from '@/app/shared/drawer-header';
import { getOptionByValue } from '@/utils/get-option-by-value';

export default function NFTDrawerView() {
  const { state, reset, applyFilter } = useFilterControls<
    typeof initialState,
    any
  >(initialState);
  const { closeDrawer } = useDrawer();

  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-white dark:bg-gray-100">
      <DrawerHeader heading="Filters" onClose={closeDrawer} />

      <div className="min-h-[calc(100%-10rem)] space-y-9 p-5">
        <NFTFilterTags title="Tags" />
        <Select
          label="Filter"
          placeholder={'Filter'}
          selectClassName="h-[42px] min-w-[150px] "
          dropdownClassName="p-1.5"
          optionClassName="h-9"
          options={filterOptions}
          onChange={(option: any) => applyFilter('filter', option.value)}
          value={getOptionByValue(state['filter'], filterOptions)}
        />
      </div>
      <div className="sticky bottom-0 flex items-center justify-center gap-3 bg-white p-5 dark:bg-gray-100">
        {hasSearchedParams() ? (
          <Button
            size="lg"
            variant="outline"
            className="w-full dark:bg-gray-100 dark:text-white"
            onClick={() => {
              reset();
              closeDrawer();
            }}
          >
            Reset All
          </Button>
        ) : null}
        <Button
          size="lg"
          onClick={() => closeDrawer()}
          className="w-full capitalize dark:bg-gray-200 dark:text-white dark:active:bg-gray-200"
        >
          Show results
        </Button>
      </div>
    </div>
  );
}
