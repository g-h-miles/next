'use client';

import Image from 'next/image';
import { PiMinus, PiPlus, PiTrash } from 'react-icons/pi';
import { useCart } from '@/store/quick-cart/cart.context';
import { toCurrency } from '@/utils/to-currency';
import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';
import { CartItem } from '@/types';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { generateSlug } from '@/utils/generate-slug';
import SimpleBar from '@/components/ui/simplebar';

export default function POSOrderProducts({
  className,
  showControls,
  itemClassName,
  simpleBarClassName,
  orderedItems,
  removeItemFromCart,
  clearItemFromCart,
}: {
  className?: string;
  itemClassName?: string;
  simpleBarClassName?: string;
  showControls?: boolean;
  orderedItems: CartItem[];
  removeItemFromCart: (id: number) => void;
  clearItemFromCart: (id: number) => void;
}) {
  return (
    <div className={className}>
      <SimpleBar
        className={cn('h-[calc(100vh_-_630px)] pb-3', simpleBarClassName)}
      >
        <div className="space-y-7">
          {orderedItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                'group relative flex items-center justify-between',
                itemClassName
              )}
            >
              <div className="flex w-4/6 items-start pe-2">
                <figure className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw"
                    className="h-full w-full object-cover"
                  />

                  {showControls && (
                    <>
                      <span className="absolute inset-0 grid place-content-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100" />
                      <RemoveItem
                        clearItemFromCart={clearItemFromCart}
                        product={item}
                        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded text-white opacity-0 transition duration-300 group-hover:opacity-100"
                      />
                    </>
                  )}
                </figure>
                <div className="ps-3">
                  <Title
                    as="h3"
                    className="mb-2 truncate font-inter text-sm font-bold text-gray-900"
                  >
                    <Link
                      href={routes.eCommerce.productDetails(
                        generateSlug(item.name)
                      )}
                    >
                      {item.name}
                    </Link>
                  </Title>
                  <div className="mb-2 text-xs font-medium text-gray-900">
                    {toCurrency(item?.salePrice ?? item.price)} x{' '}
                    {item.quantity}
                  </div>
                  <QuantityControl item={item} />
                </div>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap font-medium text-gray-700">
                {toCurrency((item?.salePrice ?? item.price) * item.quantity)}
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}

function QuantityControl({ item }: { item: CartItem }) {
  const { removeItemFromCart, addItemToCart } = useCart();
  return (
    <div className="inline-flex items-center gap-2.5 text-xs ">
      <button
        title="Decrement"
        className="grid h-7 w-7 place-content-center rounded-full bg-gray-100"
        onClick={() => removeItemFromCart(item.id)}
      >
        <PiMinus className="h-3 w-3 text-gray-600" />
      </button>
      <span className="font-medium text-gray-900">{item.quantity}</span>
      <button
        title="Decrement"
        className="grid h-7 w-7 place-content-center rounded-full bg-gray-100"
        onClick={() => addItemToCart(item, 1)}
      >
        <PiPlus className="h-3 w-3 text-gray-600" />
      </button>
    </div>
  );
}

function RemoveItem({
  product,
  className,
  clearItemFromCart,
}: {
  product: CartItem;
  clearItemFromCart: (id: number) => void;
  className?: string;
}) {
  return (
    <button className={className} onClick={() => clearItemFromCart(product.id)}>
      <PiTrash className="h-6 w-6" />
    </button>
  );
}
