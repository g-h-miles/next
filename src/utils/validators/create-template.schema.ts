import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const createTemplateSchema = z.object({
  name: z.string().min(1, { message: messages.templateNameIsRequired }),
  folder: z
    .string({
      required_error: messages.templateDirIsRequired,
    })
    .min(1, { message: messages.templateDirIsRequired }),
  snippet: z.string().optional(),
  template: z.string().optional(),
});

// generate form types from zod validation schema
export type CreateTemplateInput = z.infer<typeof createTemplateSchema>;
