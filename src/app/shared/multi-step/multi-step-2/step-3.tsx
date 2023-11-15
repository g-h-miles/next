'use client';

import { z } from 'zod';
import { useAtomValue } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import FormPart from '@/app/shared/multi-step/form-part';
import { useStepperTwo } from '@/app/shared/multi-step/multi-step-2';
import SizeAndPricing, {
  sizeAndPricingSchema,
  sizeAndPricingValues,
} from '@/app/shared/multi-step/size-pricing';
import Footer from '@/app/multi-step/form-two/footer';

const formStoreAtom = atomWithStorage(
  'multiStepFormOneStore',
  sizeAndPricingValues
);

const FormSchema = sizeAndPricingSchema;

type FormSchemaType = z.infer<typeof FormSchema>;

export default function StepThree() {
  const { gotoNextStep } = useStepperTwo();
  const store = useAtomValue(formStoreAtom);

  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // propertySize: store.propertySize,
      // pricePerSft: store.pricePerSft,
      // totalPrice: store.totalPrice,
      pricingType: store.pricingType,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
    gotoNextStep();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormPart
          title="Property Size and Pricing"
          description="You only need to provide this information once, during your first listing."
        >
          <SizeAndPricing />
        </FormPart>

        <Footer />
      </form>
    </FormProvider>
  );
}
