'use client';

import { useState } from 'react';
import { PiChecksBold, PiFilesBold, PiXBold } from 'react-icons/pi';
import { RgbaColorPicker } from 'react-colorful';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { ActionIcon } from '@/components/ui/action-icon';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import {
  CreateRoleInput,
  createRoleSchema,
} from '@/utils/validators/create-role.schema';
import { Title } from '@/components/ui/text';
import { useModal } from '@/app/shared/modal-views/use-modal';

// main category form component for create and update category
export default function CreateRole() {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [state, copyToClipboard] = useCopyToClipboard();

  console.log('state', state);

  const onSubmit: SubmitHandler<CreateRoleInput> = (data) => {
    // set timeout ony required to display loading state of the create category button
    setLoading(true);
    setTimeout(() => {
      console.log('data', data);
      setLoading(false);
      setReset({
        roleName: '',
        roleColor: '',
      });
      closeModal();
    }, 600);
  };

  const handleCopyToClipboard = (rgba: string) => {
    copyToClipboard(rgba);

    setIsCopied(() => true);
    setTimeout(() => {
      setIsCopied(() => false);
    }, 3000); // 3 seconds
  };

  return (
    <Form<CreateRoleInput>
      // resetValues={reset}
      onSubmit={onSubmit}
      validationSchema={createRoleSchema}
      className="flex flex-grow flex-col gap-6 p-6 @container [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
    >
      {({ register, control, watch, formState: { errors } }) => {
        console.log('errors', errors);
        const getColor = watch('roleColor');
        const colorCode = `rgba(${getColor?.r ?? 0}, ${getColor?.g ?? 0}, ${
          getColor?.b ?? 0
        }, ${getColor?.a ?? 0})`;
        return (
          <>
            <div className="flex items-center justify-between">
              <Title as="h4" className="font-semibold">
                Add a new Role
              </Title>
              <ActionIcon size="sm" variant="text" onClick={closeModal}>
                <PiXBold className="h-auto w-5" />
              </ActionIcon>
            </div>
            <Input
              label="Role Name"
              placeholder="Role name"
              {...register('roleName')}
              error={errors.roleName?.message}
            />
            <Input
              label="Role Color"
              placeholder="Role Color"
              readOnly
              // className="[&_.rizzui-input-container]:"
              inputClassName="hover:border-gray-200"
              suffix={
                <Tooltip
                  size="sm"
                  content={() =>
                    isCopied ? 'Copied to Clipboard' : 'Click to Copy'
                  }
                  placement="top"
                  className="z-[1000]"
                >
                  <ActionIcon
                    variant="text"
                    title="Click to Copy"
                    onClick={() => handleCopyToClipboard(colorCode)}
                    className="-mr-3"
                  >
                    {isCopied ? (
                      <PiChecksBold className="h-[18px] w-[18px]" />
                    ) : (
                      <PiFilesBold className="h-4 w-4" />
                    )}
                  </ActionIcon>
                </Tooltip>
              }
              value={colorCode}
            />
            <Controller
              control={control}
              name="roleColor"
              render={({ field: { onChange, value } }) => (
                <RgbaColorPicker color={value} onChange={onChange} />
              )}
            />

            <div className="flex items-center justify-end gap-4">
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
                className="w-full @xl:w-auto"
              >
                Create Role
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
