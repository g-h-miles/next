import { z } from 'zod';
import isEmpty from 'lodash/isEmpty';
import { messages } from '@/config/messages';

// form zod validation schema
export const productDetailsSchema = z.object({
  productSize: z.coerce.number({
    invalid_type_error: messages.productSizeRequired,
  }),
  productColor: z.object({
    name: z.string(),
    code: z.string(),
  }),
  // productColor: z.array(z.string()).min(1),
});

// generate form types from zod validation schema
export type ProductDetailsInput = z.infer<typeof productDetailsSchema>;
