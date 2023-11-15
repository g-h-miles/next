'use client';

import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

export function useCreateQueryString() {
  const searchParams = useSearchParams();

  // example https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return { createQueryString };
}
