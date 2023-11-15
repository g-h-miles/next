'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import hasSearchedParams from '@/utils/has-searched-params';
import { filterNftsData } from '@/data/filter-nfts-data';
// Note: using shuffle to simulate the filter effect
import shuffle from 'lodash/shuffle';
import { NftCard } from '@/components/cards/nft-card';

let CURRENT_PAGE = 12;

export default function NFTGrid() {
  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(CURRENT_PAGE);

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNextPage(nextPage + CURRENT_PAGE);
    }, 600);
  }

  const filteredData = hasSearchedParams()
    ? shuffle(filterNftsData)
    : filterNftsData;

  return (
    <>
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 @container @md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] @xl:gap-x-7 @xl:gap-y-9 @4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] @6xl:grid-cols-[repeat(auto-fill,minmax(364px,1fr))]">
        {filteredData
          ?.slice(0, nextPage)
          ?.map((nft, index) => (
            <NftCard nft={nft} key={`filterProduct-${index}`} />
          ))}
      </div>

      {nextPage < filteredData?.length && (
        <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
          <Button
            rounded="pill"
            isLoading={isLoading}
            onClick={() => handleLoadMore()}
            className="dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
}
