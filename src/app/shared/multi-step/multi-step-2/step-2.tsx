'use client';

import { z } from 'zod';
import { useAtomValue } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import FormPart from '@/app/shared/multi-step/form-part';
import BasicInfo, {
  BasicInfoSchema,
  basicInfoValues,
} from '@/app/shared/multi-step/basic-info';
import UploadPhoto from '@/app/shared/multi-step/upload-photo';
import AccommodationInfo, {
  AccommodationSchema,
  accommodationValues,
} from '@/app/shared/multi-step/accommodation-info';
import { useStepperOne } from '@/app/shared/multi-step/multi-step-1';
import Footer from '@/app/multi-step/form-two/footer';

const formStoreAtom = atomWithStorage('multiStepFormOneStore', {
  ...basicInfoValues,
  ...accommodationValues,
});

const FormSchema = AccommodationSchema.merge(BasicInfoSchema);

export type FormSchemaType = z.infer<typeof FormSchema>;

export default function StepTwo() {
  const { gotoNextStep } = useStepperOne();
  const store = useAtomValue(formStoreAtom);

  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      propertyFor: store.propertyFor,
      propertyName: store.propertyName,
      propertyType: store.propertyType,
      constructionStatus: store.constructionStatus,
      city: store.city,
      address: store.address,
      productDescription: store.productDescription,
      bedRooms: store.bedRooms,
      bathRooms: store.bathRooms,
      guests: store.guests,
      gallery: store.gallery,
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
    gotoNextStep();
  };

  // console.log('errors', methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid gap-16 md:gap-20">
          <FormPart
            title="Basic Information"
            description="You only need to provide this information once, during your first listing."
          >
            <BasicInfo />
          </FormPart>
          <FormPart
            title="Accommodation Information"
            description="You only need to provide this information once, during your first listing."
          >
            <AccommodationInfo />
          </FormPart>
          <FormPart
            title="Add Some Photo"
            description="You only need to provide this information once, during your first listing."
          >
            <UploadPhoto />
          </FormPart>
        </div>

        <Footer />
      </form>
    </FormProvider>
  );
}
