import { z } from 'zod';
import { messages } from '@/config/messages';

export const eventFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: messages.nameIsRequired }),
  description: z.string().optional(),
  location: z.string().optional(),
  startDate: z.date({
    required_error: messages.startDateIsRequired,
  }),
  // startTime: z.date({
  //   required_error: messages.startTimeIsRequired,
  // }),
  endDate: z.date({
    required_error: messages.endDateIsRequired,
  }),
  // endTime: z.date({
  //   required_error: messages.endTimeIsRequired,
  // }),
});

// generate form types from zod validation schema
export type EventFormInput = z.infer<typeof eventFormSchema>;
