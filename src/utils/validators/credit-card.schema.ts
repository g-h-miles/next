import { messages } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const creditCardSchema = z.object({
  cardHolder: z.string().min(1, { message: messages.cardHolderNameIsRequired }),
  cardNumber: z.string().min(10, { message: messages.cardNumberIsRequired }),
  expiryDate: z.string().min(1, { message: messages.cardExpireIsRequired }),
  cvc: z.string().length(3, { message: messages.cvcNumberIsRequired }),
});

// generate form types from zod validation schema
export type CreditCardSchema = z.infer<typeof creditCardSchema>;
