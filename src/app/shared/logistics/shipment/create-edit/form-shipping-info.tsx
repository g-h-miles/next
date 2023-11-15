import { Controller, useFormContext } from 'react-hook-form';
import FormGroup from '@/app/shared/form-group';
import Select from '@/components/ui/select';
import NoSSR from '@/components/no-ssr';
import FileInput from './file-input';
import {
  offices,
  agencies,
  countries,
  deliveryTimes,
  packagingTypes,
  shippingMethods,
  courierCompanies,
} from '@/app/shared/logistics/shipment/create-edit/select-options';
import UploadZone from '@/components/ui/file-upload/upload-zone';

export default function FormShippingInfo() {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  return (
    <FormGroup
      title="Shipping Info"
      description="Add necessary shipping information here"
    >
      <NoSSR>
        <Controller
          control={control}
          name="country"
          render={({ field: { value, onChange } }) => (
            <Select
              label="Country Name"
              className="col-span-full"
              labelClassName="text-gray-900"
              dropdownClassName="p-2 gap-1 grid"
              value={value}
              onChange={onChange}
              options={countries}
              getOptionValue={(option) => option.value}
              displayValue={(selected: string) =>
                countries?.find((c) => c.value === selected)?.name ?? ''
              }
              error={errors?.country?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name="agency"
          render={({ field: { value, onChange } }) => (
            <Select
              label="Agency List"
              labelClassName="text-gray-900"
              dropdownClassName="p-2 gap-1 grid"
              value={value}
              onChange={onChange}
              options={agencies}
              getOptionValue={(option) => option.value}
              displayValue={(selected: string) =>
                agencies?.find((c) => c.value === selected)?.name
              }
              error={errors?.agency?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name="officeOrigin"
          render={({ field: { value, onChange } }) => (
            <Select
              label="Office Origin"
              labelClassName="text-gray-900"
              dropdownClassName="p-2 gap-1 grid"
              value={value}
              onChange={onChange}
              options={offices}
              getOptionValue={(option) => option.value}
              displayValue={(selected: string) =>
                offices?.find((c) => c.value === selected)?.name ?? ''
              }
              error={errors?.officeOrigin?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name="shippingMethod"
          render={({ field: { value, onChange } }) => (
            <Select
              label="Shipping Method"
              dropdownClassName="p-2 gap-1 grid"
              value={value}
              onChange={onChange}
              options={shippingMethods}
              getOptionValue={(option) => option.value}
              displayValue={(selected: string) =>
                shippingMethods?.find((c) => c.value === selected)?.name ??
                selected
              }
              error={errors?.officeOrigin?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name="packagingType"
          render={({ field: { value, onChange } }) => (
            <Select
              label="Packaging Type"
              labelClassName="text-gray-900"
              dropdownClassName="p-2 gap-1 grid"
              value={value}
              onChange={onChange}
              options={packagingTypes}
              getOptionValue={(option) => option.value}
              displayValue={(selected: string) =>
                packagingTypes?.find((c) => c.value === selected)?.name ?? ''
              }
              error={errors?.officeOrigin?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name="courierCompany"
          render={({ field: { value, onChange } }) => (
            <Select
              label="Courier Company"
              labelClassName="text-gray-900"
              dropdownClassName="p-2 gap-1 grid"
              value={value}
              onChange={onChange}
              options={courierCompanies}
              getOptionValue={(option) => option.value}
              displayValue={(selected: string) =>
                courierCompanies?.find((c) => c.value === selected)?.name ?? ''
              }
              error={errors?.officeOrigin?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name="deliveryTime"
          render={({ field: { value, onChange } }) => (
            <Select
              label="Delivery Time"
              labelClassName="text-gray-900"
              dropdownClassName="p-2 gap-1 grid"
              value={value}
              onChange={onChange}
              options={deliveryTimes}
              getOptionValue={(option) => option.value}
              displayValue={(selected: string) =>
                deliveryTimes?.find((c) => c.value === selected)?.name ?? ''
              }
              error={errors?.officeOrigin?.message as string}
            />
          )}
        />
      </NoSSR>
      <UploadZone
        name="shippingInfoAttachment"
        className="col-span-full"
        getValues={getValues}
        setValue={setValue}
        error={errors?.shippingInfoAttachment?.message as string}
      />
    </FormGroup>
  );
}
