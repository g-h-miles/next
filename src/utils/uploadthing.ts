import { generateComponents } from '@uploadthing/react';
export type { UploadFileResponse } from 'uploadthing/client';
import { generateReactHelpers } from '@uploadthing/react/hooks';
import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
