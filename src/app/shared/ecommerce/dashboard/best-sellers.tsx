'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import { DatePicker } from '@/components/ui/datepicker';
import WidgetCard from '@/components/cards/widget-card';
import { Button } from '@/components/ui/button';
import { topProducts } from '@/data/top-products-data';
import Rating from '@/components/rating';

const currentDate = new Date();
const previousMonthDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() - 1,
  currentDate.getDate()
);

export default function BestSellers({ className }: { className?: string }) {
  const [starRangeDate, setStartRangeDate] = useState<Date>(previousMonthDate);
  const [endRangeDate, setEndRangeDate] = useState<Date>(currentDate);
  const handleRangeChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartRangeDate(start);
    setEndRangeDate(end);
  };

  return (
    <WidgetCard
      title={'Top Products'}
      description={
        <>
          Overview:
          <DatePicker
            selected={starRangeDate}
            onChange={handleRangeChange}
            startDate={starRangeDate}
            endDate={endRangeDate}
            monthsShown={1}
            placeholderText="Select Date in a Range"
            selectsRange
            inputProps={{
              variant: 'text',
              inputClassName:
                'p-0 pe-1 h-auto [&.is-focus]:ms-2 [&_input]:text-ellipsis',
              prefixClassName: 'hidden',
            }}
          />
        </>
      }
      action={
        <Button variant="text" className="whitespace-nowrap underline">
          View All
        </Button>
      }
      descriptionClassName="mt-1 flex items-center [&_.react-datepicker-wrapper]:w-full [&_.react-datepicker-wrapper]:max-w-[228px] text-gray-500"
      className={className}
    >
      <div className="custom-scrollbar -me-2 mt-[18px] grid max-h-[460px] gap-4 overflow-y-auto @sm:gap-5">
        {topProducts.map((product) => (
          <div
            key={product.title + product.id}
            className="flex items-start pe-2"
          >
            <div className="relative me-3 h-11 w-11 shrink-0 overflow-hidden rounded bg-gray-100 @sm:h-12 @sm:w-12">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex w-full items-start justify-between">
              <div>
                <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
                  {product.title}
                </Text>
                <Text className="text-gray-500">{product.price}</Text>
              </div>
              <div>
                <Rating rating={product.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
