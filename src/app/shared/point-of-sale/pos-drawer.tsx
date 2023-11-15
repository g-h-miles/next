'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useCart } from '@/store/quick-cart/cart.context';
import FloatingCartButton from '@/app/shared/floating-cart-button';
import POSDrawerView from './pos-drawer-view';
const Drawer = dynamic(
  () => import('@/components/ui/drawer').then((module) => module.Drawer),
  { ssr: false }
);

type PosDrawerProps = {
  className?: string;
};

export default function POSDrawer({ className }: PosDrawerProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { totalItems, items, removeItemFromCart, clearItemFromCart } =
    useCart();

  return (
    <>
      <FloatingCartButton
        onClick={() => setOpenDrawer(true)}
        className={className}
        totalItems={totalItems}
      />

      <Drawer
        isOpen={openDrawer ?? false}
        onClose={() => setOpenDrawer(false)}
        overlayClassName="dark:bg-opacity-60"
        containerClassName="dark:bg-gray-100 max-w-md"
      >
        <POSDrawerView
          removeItemFromCart={removeItemFromCart}
          clearItemFromCart={clearItemFromCart}
          onOrderSuccess={() => setOpenDrawer(false)}
          orderedItems={items}
          className="h-screen border-none"
          simpleBarClassName="h-[calc(100vh_-_495px)] sm:h-[calc(100vh_-_505px)]"
        />
      </Drawer>
    </>
  );
}
