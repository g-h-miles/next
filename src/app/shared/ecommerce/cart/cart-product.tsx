import Link from 'next/link';
import Image from 'next/image';
import { CartItem } from '@/types';
import isEmpty from 'lodash/isEmpty';
import { toCurrency } from '@/utils/to-currency';
import { Title, Text } from '@/components/ui/text';
import { AddToWishList } from '@/components/wishlist-button';
import RemoveItem from '@/app/shared/ecommerce/cart/remove-item';
import QuantityInput from '@/app/shared/ecommerce/cart/quantity-input';
import { routes } from '@/config/routes';

export default function CartProduct({ product }: { product: CartItem }) {
  return (
    <div className="grid grid-cols-12 items-start gap-4 border-b border-gray-200 py-6 first:pt-0 sm:flex sm:gap-6 2xl:py-8">
      <figure className="col-span-4 sm:max-w-[180px]">
        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={180}
          className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
        />
      </figure>
      <div className="col-span-8 sm:block sm:w-full">
        <div className="flex flex-col-reverse gap-1 sm:flex-row sm:items-center sm:justify-between">
          <Title
            as="h3"
            className="truncate text-base font-medium transition-colors hover:text-primary 3xl:text-lg"
          >
            <Link
              href={routes.eCommerce.productDetails(product?.slug as string)}
            >
              {product.name}
            </Link>
          </Title>
          <span className="inline-block text-sm font-semibold text-gray-1000 sm:font-medium md:text-base 3xl:text-lg">
            {toCurrency(product.price)}
          </span>
        </div>
        <Text className="mt-1 w-full max-w-xs truncate leading-6 2xl:max-w-lg">
          {product.description}
        </Text>

        {(!isEmpty(product.size) || !isEmpty(product.color)) && (
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-3 sm:mt-4 sm:gap-x-8">
            {product.size !== 0 && (
              <li className="flex items-center gap-3 text-gray-500">
                <span>Size :</span>
                <span className="text-gray-1000">{product.size}</span>
              </li>
            )}
            {!isEmpty(product.color) && (
              <li className="flex items-center gap-3 text-gray-500">
                <span>Color :</span>
                <div className="flex items-center gap-2">
                  <div
                    className="inline-block h-4 w-4 rounded-full"
                    style={{
                      backgroundColor: product.color.code,
                    }}
                  ></div>
                  <span className="text-gray-1000">{product.color.name}</span>
                </div>
              </li>
            )}
          </ul>
        )}

        <div className="mt-3 hidden items-center justify-between xs:flex sm:mt-6">
          <QuantityInput product={product} />
          <div className="flex items-center gap-4">
            <AddToWishList />
            <RemoveItem productID={product.id} placement="bottom-end" />
          </div>
        </div>
      </div>
      <div className="col-span-full flex items-center justify-between xs:hidden">
        <div className="flex items-center gap-4">
          <AddToWishList />
          <RemoveItem productID={product.id} placement="bottom-start" />
        </div>
        <QuantityInput product={product} />
      </div>
    </div>
  );
}
