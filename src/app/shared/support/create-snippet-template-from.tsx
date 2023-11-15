'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Title } from '@/components/ui/text';
import { Form } from '@/components/ui/form';
import Select from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ActionIcon } from '@/components/ui/action-icon';
import { useModal } from '@/app/shared/modal-views/use-modal';
import cn from '@/utils/class-names';
import { Input } from '@/components/ui/input';
import dynamic from 'next/dynamic';
import {
  folders,
  SnippetType,
  snippetsAndTemplates,
} from '@/data/snippets-and-templates';
import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';
import Spinner from '@/components/ui/spinner';
import {
  CreateSnippetInput,
  createSnippetSchema,
} from '@/utils/validators/create-snippet.schema';
import {
  CreateTemplateInput,
  createTemplateSchema,
} from '@/utils/validators/create-template.schema';

const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => (
    <div className="grid h-[111px] place-content-center">
      <Spinner />
    </div>
  ),
});

interface EditProfileFormProps {
  data?: SnippetType;
  title: TitleType;
  className?: string;
  type?: 'Create' | 'Edit';
}

const initialValues = {
  name: '',
  folder: '',
  snippet: '',
};

type TitleType = 'template' | 'snippet';

type FormInputType = CreateSnippetInput | CreateTemplateInput;

function generateUID() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36
  const randomPart = Math.random().toString(36).substring(2, 7); // Generate a random string
  return timestamp + randomPart;
}

export default function CreateSnippetTemplateForm({
  data,
  type = 'Create',
  title,
  className,
}: EditProfileFormProps) {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const validationSchema =
    title === 'template' ? createTemplateSchema : createSnippetSchema;

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    // set timeout ony required to display loading state of the create product button
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(title, data);
      setReset(initialValues);
      toast.success(`${title} created successfully`);
      snippetsAndTemplates.unshift({
        id: generateUID(),
        name: data.name,
        avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
          avatarIds
        )}.png`,
        folder: data.folder,
        createdBy: getRandomArrayElement([
          'Gilberto Balistreri II',
          'Handcrafted Steel Computer',
          'Oriental Plastic Shoes',
          'Handcrafted Granite Gloves',
        ]) as string,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      closeModal();
    }, 600);
  };

  return (
    <div className={cn('max-w-full rounded-md p-6', className)}>
      <div className="flex items-center justify-between">
        <Title as="h4" className="font-semibold">
          {type} {title}
        </Title>
        <ActionIcon variant="text" onClick={() => closeModal()}>
          <PiXBold className="h-5 w-5" />
        </ActionIcon>
      </div>

      <Form<FormInputType>
        onSubmit={onSubmit}
        resetValues={reset}
        validationSchema={validationSchema}
        useFormProps={{
          defaultValues: {
            name: data?.name,
            folder: data?.folder,
          },
        }}
        className="mt-6 grid gap-6"
      >
        {({ register, control, formState: { errors } }) => {
          console.log('errors', errors);
          return (
            <>
              <Input
                label={`${title} Name`}
                placeholder={`Enter your ${title} name...`}
                labelClassName="font-medium text-gray-900 dark:text-white capitalize"
                {...register('name')}
                error={errors.name?.message}
              />
              <Controller
                control={control}
                name="folder"
                render={({ field: { value, onChange } }) => (
                  <Select
                    label="Folder"
                    labelClassName="font-medium text-gray-900 dark:text-white"
                    dropdownClassName="p-2 gap-1 grid"
                    value={value}
                    isRequired
                    onChange={onChange}
                    options={folders}
                    getOptionValue={(option) => option.value}
                    displayValue={(selected: string) =>
                      folders?.find((f) => f.value === selected)?.name ?? ''
                    }
                    error={errors?.folder?.message as string}
                  />
                )}
              />
              <Controller
                control={control}
                name={title}
                render={({ field: { onChange, value } }) => (
                  <QuillEditor
                    value={value}
                    onChange={onChange}
                    label={`${title} Details`}
                    error={errors?.[title]?.message as string}
                    className="[&>.ql-container_.ql-editor]:min-h-[100px]"
                    labelClassName="font-medium text-gray-900 dark:text-white capitalize"
                  />
                )}
              />
              <div className="col-span-full mt-2 flex items-center justify-end">
                <Button
                  type="submit"
                  className="capitalize"
                  isLoading={isLoading}
                >
                  {type} {title}
                </Button>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}
