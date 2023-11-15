'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductModernCard from '@/components/cards/product-modern-card';
import { modernProductsGrid } from '@/data/shop-products';
import hasSearchedParams from '@/utils/has-searched-params';
// Note: using shuffle to simulate the filter effect
import shuffle from 'lodash/shuffle';

let countPerPage = 12;

export default function ProductFeed() {
  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(countPerPage);

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNextPage(nextPage + countPerPage);
    }, 600);
  }

  const filteredData = hasSearchedParams()
    ? shuffle(modernProductsGrid)
    : modernProductsGrid;

  return (
    <div className='@container'>
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 @md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] @xl:gap-x-7 @xl:gap-y-9 @4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] @6xl:grid-cols-[repeat(auto-fill,minmax(364px,1fr))]">
        {filteredData
          ?.slice(0, nextPage)
          ?.map((product, index) => (
            <ProductModernCard key={product.id} product={product} />
          ))}
      </div>

      {nextPage < filteredData?.length && (
        <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
          <Button
            isLoading={isLoading}
            onClick={() => handleLoadMore()}
            className="dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
