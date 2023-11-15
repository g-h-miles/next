'use client';

import Link from 'next/link';
import isEmpty from 'lodash/isEmpty';
import OrderProducts from '@/app/shared/ecommerce/checkout/order-products';
import { toCurrency } from '@/utils/to-currency';
import { Title, Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import cn from '@/utils/class-names';
import { CartItem } from '@/types';
import DrawerHeader from '@/app/shared/drawer-header';
import { Button } from '@/components/ui/button';
import { EmptyProductBoxIcon } from '@/components/ui/empty';

type CartDrawerViewProps = {
  items: CartItem[];
  total: number;
  addItemToCart: (item: CartItem, quantity: number) => void;
  removeItemFromCart: (id: number) => void;
  clearItemFromCart: (id: number) => void;
  setOpenDrawer: (id: boolean) => void;
};

export default function CartDrawerView({
  items,
  total,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setOpenDrawer,
}: CartDrawerViewProps) {
  const isCartEmpty = isEmpty(items);
  return (
    <div className="flex h-full w-full flex-col">
      <DrawerHeader
        heading="Shopping Cart"
        onClose={() => setOpenDrawer(false)}
      />
      {isCartEmpty ? (
        <div className="grid h-full place-content-center">
          <EmptyProductBoxIcon className="mx-auto h-auto w-52 text-gray-400" />
          <Title as="h5" className="mt-6 text-center">
            Your cart is empty
          </Title>
          <Text className="mt-1 text-center">Start Shopping!!</Text>
        </div>
      ) : (
        <OrderProducts
          items={items}
          showControls
          className="mb-5 gap-0 divide-y border-b border-gray-100"
          itemClassName="p-4 pb-5 md:px-6"
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          clearItemFromCart={clearItemFromCart}
        />
      )}

      {isCartEmpty ? (
        <div className="px-4 py-5">
          <Button
            className="w-full"
            variant="flat"
            onClick={() => setOpenDrawer(false)}
          >
            Back To Shop
          </Button>
        </div>
      ) : (
        <Link
          href={routes.eCommerce.checkout}
          className={cn(
            'mx-4 mb-6 mt-auto flex items-center justify-between rounded-md bg-gray-900 px-5 py-2 font-medium text-white dark:text-gray-0 md:mx-6'
          )}
        >
          Checkout
          <span className="-mr-3 inline-flex rounded-md bg-gray-700 p-2 px-4">
            {toCurrency(total)}
          </span>
        </Link>
      )}
    </div>
  );
}
