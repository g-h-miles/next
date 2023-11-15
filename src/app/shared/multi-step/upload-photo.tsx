'use client ';
import { z } from 'zod';
import { cn } from 'rizzui';
import { Controller, useFormContext } from 'react-hook-form';
import Upload from '@/components/ui/upload';

interface BasicInfoProps {
  className?: string;
}

export const ImageUploadSchema = z.object({
  gallery: z.any().array().optional(),
});

export default function UploadPhoto({ className }: BasicInfoProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={cn(className)}>
      <Controller
        name="gallery"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Upload accept="img" onChange={(v) => console.log(v)} />
        )}
      />
      {!!errors.gallery?.message && (
        <p role="alert" className="mt-1.5 text-xs text-red">
          {errors.gallery?.message as string}
        </p>
      )}
    </div>
  );
}
