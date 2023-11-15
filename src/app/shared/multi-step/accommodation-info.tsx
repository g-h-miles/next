'use client ';
import { z } from 'zod';
import { Controller, useFormContext } from 'react-hook-form';
import CounterInput from '@/app/shared/multi-step/counter';

export const AccommodationSchema = z.object({
  bedRooms: z.number().optional(),
  bathRooms: z.number().optional(),
  guests: z.number().min(3, { message: 'Minimum 3 guests required' }),
  gallery: z.any().array().optional(),
});

export const accommodationValues = {
  bedRooms: undefined,
  bathRooms: undefined,
  guests: undefined,
  gallery: [],
};

export default function AccommodationInfo() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid gap-2 md:gap-5">
      <Controller
        control={control}
        name="bedRooms"
        render={({ field: { onChange } }) => (
          <CounterInput
            label="Bed Rooms"
            onChange={onChange}
            error={errors?.bedRooms?.message as string}
          />
        )}
      />
      <Controller
        control={control}
        name="bathRooms"
        render={({ field: { onChange } }) => (
          <CounterInput
            onChange={onChange}
            label="Bath Rooms"
            error={errors?.bathRooms?.message as string}
          />
        )}
      />
      <Controller
        control={control}
        name="guests"
        render={({ field: { onChange } }) => (
          <CounterInput
            label="Guests"
            onChange={onChange}
            error={errors?.guests?.message as string}
          />
        )}
      />
    </div>
  );
}
