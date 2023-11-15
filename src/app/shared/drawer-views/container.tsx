'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Drawer } from '@/components/ui/drawer';
import { useDrawer } from './use-drawer';

export default function GlobalDrawer() {
  const { isOpen, view, placement, customSize, closeDrawer } = useDrawer();
  const pathname = usePathname();
  useEffect(() => {
    closeDrawer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      placement={placement}
      customSize={customSize}
      overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-md"
      containerClassName="dark:bg-gray-100"
    >
      {view}
    </Drawer>
  );
}
