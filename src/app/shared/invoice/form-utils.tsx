'use client';

import z from 'zod';
import { Title, Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import cn from '@/utils/class-names';

// form zod validation schema
export const invoiceFormSchema = z.object({
  fromName: z.string().min(1, { message: 'This field is required' }),
  fromAddress: z.string().min(1, { message: 'This field is required' }),
  fromPhone: z.string().min(1, { message: 'Invalid phone number' }).optional(),
  toName: z.string().min(1, { message: 'This field is required' }),
  toAddress: z.string().min(1, { message: 'This field is required' }),
  toPhone: z.string().min(1, { message: 'Invalid phone number' }).optional(),
  invoiceNumber: z.string({
    required_error: 'This field is required',
  }),
  createDate: z
    .date()
    .refine((value) => value !== null, 'Please select a date'),
  dueDate: z.date().refine((value) => value !== null, 'Please select a date'),
  status: z.string({
    required_error: 'This field is required',
  }),
  shipping: z
    .number()
    .min(0, { message: 'This field is required' })
    .or(z.string().min(1, { message: 'This field is required' })),
  discount: z
    .number()
    .min(0, { message: 'This field is required' })
    .or(z.string().min(1, { message: 'This field is required' })),
  taxes: z
    .number()
    .min(0, { message: 'This field is required' })
    .or(z.string().min(1, { message: 'This field is required' })),
  items: z.array(
    z.object({
      item: z.string().min(1, { message: 'This field is required' }).nonempty(),
      description: z
        .string()
        .min(1, { message: 'This field is required' })
        .nonempty(),
      quantity: z.number().min(1, { message: 'This field is required' }),
      price: z
        .number()
        .min(1, { message: 'This field is required' })
        .or(z.string().min(1, { message: 'This field is required' })),
    })
  ),
});

// generate form types from zod validation schema
export type InvoiceFormTypes = z.infer<typeof invoiceFormSchema>;

export const statusOptions = [
  {
    value: 'paid',
    name: 'Paid',
    label: (
      <div className="flex items-center">
        <Badge color="success" renderAsDot />
        <Text className="ms-2 font-medium text-green-dark">Paid</Text>
      </div>
    ),
  },
  {
    value: 'pending',
    name: 'Pending',
    label: (
      <div className="flex items-center">
        <Badge color="warning" renderAsDot />
        <Text className="ms-2 font-medium text-orange-dark">Pending</Text>
      </div>
    ),
  },
  {
    value: 'overdue',
    name: 'Overdue',
    label: (
      <div className="flex items-center">
        <Badge color="danger" renderAsDot />
        <Text className="ms-2 font-medium text-red-dark">Overdue</Text>
      </div>
    ),
  },
  {
    value: 'draft',
    name: 'Draft',
    label: (
      <div className="flex items-center">
        <Badge className="bg-gray-400" renderAsDot />
        <Text className="ms-2 font-medium text-gray-600">Draft</Text>
      </div>
    ),
  },
];

export function FormBlockWrapper({
  title,
  description,
  children,
  className,
}: React.PropsWithChildren<{
  title: string;
  description?: string;
  className?: string;
}>) {
  return (
    <section className={cn('@5xl:grid @5xl:grid-cols-6', className)}>
      <header className="col-span-2 mb-6 @5xl:mb-0">
        <Title as="h5" className="font-semibold">
          {title}
        </Title>
        {description ? (
          <Text className="mt-1 text-sm text-gray-500">{description}</Text>
        ) : null}
      </header>
      <div className="col-span-4 grid grid-cols-2 gap-3 @lg:gap-4 @2xl:gap-5">
        {children}
      </div>
    </section>
  );
}
