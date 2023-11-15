'use client';

import { z } from 'zod';
import { useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { toast } from 'react-hot-toast';
import { atomWithStorage } from 'jotai/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AdvancedRadio, RadioGroup } from '@/components/ui/advanced-radio';
import HouseIcon from '@/components/icons/house';
import ApartmentIcon from '@/components/icons/apartment';
import BarnIcon from '@/components/icons/barn';
import SkyscraperIcon from '@/components/icons/skyscraper';
import TentIcon from '@/components/icons/tent';
import CabinIcon from '@/components/icons/cabin';
import CastleIcon from '@/components/icons/castle';
import CaveIcon from '@/components/icons/cave';
import ContainerHouseIcon from '@/components/icons/container-house';
import MobileHomeIcon from '@/components/icons/mobile-home';
import HouseBoatIcon from '@/components/icons/house-boat';
import FarmHouseIcon from '@/components/icons/farm-house';
import FormSummary from '@/app/shared/multi-step/multi-step-1/form-summary';
import {
  formDataAtom,
  useStepperOne,
} from '@/app/shared/multi-step/multi-step-1';
import {
  PropertyTypeSchema,
  propertyTypeSchema,
} from '@/utils/validators/multistep-form.schema';

const properties: { name: string; label: string; icon: React.ReactNode }[] = [
  { name: 'house', label: 'House', icon: <HouseIcon /> },
  { name: 'apartment', label: 'Apartment', icon: <ApartmentIcon /> },
  { name: 'barn', label: 'Barn', icon: <BarnIcon /> },
  { name: 'tower', label: 'Tower', icon: <SkyscraperIcon /> },
  { name: 'tent', label: 'Tent', icon: <TentIcon /> },
  { name: 'cabin', label: 'Cabin', icon: <CabinIcon /> },
  { name: 'castle', label: 'Castle', icon: <CastleIcon /> },
  { name: 'cave', label: 'Cave', icon: <CaveIcon /> },
  { name: 'container', label: 'Container', icon: <ContainerHouseIcon /> },
  { name: 'mobile-home', label: 'Mobile Home', icon: <MobileHomeIcon /> },
  // { name: 'hotel', label: 'Hotel', icon: <HouseIcon /> },
  { name: 'house-boat', label: 'House Boat', icon: <HouseBoatIcon /> },
  // { name: 'tiny-home', label: 'Tiny Home', icon: <HouseIcon /> },
  // { name: 'tree-house', label: 'Tree House', icon: <HouseIcon /> },
  { name: 'farm-house', label: 'Farm House', icon: <FarmHouseIcon /> },
];

export default function StepTwo() {
  const { step, gotoNextStep } = useStepperOne();
  const [formData, setFormData] = useAtom(formDataAtom);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PropertyTypeSchema>({
    resolver: zodResolver(propertyTypeSchema),
    defaultValues: {
      propertyType: formData.propertyType,
    },
  });

  useEffect(() => {
    if (errors.propertyType) {
      toast.error(errors.propertyType.message as string);
    }
  }, [errors]);

  const onSubmit: SubmitHandler<PropertyTypeSchema> = (data) => {
    console.log('data', data);
    setFormData((prev) => ({
      ...prev,
      propertyType: data.propertyType,
    }));
    gotoNextStep();
  };

  return (
    <>
      <div className="col-span-full flex flex-col justify-center @5xl:col-span-5">
        <FormSummary
          className="@7xl:me-10"
          title="Which of these best describes your place?"
          description="Your property is unique and holds countless stories within its walls. We're eager to learn more about it so we can help you showcase its best features to potential buyers or tenants."
        />
      </div>

      <div className="col-span-full flex items-center justify-center @5xl:col-span-7">
        <form
          id={`rhf-${step.toString()}`}
          onSubmit={handleSubmit(onSubmit)}
          className="flex-grow rounded-lg bg-white p-5 @4xl:p-7 dark:bg-gray-0"
        >
          <>
            <Controller
              name="propertyType"
              control={control}
              render={({ field: { value, onChange } }) => (
                <RadioGroup
                  value={value}
                  setValue={onChange}
                  className="col-span-full grid grid-cols-2 gap-4 @3xl:grid-cols-3 @4xl:gap-6 @6xl:grid-cols-3"
                >
                  {properties.map((property) => (
                    <AdvancedRadio
                      key={property.name}
                      value={property.name}
                      className="grid gap-4 rounded-xl border border-gray-200 p-6 text-gray-600 hover:cursor-pointer hover:border-gray-700"
                      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-gray-700 [&:checked:enabled~span]:border-gray-700"
                    >
                      <span className="h-8 w-8">{property.icon}</span>
                      <span className="font-semibold">{property.label}</span>
                    </AdvancedRadio>
                  ))}
                </RadioGroup>
              )}
            />
          </>
        </form>
      </div>
    </>
  );
}
