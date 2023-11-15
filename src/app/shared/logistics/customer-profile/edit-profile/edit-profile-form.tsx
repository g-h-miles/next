import { useState } from 'react';
import toast from 'react-hot-toast';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Title } from '@/components/ui/text';
import { Form } from '@/components/ui/form';
import Select from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Password } from '@/components/ui/password';
import { regions, customerStatus, customerSources } from './data';
import { countries } from '@/app/shared/logistics/shipment/create-edit/select-options';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiX } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import AvatarUpload from '@/components/ui/file-upload/avatar-upload';
import UploadZone from '@/components/ui/file-upload/upload-zone';
import {
  customerProfileSchema,
  CustomerProfileSchema,
} from '@/utils/validators/customer-profile.schema';

interface EditProfileFormProps {
  className?: string;
}

const initialValues = {
  avatar: undefined,
  coverPhoto: undefined,
  fullName: '',
  email: '',
  phone: '',
  password: '',
  company: '',
  region: '',
  country: '',
  city: '',
  street: '',
  status: '',
  customerSource: '',
};

export default function EditProfileForm({ className }: EditProfileFormProps) {
  const [reset, setReset] = useState({});
  const { closeModal } = useModal();
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CustomerProfileSchema> = (data) => {
    // set timeout ony required to display loading state of the create product button
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('editProfile', data);
      setReset(initialValues);
      toast.success('Profile updated successfully');
    }, 600);
  };

  return (
    <div className="w-[1100px] max-w-full rounded-md p-6">
      <div className="flex items-center justify-between">
        <Title as="h3">Edit Profile</Title>
        <ActionIcon variant="text" onClick={() => closeModal()}>
          <PiX className="h-5 w-5" />
        </ActionIcon>
      </div>

      <Form<CustomerProfileSchema>
        onSubmit={onSubmit}
        resetValues={reset}
        validationSchema={customerProfileSchema}
        useFormProps={{
          defaultValues: initialValues,
        }}
        className="mt-7 grid gap-4 md:grid-cols-2 md:gap-7"
      >
        {({
          register,
          control,
          setValue,
          getValues,
          formState: { errors },
        }) => {
          console.log('errors', errors);
          return (
            <>
              <AvatarUpload
                name="avatar"
                setValue={setValue}
                getValues={getValues}
                className="col-span-full"
              />
              <UploadZone
                label="Cover Photo"
                name="coverPhoto"
                setValue={setValue}
                getValues={getValues}
                className="col-span-full"
              />
              <Input
                label="Full Name *"
                placeholder="Enter your full name..."
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('fullName')}
                error={errors.fullName?.message}
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('email')}
                error={errors.email?.message}
              />
              <Password
                label="Password"
                placeholder="Enter your password"
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('password')}
                error={errors.password?.message}
              />
              <Input
                label="Company Name"
                placeholder="Enter your company name..."
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('company')}
                error={errors.company?.message}
              />
              <Input
                label="Phone "
                placeholder="Enter your phone number..."
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('phone')}
                error={errors.phone?.message}
              />
              <Controller
                control={control}
                name="region"
                render={({ field: { value, onChange } }) => (
                  <Select
                    label="Office Origin"
                    labelClassName="font-medium text-gray-900 dark:text-white"
                    dropdownClassName="p-2 gap-1 grid"
                    value={value}
                    onChange={onChange}
                    options={regions}
                    getOptionValue={(option) => option.value}
                    displayValue={(selected: string) =>
                      regions?.find((c) => c.value === selected)?.name ?? ''
                    }
                    error={errors?.region?.message as string}
                  />
                )}
              />
              <Controller
                control={control}
                name="country"
                render={({ field: { value, onChange } }) => (
                  <Select
                    label="Country Name"
                    labelClassName="font-medium text-gray-900 dark:text-white"
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
                name="status"
                render={({ field: { value, onChange } }) => (
                  <Select
                    label="Customer Status"
                    labelClassName="font-medium text-gray-900 dark:text-white"
                    dropdownClassName="p-2 gap-1 grid"
                    value={value}
                    onChange={onChange}
                    options={customerStatus}
                    getOptionValue={(option) => option.value}
                    displayValue={(selected: string) =>
                      customerStatus?.find((c) => c.value === selected)?.name ??
                      ''
                    }
                    error={errors?.status?.message as string}
                  />
                )}
              />
              <Controller
                control={control}
                name="customerSource"
                render={({ field: { value, onChange } }) => (
                  <Select
                    label="Customer Source"
                    labelClassName="font-medium text-gray-900 dark:text-white"
                    dropdownClassName="p-2 gap-1 grid"
                    value={value}
                    onChange={onChange}
                    options={customerSources}
                    getOptionValue={(option) => option.value}
                    displayValue={(selected: string) =>
                      customerSources?.find((c) => c.value === selected)
                        ?.name ?? ''
                    }
                    error={errors?.customerSource?.message as string}
                  />
                )}
              />
              <Input
                label="City"
                placeholder="Enter your city"
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('city')}
                error={errors.city?.message}
              />
              <Input
                label="Street"
                placeholder="Enter your street address"
                className="col-span-full"
                labelClassName="font-medium text-gray-900 dark:text-white"
                {...register('street')}
                error={errors.street?.message}
              />
              <div className="col-span-full mt-2 flex items-center justify-end">
                <Button
                  type="submit"
                  className="dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
                  isLoading={isLoading}
                >
                  Update Profile
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}
