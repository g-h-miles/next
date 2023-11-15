import Image from 'next/image';
import { PiMinus, PiPlus, PiTrash } from 'react-icons/pi';
import { toCurrency } from '@/utils/to-currency';
import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';
import { CartItem } from '@/types';
import Link from 'next/link';
import { routes } from '@/config/routes';
import { generateSlug } from '@/utils/generate-slug';
import SimpleBar from '@/components/ui/simplebar';

export default function OrderProducts({
  items,
  className,
  showControls,
  itemClassName,
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
}: {
  items: CartItem[];
  className?: string;
  itemClassName?: string;
  showControls?: boolean;
  clearItemFromCart: (id: number) => void;
  addItemToCart: (item: CartItem, quantity: number) => void;
  removeItemFromCart: (id: number) => void;
}) {
  return (
    <SimpleBar className={cn('h-[calc(100vh_-_170px)] pb-3', className)}>
      <div className={cn('grid gap-3.5', className)}>
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              'group relative flex items-center justify-between',
              itemClassName
            )}
          >
            <div className="flex items-center pe-3">
              <figure className="relative aspect-[4/4.5] w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
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
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  <Link
                    href={routes.eCommerce.productDetails(
                      generateSlug(item.name)
                    )}
                  >
                    {item.name}
                  </Link>
                </Title>
                <div className="text-gray-500">
                  {toCurrency(item.price)} x {item.quantity}
                </div>
                {showControls && (
                  <QuantityControl
                    product={item}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                  />
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 font-medium text-gray-700">
              {toCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>
    </SimpleBar>
  );
}

function QuantityControl({
  product,
  addItemToCart,
  removeItemFromCart,
}: {
  product: CartItem;
  addItemToCart: (item: CartItem, quantity: number) => void;
  removeItemFromCart: (id: number) => void;
}) {
  return (
    <div className="mt-2 inline-flex items-center rounded bg-gray-100 p-0.5 text-xs">
      <button
        title="Decrement"
        className="grid h-5 w-5 place-content-center rounded"
        onClick={() => removeItemFromCart(product.id)}
      >
        <PiMinus className="h-3 w-3" />
      </button>
      <span className="grid w-8 place-content-center">{product.quantity}</span>
      <button
        title="Decrement"
        className="grid h-5 w-5 place-content-center rounded bg-gray-100"
        onClick={() => addItemToCart(product, 1)}
      >
        <PiPlus className="h-3 w-3" />
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
  className?: string;
  clearItemFromCart: (id: number) => void;
}) {
  return (
    <button
      className={cn('', className)}
      onClick={() => clearItemFromCart(product.id)}
    >
      <PiTrash className="h-6 w-6" />
    </button>
  );
}
