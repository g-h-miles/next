'use client';

import Image from 'next/image';
import toast from 'react-hot-toast';
import { useCallback, useState } from 'react';
import type { FileWithPath } from '@uploadthing/react';
import { useDropzone } from '@uploadthing/react/hooks';
import {
  UploadFileResponse,
  generateClientDropzoneAccept,
} from 'uploadthing/client';
import { useUploadThing } from '@/utils/uploadthing';
import { Text } from '@/components/ui/text';
import cn from '@/utils/class-names';
import UploadIcon from '@/components/shape/upload';
import { Loader } from '@/components/ui/loader';
import { FieldError } from '@/components/ui/field-error';
import { PiPencilSimple } from 'react-icons/pi';
import { LoadingSpinner } from '@/components/ui/file-upload/upload-zone';

interface UploadZoneProps {
  name: string;
  getValues?: any;
  setValue?: any;
  className?: string;
  error?: string;
}

export default function AvatarUpload({
  name,
  error,
  className,
  getValues,
  setValue,
}: UploadZoneProps) {
  const [files, setFiles] = useState<File[]>([]);

  const formValue = getValues(name);

  const { startUpload, permittedFileInfo, isUploading } = useUploadThing(
    'avatar',
    {
      onClientUploadComplete: (res: UploadFileResponse[] | undefined) => {
        if (setValue) {
          const respondedUrls = res?.map((r) => ({
            name: r.name,
            size: r.size,
            url: r.url,
          }));
          setValue(name, respondedUrls?.[0]);
        }
        toast.success(
          <Text as="b" className="font-semibold">
            Avatar updated
          </Text>
        );
      },
      onUploadError: (error: Error) => {
        console.error(error);
        toast.error(error.message);
      },
    }
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFiles([
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
      startUpload(files);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [files]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <div className={cn('grid gap-5', className)}>
      <div
        className={cn(
          'relative grid h-40 w-40 place-content-center rounded-full border'
        )}
      >
        {formValue ? (
          <>
            <figure className="absolute inset-0 rounded-full">
              <Image
                fill
                alt="user avatar"
                src={formValue?.url}
                className="rounded-full"
              />
            </figure>
            <div
              {...getRootProps()}
              className={cn(
                'absolute inset-0 grid place-content-center rounded-full bg-black/70'
              )}
            >
              {isUploading ? (
                <LoadingSpinner />
              ) : (
                <PiPencilSimple className="h-5 w-5 text-white" />
              )}

              <input {...getInputProps()} />
            </div>
          </>
        ) : (
          <div
            {...getRootProps()}
            className={cn(
              'absolute inset-0 z-10 grid cursor-pointer place-content-center'
            )}
          >
            <input {...getInputProps()} />
            <UploadIcon className="mx-auto h-12 w-12" />

            {isUploading ? (
              <Loader className="justify-center" />
            ) : (
              <Text className="font-medium">Drop or select file</Text>
            )}
          </div>
        )}
      </div>
      {error && <FieldError error={error} />}
    </div>
  );
}
