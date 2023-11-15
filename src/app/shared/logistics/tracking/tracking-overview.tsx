'use client';

import cn from '@/utils/class-names';
import { useParams } from 'next/navigation';
import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { PiCheckCircle, PiCopySimple, PiMoped } from 'react-icons/pi';
import ShipmentNewsletterForm from '@/app/shared/logistics/tracking/shipment-newsletter';
import Timeline from '@/app/shared/logistics/tracking/timeline';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const timelineData = [
  {
    title: 'Delivered',
    text: 'Delivered, Individual Picked Up at Postal Facility',
    hightlightedText: '8502 Preston Rd. Inglewood, Maine 98380',
    date: 'May 02, 2023',
    time: '11:30 am',
    icon: <PiCheckCircle className="h-6 w-6 text-green" />,
    status: 'success',
  },
  {
    title: 'Out for delivery',
    text: 'Not Delivered yet, Individual Picked Up at Postal Facility',
    hightlightedText: '8502 Preston Rd. Inglewood, Maine 98380',
    date: 'May 02, 2023',
    time: '11:00 am',
    icon: '',
    status: '',
  },
  {
    title: 'In transit to next facility',
    text: '',
    hightlightedText: '',
    date: 'May 02, 2023',
    time: '09:00 am',
    icon: '',
    status: '',
  },
  {
    title: 'Departed from the store',
    text: '',
    hightlightedText: '',
    date: 'April 29, 2023',
    time: '05:31 am',
    icon: '',
    status: '',
  },
  {
    title: 'Store has started packaging',
    text: '',
    hightlightedText: '',
    date: 'April 28, 2023',
    time: '8:00 am',
    icon: '',
    status: '',
  },
  {
    title: 'Order Received',
    text: '',
    hightlightedText: '',
    date: 'April 26, 2023',
    time: '12:30 pm',
    icon: '',
    status: '',
  },
];

export default function TrackingOverview({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-10 lg:grid-cols-2 xl:gap-20',
        className
      )}
    >
      <div>
        <TrackingSummary />
        <ShipmentSubscription className="mt-10" />
      </div>
      <div>
        <Timeline data={timelineData} showmoreButton={true} order="desc" />
      </div>
    </div>
  );
}

export function TrackingSummary() {
  const params = useParams();
  const [isCopied, setCopied] = useState(false);
  const [_, copyToClipboard] = useCopyToClipboard();

  function handleCopyToClipboard(value: string) {
    copyToClipboard(value);
    toast.success(<b>{`Copied '${value}' to clipboard`}</b>);

    setCopied(() => true);
    setTimeout(() => {
      setCopied(() => false);
    }, 2000);
  }
  return (
    <>
      <Text className="mb-2 text-gray-700">Tracking Number:</Text>
      <Title
        as="h2"
        className="mb-3 text-2xl font-bold text-gray-700 3xl:text-3xl"
      >
        {params.id}
      </Title>

      <div className="mb-7 flex items-center gap-x-5">
        <Button
          variant="text"
          onClick={() => handleCopyToClipboard(params.id as string)}
          className="inline-flex h-auto w-auto items-center gap-1 px-0 py-0 font-normal"
        >
          <PiCopySimple className="h-5 w-5" />
          <Text as="span" className="text-gray-700">
            {isCopied ? 'Copied' : 'Copy'}
          </Text>
        </Button>
        <Text className="inline-flex items-center gap-1">
          <PiMoped className="h-5 w-5" />
          <Text as="span" className="text-gray-700">
            Add to delivery information
          </Text>
        </Text>
      </div>

      <div className="max-w-[505px] rounded-lg border border-l-4 border-primary bg-primary-lighter/10 p-7">
        <Title as="h3" className="mb-3 text-xl font-semibold text-gray-900">
          Latest Update
        </Title>
        <Text className="mb-2 text-gray-500 md:text-base md:leading-relaxed">
          Your item was delivered at a postal facility at 11:09 am on May 2,
          2023 in{' '}
          <Text as="span" className="font-semibold text-gray-700">
            8502 Preston Rd. Inglewood, Maine 98380
          </Text>
        </Text>
      </div>
    </>
  );
}

export function ShipmentSubscription({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Text className="mb-3">
        Want update on this shipment? Enter your email address & we will do the
        rest!
      </Text>
      <ShipmentNewsletterForm
        placeholderText="smith@example.com"
        buttonClassName="bg-gray-900 hover:enabled:bg-gray-800 rounded-lg max-w-[118px]"
        buttonLabel="Submit"
        className="w-full max-w-3xl"
      />
    </div>
  );
}
