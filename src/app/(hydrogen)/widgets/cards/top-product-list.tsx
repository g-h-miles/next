import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import { Button } from '@/components/ui/button';
import { topProductList } from '@/data/top-products-data';
import Rating from '@/components/rating';

export default function TopProductList() {
  return (
    <WidgetCard
      title={'Top Products'}
      titleClassName="leading-none"
      headerClassName="mb-3 lg:mb-4"
      action={
        <Button variant="outline" size="sm" className="text-sm">
          View All
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-5">
        {topProductList.map((product) => (
          <div
            key={product.title + product.id}
            className="flex items-start pe-2"
          >
            <div className="relative me-3 h-11 w-11 shrink-0 overflow-hidden rounded bg-gray-100">
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
                <Text className="font-lexend text-sm font-semibold text-gray-900 dark:text-gray-700">
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
