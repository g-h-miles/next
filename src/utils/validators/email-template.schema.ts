import { z } from 'zod';
import { messages } from '@/config/messages';
import { validateEmail } from '@/utils/validators/common-rules';

export const emailTemplateSchema = z.object({
  name: z.string().min(1, { message: messages.nameIsRequired }),
  email: validateEmail,
});

// generate form types from zod validation schema
export type EmailTemplateInput = z.infer<typeof emailTemplateSchema>;
