'use client';

import { Collapse } from '@/components/ui/collapse';
import { Title, Text } from '@/components/ui/text';
import cn from '@/utils/class-names';
import { PiCaretDownBold, PiPackageFill } from 'react-icons/pi';
import DeliveryTruckIcon from '@/components/icons/delivery-truck';
import PackageOpenIcon from '@/components/icons/package-open';

const shippingInformation = [
  {
    title: 'Shipment Overview',
    icon: <PiPackageFill className="h-6 w-6 text-primary" />,
    data: [
      {
        name: 'Tracking Number',
        value: 'FC6723757651DB74',
      },
      {
        name: 'Delivered To',
        value: '8502 Preston Rd. Inglewood, Maine 98380',
      },
      {
        name: 'Shipping Date',
        value: '15 May, 2023',
      },
      {
        name: 'Standard Transit',
        value: '19 May, 2023 before 12:00 PM',
      },
      {
        name: 'Actual Delivery',
        value: '20 May, 2023 at 10:00 AM',
      },
    ],
  },
  {
    title: 'Services',
    icon: <DeliveryTruckIcon className="h-5 w-6 text-primary" />,
    data: [
      {
        name: 'Service',
        value: 'Example Service Provider',
      },
      {
        name: 'Terms',
        value: 'Shipper',
      },
      {
        name: 'Special Handling Section',
        value: 'Delivery Weekday',
      },
    ],
  },
  {
    title: 'Package Details',
    icon: <PackageOpenIcon className="h-5 w-5 text-primary" />,
    data: [
      {
        name: 'Weight',
        value: '1 lbs / 0.45 kgs',
      },
      {
        name: 'Dimensions',
        value: '16x19x5 in.',
      },
      {
        name: 'Total Pieces',
        value: '1',
      },
      {
        name: 'Total Shipment Weight',
        value: '1 lbs / 0.45 kgs',
      },
      {
        name: 'Packaging',
        value: 'Example packaging',
      },
    ],
  },
];

export default function ShippingInfo({ className }: { className?: string }) {
  return (
    <>
      <Collapse
        defaultOpen={true}
        className={cn('mx-0 py-5 md:py-7 lg:mx-8', className)}
        header={({ open, toggle }) => (
          <button
            type="button"
            onClick={toggle}
            className="flex w-full cursor-pointer items-center justify-between text-left font-lexend text-xl font-semibold text-gray-700"
          >
            Shipping Information
            <PiCaretDownBold
              className={cn(
                'h-5 w-5 -rotate-90 transform transition-transform duration-300 rtl:rotate-90',
                open && '-rotate-0 rtl:rotate-0'
              )}
            />
          </button>
        )}
      >
        {shippingInformation.map((item, index) => (
          <div
            className={cn(
              'my-10 flex gap-4',
              index === shippingInformation.length - 1 && 'mb-3'
            )}
            key={`shipping-block-${index}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-lighter">
              {item.icon}
            </span>

            <div className="flex flex-col gap-y-3">
              <Title as="h3" className="text-base font-semibold">
                {item.title}
              </Title>
              {item.data.map((info, index) => (
                <div
                  className="flex flex-col sm:flex-row sm:items-center"
                  key={`info-${index}`}
                >
                  <Title
                    as="h4"
                    className="text-sm font-normal capitalize text-gray-700 sm:min-w-[244px] md:min-w-[424px]"
                  >
                    {info.name}:
                  </Title>
                  <Text className="gap-3 text-sm text-gray-500">
                    {info.value}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Collapse>
    </>
  );
}
