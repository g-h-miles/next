import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import cn from '@/utils/class-names';
import Link from 'next/link';
import { PiStarFill } from 'react-icons/pi';
import WishlistButton from '@/components/wishlist-button';

export function RatingsCount({
  rating,
  totalRatings,
}: {
  rating: number;
  totalRatings?: number;
}) {
  return (
    <Text
      as="span"
      className="inline-flex w-[100px] flex-shrink-0 items-center justify-end gap-1 text-sm text-gray-900"
    >
      <PiStarFill className="h-3.5 w-3.5 text-gray-900" />
      {rating}
      {totalRatings && ` (${totalRatings})`}
    </Text>
  );
}

interface Product {
  city: string;
  country: string;
  thumbnail: string;
  rating: number;
  ratingCount: number;
  hostname: string;
  features: string[];
  price: {
    original: string;
    sale: string;
  };
  tag: string;
  base64?: string;
}

type ListingCardProps = {
  product: Product;
  className?: string;
  title?: React.ReactNode;
};

export default function ListingCard({
  product,
  className,
  title = `${product.city}, ${product.country}`,
}: ListingCardProps) {
  const {
    thumbnail,
    tag,
    rating,
    ratingCount,
    hostname,
    features,
    price,
    base64,
  } = product;

  return (
    <div className={cn(className)}>
      <div className="relative">
        <div className="relative mx-auto aspect-[91/75] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={thumbnail}
            alt={title as string}
            fill
            priority
            quality={90}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
            blurDataURL={base64 ?? `/_next/image?url=${thumbnail}&w=10&q=1`}
            className="h-full w-full object-cover"
          />
        </div>

        {tag && (
          <Text
            as="span"
            className="absolute start-5 top-5 rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold dark:bg-gray-200"
          >
            {tag}
          </Text>
        )}
        <WishlistButton className="absolute end-3 top-3" />
      </div>
      <div className="pt-3">
        <div className="mb-1 flex items-center justify-between">
          <Link href="" className="max-w-[calc(100%-120px)] flex-grow">
            <Title
              as="h6"
              className="truncate font-semibold transition-colors hover:text-primary"
            >
              {title}
            </Title>
          </Link>
          <RatingsCount rating={rating} totalRatings={ratingCount} />
        </div>

        <Text as="p" className="mb-1 truncate">
          Stay with {hostname}
        </Text>

        <div className="flex items-center">
          {features.map((item: string) => (
            <Text
              as="span"
              key={`${title}-${item}`}
              className="relative -inset-y-1/2 inline-block px-2 after:absolute after:-end-[1px] after:top-1/2 after:h-1 after:w-1 after:rounded-full after:bg-gray-500 first:ps-0 last:pe-0 last:after:hidden"
            >
              {item}
            </Text>
          ))}
        </div>

        <div className="mt-2 flex items-center font-semibold text-gray-900">
          <del className="pe-1.5 text-[13px] font-normal text-gray-500">
            {price.original}
          </del>
          {price.sale} night
        </div>
      </div>
    </div>
  );
}
