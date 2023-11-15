'use client';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/config/routes';
import { Title, Text } from '@/components/ui/text';
import WishlistButton from '@/components/wishlist-button';
import { generateSlug } from '@/utils/generate-slug';
import ColorSwatch from '@/utils/color-swatch';
import cn from '@/utils/class-names';
import { Product } from '@/types';
import { toCurrency } from '@/utils/to-currency';

interface ProductProps {
  product: Product;
  className?: string;
}

export default function ProductModernCard({
  product,
  className,
}: ProductProps) {
  const {
    title,
    thumbnail,
    slug,
    description,
    price,
    sale_price,
    colors = [],
    base64,
  } = product;
  return (
    <div className={cn(className)}>
      <div className="relative">
        <div className="relative mx-auto aspect-[4/5.06] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            alt={title}
            src={thumbnail}
            fill
            priority
            quality={90}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
            blurDataURL={base64 ?? `/_next/image?url=${thumbnail}&w=10&q=1`}
            className="h-full w-full object-cover"
          />
        </div>
        <WishlistButton className="absolute end-3 top-3" />
      </div>

      <div className="pt-3">
        <Link
          href={routes.eCommerce.productDetails(
            String(slug ?? generateSlug(title))
          )}
        >
          <Title
            as="h6"
            className="mb-1 truncate font-semibold transition-colors hover:text-primary"
          >
            {title}
          </Title>
        </Link>

        <Text as="p" className="truncate">
          {description}
        </Text>
        <div className="mt-2 flex items-center font-semibold text-gray-900">
          {toCurrency(Number(price))}
          {sale_price && (
            <del className="ps-1.5 text-[13px] font-normal text-gray-500">
              {toCurrency(Number(sale_price))}
            </del>
          )}
        </div>

        {colors?.length ? <ColorSwatch colors={product?.colors} /> : null}
      </div>
    </div>
  );
}
