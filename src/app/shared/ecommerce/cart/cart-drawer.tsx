'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useCart } from '@/store/quick-cart/cart.context';
import FloatingCartButton from '@/app/shared/floating-cart-button';
import CartDrawerView from './cart-drawer-view';

const Drawer = dynamic(
  () => import('@/components/ui/drawer').then((module) => module.Drawer),
  { ssr: false }
);

export default function CartDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    totalItems,
    items,
    removeItemFromCart,
    clearItemFromCart,
    total,
    addItemToCart,
  } = useCart();
  return (
    <>
      <FloatingCartButton
        onClick={() => setOpenDrawer(true)}
        className="top-1/2 -translate-y-1/2 bg-primary text-gray-0 dark:bg-primary"
        totalItems={totalItems}
      />
      <Drawer
        isOpen={openDrawer ?? false}
        onClose={() => setOpenDrawer(false)}
        overlayClassName="dark:bg-opacity-60"
        containerClassName="dark:bg-gray-100 max-w-md"
      >
        <CartDrawerView
          setOpenDrawer={setOpenDrawer}
          clearItemFromCart={clearItemFromCart}
          removeItemFromCart={removeItemFromCart}
          addItemToCart={addItemToCart}
          items={items}
          total={total}
        />
      </Drawer>
    </>
  );
}
