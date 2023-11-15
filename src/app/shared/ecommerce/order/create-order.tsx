'use client';

import {
  useForm,
  useWatch,
  FormProvider,
  type SubmitHandler,
} from 'react-hook-form';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import toast from 'react-hot-toast';
import isEmpty from 'lodash/isEmpty';
import { zodResolver } from '@hookform/resolvers/zod';
import DifferentBillingAddress from '@/app/shared/ecommerce/order/order-form/different-billing-address';
import { defaultValues } from '@/app/shared/ecommerce/order/order-form/form-utils';
import CustomerInfo from '@/app/shared/ecommerce/order/order-form/customer-info';
import AddressInfo from '@/app/shared/ecommerce/order/order-form/address-info';
import cn from '@/utils/class-names';
import { Text } from '@/components/ui/text';
import OrderSummery from '@/app/shared/ecommerce/checkout/order-summery';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import OrderNote from '@/app/shared/ecommerce/checkout/order-note';
import {
  billingAddressAtom,
  orderNoteAtom,
  shippingAddressAtom,
} from '@/store/checkout';
import {
  CreateOrderInput,
  orderFormSchema,
} from '@/utils/validators/create-order.schema';

// main order form component for create and update order
export default function CreateOrder({
  id,
  order,
  className,
}: {
  id?: string;
  className?: string;
  order?: CreateOrderInput;
}) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const setOrderNote = useSetAtom(orderNoteAtom);
  const setBillingAddress = useSetAtom(billingAddressAtom);
  const setShippingAddress = useSetAtom(shippingAddressAtom);

  const methods = useForm({
    defaultValues: defaultValues(order),
    resolver: zodResolver(orderFormSchema),
  });

  const onSubmit: SubmitHandler<CreateOrderInput> = (data) => {
    // console.log('data', data);

    // set timeout ony required to display loading state of the create order button
    if (sameShippingAddress) {
      setBillingAddress(data.billingAddress);
      setShippingAddress(data.billingAddress);
    } else {
      if (!isEmpty(data.shippingAddress)) {
        setShippingAddress(data.shippingAddress);
      }
    }
    setOrderNote(data?.note as string);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log('createOrder data ->', data);
      router.push(routes.eCommerce.orderDetails(DUMMY_ID));
      toast.success(
        <Text as="b">Order {id ? 'Updated' : 'placed'} successfully!</Text>
      );
    }, 600);
  };

  const sameShippingAddress = useWatch({
    control: methods.control,
    name: 'sameShippingAddress',
  });

  return (
    <FormProvider {...methods}>
      <form
        // @ts-ignore
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(
          'isomorphic-form flex flex-grow flex-col @container [&_label.block>span]:font-medium',
          className
        )}
      >
        <div className="items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
          <div className="flex-grow @5xl:col-span-8 @5xl:pb-10 @6xl:col-span-7">
            <div className="flex flex-col gap-4 @xs:gap-7 @5xl:gap-9">
              <AddressInfo type="billingAddress" title="Billing Information" />

              <DifferentBillingAddress />

              {!sameShippingAddress && <AddressInfo type="shippingAddress" />}

              <OrderNote />
            </div>
          </div>

          <div className="pb-7 pt-10 @container @5xl:col-span-4 @5xl:py-0 @6xl:col-span-3">
            <CustomerInfo />
            <OrderSummery isLoading={isLoading} className="static" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
