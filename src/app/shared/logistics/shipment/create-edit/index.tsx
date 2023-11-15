'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Element } from 'react-scroll';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import FormFooter from '@/components/form-footer';
import FormSenderInfo from '@/app/shared/logistics/shipment/create-edit/form-sender-info';
import FormPackageInfo from '@/app/shared/logistics/shipment/create-edit/form-package-info';
import FormShippingInfo from '@/app/shared/logistics/shipment/create-edit/form-shipping-info';
import FormRecipientInfo from '@/app/shared/logistics/shipment/create-edit/form-recipient-info';
import FormPaymentMethodInfo from '@/app/shared/logistics/shipment/create-edit/form-payment-method-info';
import FormNav, {
  FormParts,
} from '@/app/shared/logistics/shipment/create-edit/form-nav';
import { defaultValues } from '@/app/shared/logistics/shipment/create-edit/form-utils';
import cn from '@/utils/class-names';
import {
  shipmentFormSchema,
  CreateShipmentInput,
} from '@/utils/validators/create-shipping.schema';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';

const MAP_STEP_TO_COMPONENT = {
  [FormParts.ShippingInfo]: FormShippingInfo,
  [FormParts.SenderInfo]: FormSenderInfo,
  [FormParts.RecipientsInfo]: FormRecipientInfo,
  [FormParts.PaymentMethod]: FormPaymentMethodInfo,
  [FormParts.PackageInformation]: FormPackageInfo,
};

interface IndexProps {
  id?: string;
  className?: string;
  shipment?: CreateShipmentInput;
}

export default function CreateEditShipment({
  id,
  shipment,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues: defaultValues(shipment),
    resolver: zodResolver(shipmentFormSchema),
  });

  const onSubmit: SubmitHandler<CreateShipmentInput> = (data) => {
    // set timeout ony required to display loading state of the create product button
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('create_shipping_data', data);
      toast.success('Shipment Created Successfully');
      methods.reset();
    }, 600);
  };

  console.log('errors', methods.formState.errors);

  return (
    <div className="@container">
      <FormNav
        className={cn(layout === LAYOUT_OPTIONS.BERYLLIUM && '2xl:top-[72px]')}
      />
      <FormProvider {...methods}>
        <form
          className={cn('mt-6', className)}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
            {Object.entries(MAP_STEP_TO_COMPONENT).map(([key, Component]) => (
              <Element
                key={key}
                name={FormParts[key as keyof typeof FormParts]}
              >
                <Component className="pt-7 @2xl:pt-9 @3xl:pt-11" />
              </Element>
            ))}
          </div>
          <FormFooter
            isLoading={isLoading}
            submitBtnText={id ? 'Update Shipment' : 'Create Shipment'}
          />
        </form>
      </FormProvider>
    </div>
  );
}
