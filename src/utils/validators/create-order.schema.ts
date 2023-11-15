import { z } from 'zod';
import { messages } from '@/config/messages';

const addressSchema = z.object({
  customerName: z.string().min(1, { message: messages.customerNameIsRequired }),
  phoneNumber: z
    .string({
      required_error: messages.phoneNumberIsRequired,
    })
    .min(2, { message: messages.phoneNumberIsRequired }),
  country: z.string().min(1, { message: messages.countryIsRequired }),
  state: z.string().min(1, { message: messages.stateIsRequired }),
  city: z.string().min(1, { message: messages.cityIsRequired }),
  zip: z.string().min(1, { message: messages.zipCodeRequired }),
  street: z.string().min(1, { message: messages.streetIsRequired }),
});

// form zod validation schema
export const orderFormSchema = z.object({
  billingAddress: addressSchema,
  sameShippingAddress: z.boolean(),
  shippingAddress: z
    .object({
      customerName: z.string().optional(),
      phoneNumber: z.string().optional(),
      country: z.string().optional(),
      state: z.string().optional(),
      city: z.string().optional(),
      zip: z.string().optional(),
      street: z.string().optional(),
    })
    .optional(),
  note: z.string().optional(),
  paymentMethod: z.string().optional(),
  shippingMethod: z.string().optional(),
  shippingSpeed: z.string().optional(),
  cardPayment: z
    .object({
      cardNumber: z.string().optional(),
      expireMonth: z.string().optional(),
      expireYear: z.string().optional(),
      cardCVC: z.string().optional(),
      cardUserName: z.string().optional(),
      isSaveCard: z.boolean().optional(),
    })
    .optional(),
});

// generate form types from zod validation schema
export type CreateOrderInput = z.infer<typeof orderFormSchema>;
