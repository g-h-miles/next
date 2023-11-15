import { z } from 'zod';
import { messages } from '@/config/messages';

export const findFlightSchema = z.object({
  fromName: z.string(),
  toName: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  selected: z.object({
    adults: z.number(),
    child: z.number(),
    infants: z.number(),
    cabin: z.string(),
  }),
});

// generate form types from zod validation schema
export type FindFlightType = z.infer<typeof findFlightSchema>;
