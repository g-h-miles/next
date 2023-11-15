'use client';

import { useState } from 'react';
import { PiCheckBold, PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { permissions, roles } from '@/app/shared/roles-permissions/utils';
import { AdvancedCheckbox } from '@/components/ui/advanced-checkbox';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { ActionIcon } from '@/components/ui/action-icon';
import { Button } from '@/components/ui/button';
import { PERMISSIONS } from '@/data/users-data';
import { Title } from '@/components/ui/text';
import { Form } from '@/components/ui/form';
import cn from '@/utils/class-names';
import {
  RolePermissionInput,
  rolePermissionSchema,
} from '@/utils/validators/edit-role.schema';

export default function EditRole() {
  const { closeModal } = useModal();
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<RolePermissionInput> = (data) => {
    // set timeout ony required to display loading state of the create category button
    setLoading(true);
    setTimeout(() => {
      console.log('data', data);
      setLoading(false);
      closeModal();
    }, 600);
  };

  return (
    <Form<RolePermissionInput>
      // resetValues={reset}
      onSubmit={onSubmit}
      validationSchema={rolePermissionSchema}
      useFormProps={{
        defaultValues: {
          administrator: [PERMISSIONS.Read],
          manager: [PERMISSIONS.Write],
          sales: [PERMISSIONS.Delete],
          support: [PERMISSIONS.Read],
          developer: [PERMISSIONS.Write],
          hrd: [PERMISSIONS.Delete],
          restricteduser: [PERMISSIONS.Write],
          customer: [PERMISSIONS.Read],
        },
      }}
      className="grid grid-cols-1 gap-6 p-6  @container [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
    >
      {({ register, control, watch, formState: { errors } }) => {
        console.log('errors', errors);

        return (
          <>
            <div className="col-span-full flex items-center justify-between">
              <Title as="h4" className="font-semibold">
                Edit Role
              </Title>
              <ActionIcon size="sm" variant="text" onClick={closeModal}>
                <PiXBold className="h-auto w-5" />
              </ActionIcon>
            </div>
            {/* <Input
              label="Full Name"
              placeholder="Enter user's full name"
              {...register('fullName')}
              className="col-span-full"
              error={errors.fullName?.message}
            /> */}
            <div className="grid gap-4 divide-y divide-y-reverse divide-gray-200">
              <Title as="h5" className="mb-2 text-base font-semibold">
                Role Access
              </Title>
              {roles.map(({ name, value }) => {
                const parent = value.toLowerCase();
                return (
                  <div
                    key={value}
                    className="flex flex-col gap-3 pb-4 md:flex-row md:items-center md:justify-between"
                  >
                    <Title
                      as="h6"
                      className="font-medium text-gray-700 2xl:text-sm"
                    >
                      {name}
                    </Title>
                    <Controller
                      // @ts-ignore
                      name={value.toLowerCase()}
                      control={control}
                      render={({ field: { name, onChange, value } }) => (
                        <CheckboxGroup
                          values={value as string[]}
                          setValues={onChange}
                          className="grid grid-cols-3 gap-4 md:flex"
                        >
                          {permissions.map(({ value, name }) => (
                            <AdvancedCheckbox
                              key={value}
                              name={`${parent}.${value.toLowerCase()}`}
                              value={value}
                              className={cn(
                                'flex h-9 w-[70px] cursor-pointer items-center justify-center gap-1 rounded-md border border-gray-200 md:w-32 md:gap-2'
                              )}
                              inputClassName="[&:checked~span>.icon]:block [&:checked~span]:ring-1 dark:[&:checked~span]:ring-gray-300 [&:checked~span]:ring-offset-0 [&:checked~span]:bg-gray-800 dark:[&:checked~span]:bg-gray-300 [&:checked~span]:!border-gray-800 dark:[&:checked~span]:!border-gray-300 [&:checked~span]:text-white "
                            >
                              <PiCheckBold className="icon hidden h-[14px] w-[14px] md:h-4 md:w-4" />
                              <span className="font-medium">{name}</span>
                            </AdvancedCheckbox>
                          ))}
                        </CheckboxGroup>
                      )}
                    />
                  </div>
                );
              })}
            </div>

            <div className="col-span-full flex items-center justify-end gap-4">
              <Button
                variant="outline"
                onClick={closeModal}
                className="w-full @xl:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full @xl:w-auto dark:bg-gray-200 dark:text-white dark:active:enabled:bg-gray-300"
              >
                Save
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
