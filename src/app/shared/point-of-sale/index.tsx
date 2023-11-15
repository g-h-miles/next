import POSProductCategory from '@/app/shared/point-of-sale/pos-product-category';
import POSProductsFeed from '@/app/shared/point-of-sale/pos-product-feed';

export default function POSPageView() {
  return (
    <div className="@container">
      <POSProductCategory />
      <POSProductsFeed />
    </div>
  );
}
