'use client';

import { useAtom } from 'jotai';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AdvancedRadio, RadioGroup } from '@/components/ui/advanced-radio';
import {
  formDataAtom,
  useStepperOne,
} from '@/app/shared/multi-step/multi-step-1';
import FormSummary from '@/app/shared/multi-step/multi-step-1/form-summary';
import UserFamilyColorIcon from '@/components/icons/user-family-color';
import QuantityInput from '@/app/shared/multi-step/quantity-input';
import UsersColorIcon from '@/components/icons/users-color';
import UserColorIcon from '@/components/icons/user-color';
import { FieldError } from '@/components/ui/field-error';
import { Radio } from '@/components/ui/radio';
import { Text } from '@/components/ui/text';
import {
  FormStep5Schema,
  formStep5Schema,
} from '@/utils/validators/multistep-form.schema';

const places: {
  value: string;
  name: string;
  icon: React.ReactNode;
}[] = [
  {
    value: '1',
    name: 'Me',
    icon: <UserColorIcon className="h-full w-full" />,
  },
  {
    value: '2',
    name: 'My Family',
    icon: <UserFamilyColorIcon className="h-full w-full" />,
  },
  {
    value: '3',
    name: 'Other Guests',
    icon: <UsersColorIcon className="h-full w-full" />,
  },
];

export default function StepFive() {
  const { step, gotoNextStep } = useStepperOne();
  const [formData, setFormData] = useAtom(formDataAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStep5Schema>({
    resolver: zodResolver(formStep5Schema),
    defaultValues: {
      guests: formData.guests,
      bedrooms: formData.bedrooms,
      beds: formData.beds,
      guestType: formData.guestType,
      bedroomLock: formData.bedroomLock,
    },
  });

  const onSubmit: SubmitHandler<FormStep5Schema> = (data) => {
    console.log('data', data);
    setFormData((prev) => ({
      ...prev,
      guests: data.guests,
      bedrooms: data.bedrooms,
      beds: data.beds,
      bedroomLock: data.bedroomLock,
      guestType: data.guestType,
    }));
    gotoNextStep();
  };

  return (
    <>
      <div className="col-span-full flex flex-col justify-center @5xl:col-span-5">
        <FormSummary
          title="Let's start with the basics!"
          description="Your preferences, needs, and unique qualities matter to us, and we're excited to create an experience that's tailored just for you."
        />
      </div>

      <div className="col-span-full flex items-center justify-center @5xl:col-span-7">
        <form
          id={`rhf-${step.toString()}`}
          onSubmit={handleSubmit(onSubmit)}
          className="grid flex-grow gap-6 rounded-lg bg-white p-5 @4xl:p-7 dark:bg-gray-0"
        >
          <>
            <Controller
              name="guests"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-2.5">
                  <span>Guests</span>
                  <QuantityInput defaultValue={value} onChange={onChange} />
                </div>
              )}
            />
            <Controller
              name="bedrooms"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-2.5">
                  <span>Bedrooms</span>
                  <QuantityInput defaultValue={value} onChange={onChange} />
                </div>
              )}
            />
            <Controller
              name="beds"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex items-center justify-between rounded-md border border-gray-200 px-4 py-2.5">
                  <span>Beds</span>
                  <QuantityInput defaultValue={value} onChange={onChange} />
                </div>
              )}
            />
            <div className="grid gap-4">
              <Text className="font-semibold text-gray-900">
                Does every bedroom should have a lock?
              </Text>
              <Controller
                name="bedroomLock"
                control={control}
                render={({ field: { value, onChange } }) => {
                  console.log('value', value);
                  return (
                    <RadioGroup
                      value={value}
                      setValue={onChange}
                      className="flex gap-4"
                    >
                      <Radio label="Yes" value="yes" name="yes" />
                      <Radio label="No" value="no" name="no" />
                    </RadioGroup>
                  );
                }}
              />
              {errors.bedroomLock && (
                <FieldError error={errors.bedroomLock?.message} />
              )}
            </div>
            <div className="grid gap-4">
              <Text className="font-semibold text-gray-900">
                Who else might be there?
              </Text>
              <Controller
                name="guestType"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <RadioGroup
                    value={value}
                    setValue={onChange}
                    className="col-span-full grid gap-4 @3xl:grid-cols-3 @4xl:gap-6"
                  >
                    {places.map((place) => (
                      <AdvancedRadio
                        key={place.value}
                        value={place.value}
                        className="grid gap-3 rounded-xl border border-gray-200 p-6 text-gray-600 hover:cursor-pointer hover:border-gray-700"
                        inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-gray-700 [&:checked:enabled~span]:border-gray-700"
                      >
                        <span className="block h-8 w-8">{place.icon}</span>
                        <p className="font-semibold">{place.name}</p>
                      </AdvancedRadio>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors.guestType && (
                <FieldError error={errors.guestType?.message} />
              )}
            </div>
          </>
        </form>
      </div>
    </>
  );
}
