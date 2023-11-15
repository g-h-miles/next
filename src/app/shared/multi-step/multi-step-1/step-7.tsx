'use client';

import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import FormSummary from '@/app/shared/multi-step/multi-step-1/form-summary';
import RangeSlider, { RangeSliderProps } from '@/components/ui/range-slider';
import { Tooltip } from '@/components/ui/tooltip';
import { toCurrency } from '@/utils/to-currency';
import Spinner from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import {
  formDataAtom,
  useStepperOne,
} from '@/app/shared/multi-step/multi-step-1';
import {
  formStep7Schema,
  FormStep7Schema,
} from '@/utils/validators/multistep-form.schema';
import UploadZone from '@/components/ui/file-upload/upload-zone';

const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => (
    <div className="grid h-[169px] place-content-center">
      <Spinner />
    </div>
  ),
});

export default function StepTwo() {
  const { step, gotoNextStep } = useStepperOne();
  const [formData, setFormData] = useAtom(formDataAtom);

  const {
    register,
    control,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<FormStep7Schema>({
    resolver: zodResolver(formStep7Schema),
    defaultValues: {
      propertyName: formData.propertyName,
      propertyDescription: formData.propertyDescription,
      priceRange: formData.priceRange,
      photos: formData.photos,
    },
  });

  const onSubmit: SubmitHandler<FormStep7Schema> = (data) => {
    console.log('data', data);
    setFormData((prev) => ({
      ...prev,
      propertyName: data.propertyName,
      propertyDescription: data.propertyDescription,
      priceRange: data.priceRange,
      photos: data.photos,
    }));
    console.log('formData', formData);
    gotoNextStep();
  };

  return (
    <>
      <div className="col-span-full flex flex-col justify-center @5xl:col-span-5">
        <FormSummary
          title="Unveiling the Essence: Explore Captivating Property Details"
          description="Your property is more than just walls and spaces – it's a canvas of memories waiting to be painted. Sharing the intricate details with us helps craft a captivating listing."
        />
      </div>

      <div className="col-span-full flex items-center justify-center @5xl:col-span-7">
        <form
          id={`rhf-${step.toString()}`}
          onSubmit={handleSubmit(onSubmit)}
          className="grid flex-grow gap-6 rounded-lg bg-white p-5 @4xl:p-7 dark:bg-gray-0"
        >
          <>
            <Input
              label="Property Title"
              labelClassName="font-semibold text-gray-900"
              placeholder="Add a good title for your property..."
              {...register('propertyName')}
              error={errors.propertyName?.message}
            />
            <Controller
              control={control}
              name="propertyDescription"
              render={({ field: { onChange, value } }) => (
                <QuillEditor
                  value={value}
                  labelClassName="font-semibold text-gray-900"
                  label="Property Description"
                  onChange={onChange}
                  className="[&_.ql-editor]:min-h-[100px]"
                />
              )}
            />

            <div className="grid gap-4">
              <Text className="font-semibold text-gray-900">Price Range</Text>
              <Controller
                control={control}
                name="priceRange"
                render={({ field: { value, onChange } }) => (
                  <RangeSliderWithTooltip
                    range
                    min={0}
                    max={10000}
                    value={value}
                    size="lg"
                    defaultValue={[2000, 6000]}
                    onChange={onChange}
                  />
                )}
              />
            </div>

            <UploadZone
              name="photos"
              label="Upload Property Photo"
              getValues={getValues}
              setValue={setValue}
            />
          </>
        </form>
      </div>
    </>
  );
}

const RangeSliderWithTooltip = ({
  ...props
}: RangeSliderProps & {
  tipFormatter?: (value: number) => React.ReactNode;
}) => {
  const tipHandleRender: RangeSliderProps['handleRender'] = (
    node,
    handleProps
  ) => {
    return (
      <Tooltip
        content={() => toCurrency(handleProps.value, true)}
        placement="top"
      >
        {node}
      </Tooltip>
    );
  };

  return <RangeSlider {...props} handleRender={tipHandleRender} />;
};
