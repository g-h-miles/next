'use client';

import { useState } from 'react';
import { SubmitHandler, Controller } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Title, Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneNumber } from '@/components/ui/phone-input';
import { DatePicker } from '@/components/ui/datepicker';
import Select from '@/components/ui/select';
import { FormBlockWrapper, statusOptions } from './form-utils';
import { AddInvoiceItems } from './add-invoice-items';
import FormFooter from '@/components/form-footer';
import { toast } from 'react-hot-toast';
import {
  InvoiceFormInput,
  invoiceFormSchema,
} from '@/utils/validators/create-invoice.schema';

const invoiceItems = [
  { item: '', description: '', quantity: 1, price: undefined },
];

export default function CreateInvoice({
  id,
  record,
}: {
  id?: string;
  record?: InvoiceFormInput;
}) {
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<InvoiceFormInput> = (data) => {
    toast.success(
      <Text as="b">Invoice successfully {id ? 'updated' : 'created'}</Text>
    );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('createInvoice data ->', data);
      setReset({
        fromName: '',
        fromAddress: '',
        fromPhone: '',
        toName: '',
        toAddress: '',
        toPhone: '',
        shipping: '',
        discount: '',
        taxes: '',
        createDate: new Date(),
        status: 'draft',
        items: invoiceItems,
      });
    }, 600);
  };

  const newItems = record?.items
    ? record.items.map((item) => ({
        ...item,
      }))
    : invoiceItems;

  return (
    <Form<InvoiceFormInput>
      validationSchema={invoiceFormSchema}
      resetValues={reset}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: {
          ...record,
          invoiceNumber: 'INV-0071',
          createDate: new Date(),
          // status: 'draft',
          items: newItems,
        },
      }}
      className="flex flex-grow flex-col @container [&_label]:font-medium"
    >
      {({ register, control, watch, formState: { errors } }) => (
        <>
          <div className="flex-grow pb-10">
            <div className="grid grid-cols-1 gap-8 divide-y divide-dashed divide-gray-200 @2xl:gap-10 @3xl:gap-12">
              <FormBlockWrapper
                title={'From:'}
                description={'From he who sending this invoice'}
              >
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  {...register('fromName')}
                  error={errors.fromName?.message}
                />
                <Controller
                  name="fromPhone"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <PhoneNumber
                      label="Phone Number"
                      country="us"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Textarea
                  label="Address"
                  placeholder="Enter your address"
                  {...register('fromAddress')}
                  error={errors.fromAddress?.message}
                  textareaClassName="h-20"
                  className="col-span-2"
                />
              </FormBlockWrapper>

              <FormBlockWrapper
                title={'To:'}
                description={'To he who will receive this invoice'}
                className="pt-7 @2xl:pt-9 @3xl:pt-11"
              >
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  {...register('toName')}
                  error={errors.toName?.message}
                />
                <Controller
                  name="toPhone"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <PhoneNumber
                      label="Phone Number"
                      country="us"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Textarea
                  label="Address"
                  placeholder="Enter your address"
                  {...register('toAddress')}
                  error={errors.toAddress?.message}
                  textareaClassName="h-20"
                  className="col-span-2"
                />
              </FormBlockWrapper>

              <FormBlockWrapper
                title={'Schedule:'}
                description={'To he who will receive this invoice'}
                className="pt-7 @2xl:pt-9 @3xl:pt-11"
              >
                <div className="col-span-2 grid grid-cols-1 items-baseline gap-5 @lg:grid-cols-2 @5xl:grid-cols-4">
                  <Input
                    label="Invoice Number"
                    placeholder="Enter invoice number"
                    {...register('invoiceNumber')}
                    readOnly
                    error={errors.invoiceNumber?.message}
                  />
                  <div className="[&>.react-datepicker-wrapper]:w-full">
                    <Controller
                      name="createDate"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <DatePicker
                          inputProps={{ label: 'Date Create' }}
                          placeholderText="Select Date"
                          selected={value}
                          onChange={onChange}
                        />
                      )}
                    />
                  </div>
                  <div className="[&>.react-datepicker-wrapper]:w-full">
                    <Controller
                      name="dueDate"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <DatePicker
                          inputProps={{
                            label: 'Due Date',
                            error: errors?.dueDate?.message,
                          }}
                          placeholderText="Select Date"
                          selected={value}
                          onChange={onChange}
                        />
                      )}
                    />
                  </div>
                  <Controller
                    name="status"
                    control={control}
                    render={({ field: { name, onChange, value } }) => (
                      <Select
                        options={statusOptions}
                        value={value}
                        onChange={onChange}
                        name={name}
                        label="Status"
                        error={errors?.status?.message}
                        getOptionValue={(option) => option.value}
                        displayValue={(selected: string) =>
                          statusOptions.find(
                            (option) => option.value === selected
                          )?.label ?? selected
                        }
                      />
                    )}
                  />
                </div>
              </FormBlockWrapper>

              <AddInvoiceItems
                watch={watch}
                control={control}
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <FormFooter
            isLoading={isLoading}
            submitBtnText={id ? 'Update Invoice' : 'Create Invoice'}
          />
        </>
      )}
    </Form>
  );
}
