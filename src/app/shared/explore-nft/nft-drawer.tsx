'use client';

import { Button } from '@/components/ui/button';
import { useDrawer } from '@/app/shared/drawer-views/use-drawer';
import { PiSliders } from 'react-icons/pi';
import NFTDrawerView from '@/app/shared/explore-nft/nft-drawer-view';

export default function NFTDrawer() {
  const { openDrawer } = useDrawer();
  return (
    <Button
      rounded="pill"
      className="mt-6 flex w-full cursor-pointer @lg:mt-0 @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100 @[60rem]:hidden"
      onClick={() =>
        openDrawer({
          view: <NFTDrawerView />,
          placement: 'right',
        })
      }
    >
      <PiSliders className="me-1 h-4 w-4 rotate-90" />
      Filters
    </Button>
  );
}
