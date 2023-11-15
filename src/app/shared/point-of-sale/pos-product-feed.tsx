'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductClassicCard from '@/components/cards/product-classic-card';
import hasSearchedParams from '@/utils/has-searched-params';
// Note: using shuffle to simulate the filter effect
import shuffle from 'lodash/shuffle';
import { posData } from '@/data/pos-data';

const PER_PAGE = 12;

export default function POSProductsFeed() {
  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(PER_PAGE);

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNextPage(nextPage + PER_PAGE);
    }, 600);
  }

  const filteredData = hasSearchedParams() ? shuffle(posData) : posData;

  return (
    <>
      <div className="grid  grid-cols-2 gap-x-4 gap-y-6 @md:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] @xl:gap-x-6 @xl:gap-y-12 @4xl:grid-cols-[repeat(auto-fill,minmax(270px,1fr))] ">
        {filteredData
          ?.slice(0, nextPage)
          ?.map((product) => (
            <ProductClassicCard key={product.id} product={product} />
          ))}
      </div>

      {nextPage < filteredData?.length ? (
        <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
          <Button
            isLoading={isLoading}
            onClick={() => handleLoadMore()}
            className="dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            Load More
          </Button>
        </div>
      ) : null}
    </>
  );
}
