'use client';

import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import cn from '@/utils/class-names';
import { CartItem, PosProduct } from '@/types';
import { toCurrency } from '@/utils/to-currency';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { Button } from '@/components/ui/button';
import { useCart } from '@/store/quick-cart/cart.context';

interface ProductProps {
  product: PosProduct;
  className?: string;
}

export default function ProductClassicCard({
  product,
  className,
}: ProductProps) {
  const { name, description, price, image, salePrice, discount, base64 } =
    product;

  const { addItemToCart, isInCart } = useCart();

  return (
    <div className={cn('pb-0.5', className)}>
      <div className="relative">
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            alt={name}
            src={image}
            fill
            priority
            quality={90}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
            blurDataURL={base64 ?? `/_next/image?url=${image}&w=10&q=1`}
            className="h-full w-full object-cover"
          />
        </div>
        <Text
          as="span"
          className="absolute start-5 top-5 rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold dark:bg-gray-200 dark:text-gray-700"
        >
          {discount}% Discount
        </Text>
      </div>

      <div className="pt-3">
        <Title as="h6" className="mb-1 truncate font-inter font-semibold">
          {name}
        </Title>

        <Text as="p" className="truncate">
          {description}
        </Text>
        <div className="mt-2 flex items-center font-semibold text-gray-900">
          {toCurrency(Number(salePrice))}
          {price && (
            <del className="ps-1.5 text-[13px] font-normal text-gray-500">
              {toCurrency(Number(price))}
            </del>
          )}
        </div>
        <div className="mt-3">
          {isInCart(product.id) ? (
            <QuantityControl item={product} />
          ) : (
            <Button
              onClick={() => addItemToCart(product, 1)}
              className="w-full"
              variant="outline"
            >
              Order
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function QuantityControl({ item }: { item: CartItem }) {
  const { addItemToCart, removeItemFromCart, getItemFromCart } = useCart();
  return (
    <div className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 px-1 duration-200 hover:border-gray-900">
      <button
        title="Decrement"
        className="flex items-center justify-center rounded p-2 duration-200 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => removeItemFromCart(item.id)}
      >
        <PiMinus className="h-3.5 w-3.5" />
      </button>
      <span className="grid w-8 place-content-center font-medium">
        {getItemFromCart(item.id).quantity}
      </span>
      <button
        title="Decrement"
        className="flex items-center justify-center rounded p-2 duration-200 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => addItemToCart(item, 1)}
      >
        <PiPlus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
