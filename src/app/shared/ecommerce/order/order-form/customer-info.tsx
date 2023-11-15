import Image from 'next/image';
import { Controller, useFormContext } from 'react-hook-form';
import { ActionIcon } from '@/components/ui/action-icon';
import { DatePicker } from '@/components/ui/datepicker';
import PencilIcon from '@/components/icons/pencil';
import { Text, Title } from '@/components/ui/text';
import Select from '@/components/ui/select';
import cn from '@/utils/class-names';

interface CustomerInfoProps {
  className?: string;
}

export default function CustomerInfo({ className }: CustomerInfoProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cn(
        'pb-7 pt-10 @container @5xl:col-span-4 @5xl:py-0 @6xl:col-span-3',
        className
      )}
    >
      <div className="rounded-xl border border-gray-300 p-5 @sm:p-6 @md:p-7">
        <div className="relative border-b border-gray-300 pb-7">
          <Title as="h6" className="mb-6">
            Customer Info
          </Title>
          <ActionIcon
            className="absolute -top-1.5 end-0 z-10 text-gray-600 dark:text-gray-800"
            rounded="full"
            variant="flat"
            size="sm"
          >
            <PencilIcon className="h-3.5 w-3.5" />
          </ActionIcon>
          <div className="flex">
            <div className="relative aspect-square h-16 w-16 shrink-0 overflow-hidden rounded-full @5xl:h-20 @5xl:w-20">
              <Image
                fill
                src={
                  'https://isomorphic-furyroad.s3.amazonaws.com/public/avatar.png'
                }
                alt="avatar"
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
              />
            </div>
            <div className="ps-4 @5xl:ps-6">
              <Title as="h6" className="mb-2.5 font-semibold">
                Leslie Alexander
              </Title>
              <Text as="p" className="mb-2 break-all last:mb-0">
                nevaeh.simmons@example.com
              </Text>
              <Text as="p" className="mb-2 last:mb-0">
                (316) 555-0116
              </Text>
            </div>
          </div>
        </div>
        <div className="relative mb-7 border-b border-gray-300 py-7">
          <Title as="h6">Order Details</Title>
          <ActionIcon
            className="absolute end-0 top-5 z-10 text-gray-600 dark:text-gray-800"
            rounded="full"
            variant="flat"
            size="sm"
          >
            <PencilIcon className="h-3.5 w-3.5" />
          </ActionIcon>
          <Text
            as="p"
            className="mt-3 flex flex-col font-semibold text-gray-700"
          >
            <span className="mb-2 font-normal">Order ID</span> COMP1502
          </Text>
        </div>
        <div className="space-y-4 @lg:space-y-5 @2xl:space-y-6">
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                options={paymentOptions}
                value={value}
                onChange={onChange}
                label="Payment Method"
                error={errors?.paymentMethod?.message as string}
                getOptionValue={(option) => option.name}
              />
            )}
          />
          <Controller
            name="shippingMethod"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                options={shippingOption}
                value={value}
                onChange={onChange}
                label="Shipping Method"
                error={errors?.shippingMethod?.message as string}
                getOptionValue={(option) => option.name}
              />
            )}
          />
          <Controller
            name="orderDate"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                inputProps={{ label: 'Order date' }}
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                onBlur={onBlur}
                wrapperClassName="w-full"
                //@ts-ignore
                selected={value}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

// Payment method option
const paymentOptions = [
  {
    value: 'paypal',
    name: 'PayPal',
  },
  {
    value: 'skrill',
    name: 'Skrill',
  },
  {
    value: 'visa',
    name: 'Visa',
  },
  {
    value: 'mastercard',
    name: 'Mastercard',
  },
];

// shipping option
const shippingOption = [
  {
    value: 'ups',
    name: 'UPS',
  },
  {
    value: 'usps',
    name: 'USPS',
  },
  {
    value: 'fedex',
    name: 'FedEx',
  },
];
