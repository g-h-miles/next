import { z } from 'zod';
import { messages } from '@/config/messages';
import { validateEmail } from '@/utils/validators/common-rules';

// form zod validation schema
export const addTeamMemberSchema = z.object({
  first_name: z.string().min(1, { message: messages.firstNameRequired }),
  last_name: z.string().optional(),
  email: validateEmail,
  role: z.string({ required_error: messages.roleIsRequired }),
  country: z.string().optional(),
  teams: z.string({ required_error: messages.teamIsRequired }),
});

// generate form types from zod validation schema
export type AddTeamMemberInput = z.infer<typeof addTeamMemberSchema>;
