'use client';

import {
  useForm,
  useWatch,
  FormProvider,
  type SubmitHandler,
} from 'react-hook-form';
import { useSetAtom } from 'jotai';
import toast from 'react-hot-toast';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import DifferentBillingAddress from '@/app/shared/ecommerce/order/order-form/different-billing-address';
import { orderData } from '@/app/shared/ecommerce/order/order-form/form-utils';
import AddressInfo from '@/app/shared/ecommerce/order/order-form/address-info';
import ShippingMethod from '@/app/shared/ecommerce/checkout/shipping-method';
import PaymentMethod from '@/app/shared/ecommerce/checkout/payment-method';
import OrderSummery from '@/app/shared/ecommerce/checkout/order-summery';
import OrderNote from '@/app/shared/ecommerce/checkout/order-note';
// import { useCart } from '@/store/quick-cart/cart.context';
import { DUMMY_ID } from '@/config/constants';
import { Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import cn from '@/utils/class-names';
import {
  billingAddressAtom,
  orderNoteAtom,
  shippingAddressAtom,
} from '@/store/checkout';
import {
  CreateOrderInput,
  orderFormSchema,
} from '@/utils/validators/create-order.schema';
import { useState } from 'react';

// main order form component for create and update order
export default function CheckoutPageWrapper({
  className,
}: {
  className?: string;
}) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const setOrderNote = useSetAtom(orderNoteAtom);
  const setBillingAddress = useSetAtom(billingAddressAtom);
  const setShippingAddress = useSetAtom(shippingAddressAtom);

  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      sameShippingAddress: orderData.sameShippingAddress,
      shippingMethod: orderData.shippingMethod,
    },
  });

  const sameShippingAddress = useWatch({
    control: methods.control,
    name: 'sameShippingAddress',
  });

  const onSubmit: SubmitHandler<CreateOrderInput> = (data) => {
    // set timeout ony required to display loading state of the create order button
    setOrderNote(data?.note as string);
    if (sameShippingAddress) {
      setBillingAddress(data.billingAddress);
      setShippingAddress(data.billingAddress);
    } else {
      if (!isEmpty(data.shippingAddress)) {
        setShippingAddress(data.shippingAddress);
      }
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log('checkout_data', data);
      router.push(routes.eCommerce.orderDetails(DUMMY_ID));
      toast.success(<Text as="b">Order placed successfully!</Text>);
    }, 600);
  };

  // console.log('errors', methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form
        // @ts-ignore
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(
          'isomorphic-form isomorphic-form mx-auto flex w-full max-w-[1536px] flex-grow flex-col @container [&_label.block>span]:font-medium',
          className
        )}
      >
        <div className="items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
          <div className="gap-4 border-gray-200 @container @5xl:col-span-8 @5xl:border-e @5xl:pb-12 @5xl:pe-7 @6xl:col-span-7 @7xl:pe-12">
            <div className="flex flex-col gap-4 @xs:gap-7 @5xl:gap-9">
              <AddressInfo type="billingAddress" title="Billing Information" />

              <DifferentBillingAddress />

              {!sameShippingAddress && <AddressInfo type="shippingAddress" />}

              <OrderNote />

              <ShippingMethod />

              <PaymentMethod />
            </div>
          </div>

          <OrderSummery isLoading={isLoading} />
        </div>
      </form>
    </FormProvider>
  );
}
