import Link from 'next/link';
import { routes } from '@/config/routes';
import { Title } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import ProductModernCard from '@/components/cards/product-modern-card';
import { similarProducts } from '@/data/similar-products-data';

export default function ProductDetailsRelatedProducts() {
  return (
    <section className="pt-10 @5xl:pt-12 @7xl:pt-14">
      <header className="mb-4 flex items-center justify-between">
        <Title as="h3" className="font-semibold">
          Similar Products
        </Title>
        <Link href={routes.eCommerce.shop}>
          <Button tag="span" variant="text" className="py-0 underline">
            See All
          </Button>
        </Link>
      </header>
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 @md:grid-cols-2 @xl:grid-cols-3 @xl:gap-y-9 @5xl:grid-cols-4 @5xl:gap-x-7 @7xl:grid-cols-5">
        {similarProducts.map((product) => (
          <ProductModernCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
