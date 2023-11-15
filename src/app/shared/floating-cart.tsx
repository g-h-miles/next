'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { PiShoppingCartBold } from 'react-icons/pi';
import { useCart } from '@/store/quick-cart/cart.context';
import { routes } from '@/config/routes';
import cn from '@/utils/class-names';
import { DUMMY_ID } from '@/config/constants';
import CartDrawerView from './ecommerce/cart/cart-drawer-view';

const Drawer = dynamic(
  () => import('@/components/ui/drawer').then((module) => module.Drawer),
  { ssr: false }
);

interface FloatingCartProps {
  className?: string;
}

export default function FloatingCart({ className }: FloatingCartProps) {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    totalItems,
    items,
    total,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  } = useCart();

  // Check if this page belongs to ecommerce.
  const isECom = pathname.includes('ecommerce');

  // list of excluded pages
  const excludedPaths = [
    routes.eCommerce.cart,
    routes.eCommerce.checkout,
    routes.eCommerce.orderDetails(DUMMY_ID),
  ];

  // check if current page is cart or checkout
  const isPathExcluded = excludedPaths.includes(pathname);

  /**
   * Display this floating cart on all e-commerce pages except for the cart, checkout and order view.
   */
  return (
    isECom &&
    !isPathExcluded && (
      <>
        <button
          className={cn(
            'fixed right-2 top-1/2 z-20 grid -translate-y-1/2  place-content-center gap-1 rounded-md bg-primary p-3 text-xs font-semibold text-white shadow-[0_25px_50px_-12px_#000000]',
            className
          )}
          onClick={() => setOpenDrawer(true)}
        >
          <PiShoppingCartBold className="mx-auto h-[18px] w-auto" />
          {totalItems} {totalItems > 1 ? 'Items' : 'Item'}
        </button>
        <Drawer
          size="sm"
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
    )
  );
}
