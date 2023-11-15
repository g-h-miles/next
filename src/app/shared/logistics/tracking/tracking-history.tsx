'use client';

import { Element } from 'react-scroll';
import { PiCheckCircle, PiCaretDownBold } from 'react-icons/pi';
import { Collapse } from '@/components/ui/collapse';
import Timeline from '@/app/shared/logistics/tracking/timeline';
import cn from '@/utils/class-names';

const timelineData = [
  {
    title: 'Order Received',
    text: '',
    hightlightedText: '',
    date: 'April 26, 2023',
    time: '12:30 pm',
    icon: '',
    status: '',
  },
  {
    title: 'Store has started packaging',
    text: '',
    hightlightedText: 'Packaging has started. We expect your patient.',
    date: 'April 28, 2023',
    time: '8:00 am',
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
    title: 'In transit to next facility',
    text: '',
    hightlightedText: '',
    date: 'May 01, 2023',
    time: '09:00 am',
    icon: '',
    status: '',
  },
  {
    title: 'In transit',
    text: 'In transit to delivery location.',
    hightlightedText: 'Inglewood, Maine 98380',
    date: 'May 02, 2023',
    time: '10:05 am',
    icon: '',
    status: '',
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
    title: 'Delivered',
    text: 'Delivered, Individual Picked Up at Postal Facility',
    hightlightedText: '8502 Preston Rd. Inglewood, Maine 98380',
    date: 'May 02, 2023',
    time: '11:30 am',
    icon: <PiCheckCircle className="h-6 w-6 text-green" />,
    status: 'success',
  },
];

export default function TrackingHistory({ className }: { className?: string }) {
  return (
    <>
      <Collapse
        className="mx-0 py-5 md:py-7 lg:mx-8"
        defaultOpen={true}
        panelClassName="mb-7"
        header={({ open, toggle }) => (
          <button
            type="button"
            onClick={toggle}
            className="flex w-full cursor-pointer items-center justify-between text-left font-lexend text-xl font-semibold text-gray-700"
          >
            Tracking History
            <PiCaretDownBold
              className={cn(
                'h-5 w-5 -rotate-90 transform transition-transform duration-300 rtl:rotate-90',
                open && '-rotate-0 rtl:rotate-0'
              )}
            />
          </button>
        )}
      >
        <Element name="tracking_history">
          <Timeline className="mt-10" data={timelineData} />
        </Element>
      </Collapse>
    </>
  );
}
