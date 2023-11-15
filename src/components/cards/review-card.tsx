import Image from 'next/image';
import dayjs from 'dayjs';
import { PiStar, PiStarFill } from 'react-icons/pi';
import { Title, Text } from '@/components/ui/text';

type ReviewCardProps = {
  customer: {
    avatar?: string;
    name: string;
  };
  date: Date;
  message: string;
  attachment?: string[];
  className?: string;
};

export default function ReviewCard({
  customer,
  date,
  message,
  attachment,
}: ReviewCardProps) {
  return (
    <div className="border-border-200 border-t py-6 @md:flex @md:items-start">
      <div className="shrink-0 @md:w-40 @md:pe-4">
        <Title
          as="h6"
          className="pb-1.5 text-base font-semibold text-gray-900 @md:font-medium"
        >
          {customer.name}
        </Title>
        <Text className="text-xs text-gray-500 @md:text-sm">
          {dayjs(date).format('DD MMM, YYYY')}
        </Text>
      </div>
      <div className="w-full pt-4 @md:pt-1">
        <div className="-mx-0.5 mb-2.5 flex">
          {[...new Array(5)].map((_, index) => {
            return index < 3 ? (
              <PiStarFill className="w-4 fill-orange text-orange" key={index} />
            ) : (
              <PiStar className="w-4 fill-gray-300 text-gray-500" key={index} />
            );
          })}
        </div>
        <Text className="leading-[1.85]">{message}</Text>
        {attachment && attachment.length > 0 && (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-3 pt-2.5">
            {attachment?.map((item: string, index: number) => (
              <div
                key={`review-key-${index}`}
                className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded bg-gray-100"
              >
                <Image
                  fill
                  priority
                  src={item}
                  alt="Review attachment"
                  sizes="(max-width: 768px) 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
