'use server';

import { utapi } from '@/server/uploadthing';

export const deleteFiles = async (fileKey?: string) => {
  if (fileKey) {
    await utapi.deleteFiles(fileKey);
  }
  return;
};
