'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// import dynamic from 'next/dynamic';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Title, Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ProductCarousel from '@/components/product-carousel';
import { routes } from '@/config/routes';
// import data
import { recentlyProducts, recommendationProducts } from '@/data/shop-products';
import CartProduct from '@/app/shared/ecommerce/cart/cart-product';
import { useCart } from '@/store/quick-cart/cart.context';
import usePrice from '@/hooks/use-price';

// const TablePagination = dynamic(
//   () => import('@/components/controlled-table/table-pagination'),
//   { ssr: false }
// );

type FormValues = {
  couponCode: string;
};

function CheckCoupon() {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setReset({ couponCode: '' });
  };

  return (
    <Form<FormValues>
      resetValues={reset}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: { couponCode: '' },
      }}
      className="w-full"
    >
      {({ register, formState: { errors }, watch }) => (
        <>
          <div className="relative flex items-end">
            <Input
              type="text"
              placeholder="Enter coupon code"
              inputClassName="text-sm"
              className="w-full"
              label={<Text>Do you have a promo code?</Text>}
              {...register('couponCode')}
              error={errors.couponCode?.message}
            />
            <Button
              type="submit"
              className="ms-3 dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
              disabled={watch('couponCode') ? false : true}
            >
              Apply
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}

// remove item

// cart product card

// total cart balance calculation
function CartCalculations() {
  const router = useRouter();
  const { total } = useCart();
  const { price: totalPrice } = usePrice({
    amount: total,
  });
  return (
    <div>
      <Title
        as="h2"
        className="border-b border-gray-200 pb-4 text-lg font-medium"
      >
        Cart Totals
      </Title>
      <div className="mt-6 grid grid-cols-1 gap-4 @md:gap-6">
        <div className="flex items-center justify-between">
          Subtotal
          <span className="font-medium text-gray-1000">$140.00</span>
        </div>
        <div className="flex items-center justify-between">
          Tax
          <span className="font-medium text-gray-1000">$0.18</span>
        </div>
        <div className="flex items-center justify-between">
          Shipping
          <span className="font-medium text-gray-1000">$50.00</span>
        </div>
        <CheckCoupon />
        <div className="mt-3 flex items-center justify-between border-t border-gray-200 py-4 font-semibold text-gray-1000">
          Total
          <span className="font-medium text-gray-1000">{totalPrice}</span>
        </div>
        <Link href={routes.eCommerce.checkout}>
          <Button
            size="xl"
            rounded="pill"
            onClick={() => router.push(routes.eCommerce.checkout)}
            className="w-full dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            Proceed To Checkout
          </Button>
        </Link>
        <Button
          size="xl"
          variant="outline"
          rounded="pill"
          className="w-full dark:bg-gray-100 dark:active:bg-gray-100"
        >
          <Image
            src="https://isomorphic-furyroad.s3.amazonaws.com/public/payment/paypal.png"
            alt="paypal-icon"
            width={80}
            height={10}
            className="object-contain"
          />
        </Button>
      </div>
    </div>
  );
}

export default function CartPageWrapper() {
  const { items } = useCart();
  return (
    <div className="@container">
      <div className="mx-auto w-full max-w-[1536px] items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
        <div className="@5xl:col-span-8 @6xl:col-span-7">
          {items.map((item) => (
            <CartProduct key={item.id} product={item} />
          ))}
          {/* <TablePagination
            total={25}
            current={1}
            defaultCurrent={1}
            pageSize={6}
          /> */}
        </div>
        <div className="sticky top-24 mt-10 @container @5xl:col-span-4 @5xl:mt-0 @5xl:px-4 @6xl:col-span-3 2xl:top-28">
          <CartCalculations />
        </div>
      </div>

      <ProductCarousel
        title={'Recommendations'}
        data={recommendationProducts}
      />
      <ProductCarousel title={'Recently Viewed'} data={recentlyProducts} />
    </div>
  );
}
