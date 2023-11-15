'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Controller, SubmitHandler } from 'react-hook-form';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Text, Title } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import SelectBox from '@/components/ui/select';
import {
  AddTeamMemberInput,
  addTeamMemberSchema,
} from '@/utils/validators/team-member.schema';

const role = [
  {
    name: 'Product Designer',
    value: 'product_designer',
  },
  {
    name: 'Software Engineer',
    value: 'software_engineer',
  },
];

const countries = [
  {
    name: 'United States',
    value: 'usa',
  },
  {
    name: 'Bangladesh',
    value: 'bd',
  },
];

const teams = [
  {
    name: 'Design',
    value: 'design',
  },
  {
    name: 'Human Resource',
    value: 'human_resource',
  },
  {
    name: 'Operations',
    value: 'operations',
  },
  {
    name: 'Finance',
    value: 'finance',
  },
  {
    name: 'Product',
    value: 'product',
  },
];

export default function AddTeamMemberModalView() {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<AddTeamMemberInput> = (data) => {
    toast.success(
      <Text as="b" className="font-semibold">
        Team member successfully added!
      </Text>
    );
    // set timeout ony required to display loading state of the create product button
    setLoading(true);
    closeModal();
    setTimeout(() => {
      setLoading(false);
      console.log(' data ->', data);
      setReset({
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        country: '',
      });
    }, 600);
  };

  return (
    <div className="m-auto p-6">
      <Title as="h3" className="mb-6 text-lg">
        Add New Member
      </Title>
      <Form<AddTeamMemberInput>
        validationSchema={addTeamMemberSchema}
        resetValues={reset}
        onSubmit={onSubmit}
      >
        {({ register, control, formState: { errors } }) => (
          <>
            <MemberForm control={control} register={register} errors={errors} />
            <div className="mt-8 flex justify-end gap-3">
              <Button
                className="w-auto"
                variant="outline"
                onClick={() => closeModal()}
              >
                Cancel
              </Button>
              <Button type="submit" isLoading={isLoading} className="w-auto">
                Add Member
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}

export function MemberForm({ register, control, errors }: any) {
  return (
    <div className="flex flex-col gap-4 text-gray-700">
      <div className="flex flex-col gap-4 xs:flex-row xs:items-center">
        <Input
          type="text"
          label="First Name"
          placeholder="John"
          labelClassName="text-sm font-medium text-gray-900"
          {...register('first_name')}
          error={errors?.first_name?.message}
          className="flex-grow"
        />
        <Input
          type="text"
          label="Last Name"
          placeholder="Doe"
          labelClassName="text-sm font-medium text-gray-900"
          {...register('last_name')}
          error={errors?.last_name?.message}
          className="flex-grow"
        />
      </div>
      <Input
        type="email"
        label="Email"
        labelClassName="text-sm font-medium text-gray-900"
        placeholder="john@doe.io"
        {...register('email')}
        error={errors.email?.message}
      />
      <Controller
        control={control}
        name="role"
        render={({ field: { value, onChange } }) => (
          <SelectBox
            label="Role"
            labelClassName="text-sm font-medium text-gray-900"
            // @ts-ignore
            placeholder={role[0].name}
            options={role}
            onChange={onChange}
            value={value}
            getOptionValue={(option) => option.value}
            displayValue={(selected) =>
              role?.find((r) => r.value === selected)?.name ?? ''
            }
            error={errors?.role?.message as string}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field: { onChange, value } }) => (
          <SelectBox
            label="Country"
            labelClassName="text-sm font-medium text-gray-900"
            // @ts-ignore
            placeholder={countries[0].name}
            options={countries}
            onChange={onChange}
            value={value}
            getOptionValue={(option) => option.value}
            displayValue={(selected) =>
              countries?.find((con) => con.value === selected)?.name ?? ''
            }
            error={errors?.country?.message as string}
          />
        )}
      />
      <Controller
        control={control}
        name="teams"
        render={({ field: { value, onChange } }) => (
          <SelectBox
            label="Assign to Team"
            labelClassName="text-sm font-medium text-gray-900"
            placeholder="Select a team"
            options={teams}
            onChange={onChange}
            value={value}
            getOptionValue={(option) => option.value}
            displayValue={(selected) =>
              teams?.find((t) => t.value === selected)?.name ?? ''
            }
            error={errors?.teams?.message as string}
          />
        )}
      />
    </div>
  );
}
