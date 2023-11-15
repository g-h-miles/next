import { Controller } from 'react-hook-form';
import { Title } from '@/components/ui/text';
import { Radio } from '@/components/ui/radio';
import { Input } from '@/components/ui/input';
import { PhoneNumber } from '@/components/ui/phone-input';

export default function BillingForm({ register, errors, control }: any) {
  return (
    <>
      <Title as="h3" className="mb-3 font-semibold @2xl:mb-5">
        Billing Information
      </Title>
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-2 @lg:gap-4 @2xl:gap-5">
        <Input
          label="First Name"
          placeholder="first name"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          placeholder="last name"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { value, onChange } }) => (
            <PhoneNumber
              label="Phone Number"
              country="us"
              value={value}
              onChange={onChange}
              className="rtl:[&>.selected-flag]:right-0"
              inputClassName="rtl:pr-12"
              buttonClassName="rtl:[&>.selected-flag]:right-2 rtl:[&>.selected-flag_.arrow]:-left-6"
            />
          )}
        />
        <Input
          label="Company Name"
          placeholder="company name"
          {...register('companyName')}
          error={errors.companyName?.message}
        />
        <Input
          label="Address Line 1"
          placeholder="address line 1"
          {...register('addressOne')}
          error={errors.addressOne?.message}
        />
        <Input
          label="Address Line 2"
          placeholder="address line 2"
          {...register('addressTwo')}
          error={errors.addressTwo?.message}
        />
        <Input
          label="City"
          placeholder="city"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          label="Country"
          placeholder="country"
          {...register('country')}
          error={errors.country?.message}
        />
        <Input
          label="Zip/Postcode"
          placeholder="zip/postcode"
          {...register('zip')}
          error={errors.zip?.message}
        />
        <Input
          label="State"
          placeholder="state"
          {...register('state')}
          error={errors.state?.message}
        />
        <div className="flex flex-col space-y-5 pt-1 @sm:col-span-full">
          <Radio
            label="Shipping Address is the same as Billing Address"
            value="SameShippingAddress"
            {...register('isSameShippingAddress')}
            inputClassName="dark:checked:!bg-gray-200 dark:checked:!border-gray-200 dark:focus:ring-gray-200 dark:focus:ring-offset-gray-0"
          />
          <Radio
            label="Different Shipping Address"
            value="DifferentShippingAddress"
            {...register('isSameShippingAddress')}
            inputClassName="dark:checked:!bg-gray-200 dark:checked:!border-gray-200 dark:focus:ring-gray-200 dark:focus:ring-offset-gray-0"
          />
        </div>
      </div>
    </>
  );
}
