import { z } from 'zod';
import { messages } from '@/config/messages';

export const fileSchema = z.object({
  name: z.string(),
  url: z.string(),
  size: z.number(),
});

export type FileSchema = z.infer<typeof fileSchema>;

export const validateEmail = z
  .string()
  .min(1, { message: messages.emailIsRequired })
  .email({ message: messages.invalidEmail });

export const validatePassword = z
  .string()
  .min(1, { message: messages.passwordRequired })
  .min(6, { message: messages.passwordLengthMin })
  .regex(new RegExp('.*[A-Z].*'), {
    message: messages.passwordOneUppercase,
  })
  .regex(new RegExp('.*[a-z].*'), {
    message: messages.passwordOneLowercase,
  })
  .regex(new RegExp('.*\\d.*'), { message: messages.passwordOneNumeric });

export const validateNewPassword = z
  .string()
  .min(1, { message: messages.passwordRequired })
  .min(6, { message: messages.passwordLengthMin })
  .regex(new RegExp('.*[A-Z].*'), {
    message: messages.passwordOneUppercase,
  })
  .regex(new RegExp('.*[a-z].*'), {
    message: messages.passwordOneLowercase,
  })
  .regex(new RegExp('.*\\d.*'), { message: messages.passwordOneNumeric });

export const validateConfirmPassword = z
  .string()
  .min(1, { message: messages.confirmPasswordRequired })
  .min(6, { message: messages.passwordLengthMin })
  .regex(new RegExp('.*[A-Z].*'), {
    message: messages.passwordOneUppercase,
  })
  .regex(new RegExp('.*[a-z].*'), {
    message: messages.passwordOneLowercase,
  })
  .regex(new RegExp('.*\\d.*'), { message: messages.passwordOneNumeric });
