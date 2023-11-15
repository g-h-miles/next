'use client';
import {
  useDrawer,
  type DrawerPlacements,
} from '@/app/shared/drawer-views/use-drawer';
import { Button } from '@/components/ui/button';
import cn from '@/utils/class-names';
import { PiSliders } from 'react-icons/pi';

interface FiltersButtonProps {
  className?: string;
  modalView: React.ReactNode;
  placement: DrawerPlacements;
}

export default function FiltersButton({
  className,
  placement,
  modalView,
}: FiltersButtonProps) {
  const { openDrawer } = useDrawer();
  return (
    <Button
      className={cn(
        'mt-4 w-full cursor-pointer @lg:mt-0 @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100',
        className
      )}
      onClick={() =>
        openDrawer({
          view: modalView,
          placement,
        })
      }
    >
      <PiSliders className="me-1 h-4 w-4 rotate-90" />
      Filters
    </Button>
  );
}
