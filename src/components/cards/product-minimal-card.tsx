import Link from 'next/link';
import Image from 'next/image';
import WishlistButton from '@/components/wishlist-button';
import { generateSlug } from '@/utils/generate-slug';
import { Title, Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import { Product } from '@/types';
import { toCurrency } from '@/utils/to-currency';

interface ProductProps {
  product: Product;
  className?: string;
}

export default function ProductMinimalCard({
  product,
  className,
}: ProductProps) {
  const {
    slug,
    title,
    thumbnail,
    description,
    price,
    sale_price,
    colors = [],
  } = product;

  return (
    <div className={className}>
      <div className="relative">
        <div className="relative mx-auto aspect-[4/5.06] w-full bg-gray-100">
          <Image
            alt={title}
            src={thumbnail}
            fill
            priority
            quality={90}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
            blurDataURL={`/_next/image?url=${thumbnail}&w=10&q=1`}
            className="h-full w-full object-cover"
          />
        </div>
        <WishlistButton className="absolute end-3 top-3" />
      </div>

      <div className="pt-3.5">
        <div className="pb-1 font-medium text-red-dark">Just In</div>
        <Link
          href={routes.eCommerce.productDetails(
            String(slug ?? generateSlug(title))
          )}
        >
          <Title
            as="h6"
            className="mb-0.5 truncate font-semibold transition-colors hover:text-primary"
          >
            {title}
          </Title>
        </Link>
        <Text as="p" className="mb-1 truncate">
          {description}
        </Text>

        {colors?.length ? (
          <div className="text-sm text-gray-500">
            {colors?.length} {colors?.length > 1 ? 'Colors' : 'Color'}
          </div>
        ) : null}

        <div className="mt-3.5 flex items-center font-semibold text-gray-900">
          {toCurrency(Number(price))}
          {sale_price && (
            <del className="ps-1.5 text-[13px] font-normal text-gray-500">
              {toCurrency(Number(sale_price))}
            </del>
          )}
        </div>
      </div>
    </div>
  );
}
