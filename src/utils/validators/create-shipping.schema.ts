import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';

// form zod validation schema
export const shipmentFormSchema = z.object({
  country: z.string({ required_error: messages.countryIsRequired }),
  agency: z.string().optional(),
  packageInfoAttachment: z.array(fileSchema).optional(),
  shippingInfoAttachment: z.array(fileSchema).optional(),
  officeOrigin: z.string().optional(),
  shippingMethod: z.string().optional(),
  packagingType: z.string().optional(),
  courierCompany: z.string().optional(),
  deliveryTime: z.string().optional(),
  senderName: z.string().optional(),
  senderAddress: z.string().optional(),
  senderEmail: z
    .string()
    .min(1, { message: messages.emailIsRequired })
    .email({ message: messages.invalidEmail }),
  senderPhone: z.string().optional(),
  notifySenderViaSMS: z.boolean().optional(),
  recipientName: z.string().optional(),
  recipientAddress: z.string().optional(),
  recipientEmail: z
    .string()
    .min(1, { message: messages.emailIsRequired })
    .email({ message: messages.invalidEmail }),
  recipientPhone: z.string().optional(),
  notifyRecipientViaSMS: z.boolean().optional(),
  paidBy: z.string().optional(),
  paymentMethod: z.string().optional(),
  paymentType: z.string().optional(),
  payeeName: z.string().optional(),
  payeeCountry: z.string().optional(),
  payeeCity: z.string().optional(),
  payeeStreetAddress: z.string().optional(),
  packageAmount: z.string().optional(),
  packageWidth: z.string().optional(),
  packageHeight: z.string().optional(),
  packageLength: z.string().optional(),
  packageWeight: z.string().optional(),
  packageDescription: z.string().optional(),
  giftType: z.string().optional(),
  giftFrom: z.string().optional(),
  giftTo: z.string().optional(),
  giftMessage: z.string().optional(),
});

// generate form types from zod validation schema
export type CreateShipmentInput = z.infer<typeof shipmentFormSchema>;
