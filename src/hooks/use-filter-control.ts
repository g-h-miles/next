'use client';

import isEqual from 'lodash/isEqual';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

//TODO: proper typescript support fix
type State<T> = T & {
  reset?: T;
  sort?: string;
  page?: string | number;
  limit?: string | number;
};

type Action<T, P> = { type: keyof State<T>; payload: P };

export function useFilterControls<StateType, ActionType>(
  initialState: State<StateType>
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string | string[], value: string | string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!Array.isArray(name)) {
        params.set(name, value.toString());
      } else {
        name.forEach((n, idx) => params.set(n, value[idx]));
      }
      return params.toString();
    },
    [searchParams]
  );

  const onSort = useCallback(
    (key: string) =>
      router.push(
        `${pathname}?${createQueryString(
          ['sort', 'page'],
          [isEqual(searchParams.get('sort'), key) ? `-${key}` : key, '1']
        )}
      `
      ),
    [createQueryString, pathname, router, searchParams]
  );

  const paginate = useCallback(
    (pageNumber: string | number) =>
      router.push(
        `${pathname}?${createQueryString('page', pageNumber.toString())}`
      ),
    [createQueryString, pathname, router]
  );

  const applyFilter = useCallback(
    (key: string, payload: string | any[]) => {
      const params = createQueryString(key, payload);
      return router.push(`${pathname}?${params}`);
    },
    [createQueryString, pathname, router]
  );

  const clearFilter = (key: string[]) => {
    let url = new URL(location.href);
    key.forEach((item) => url.searchParams.delete(item));
    router.push(`${pathname}${url.search}`);
  };

  const reset = useCallback(
    function setResetValue<T extends URLSearchParams>(resetValue?: T) {
      const params = new URLSearchParams(resetValue);
      return router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router]
  );

  const parsedSearchParams = Object.fromEntries(searchParams);
  const state = {
    ...initialState,
    ...Object.fromEntries(
      Object.entries(parsedSearchParams).map(([k, v]) => {
        if (k.includes('date_range') || k.includes('_date')) {
          return [k, v?.toString().split(';')];
        }
        return [k, v];
      })
    ),
  };

  const params = Object.entries(parsedSearchParams).reduce(
    (acc, [k, v]) => ({ ...acc, ...getQueryParams(k, v) }),
    {}
  );

  return {
    params,
    state,
    onSort,
    paginate,
    applyFilter,
    clearFilter,
    reset,
  };
}

function getQueryParams(key: string, payload: any) {
  if (key.includes('date_range') || key.includes('_date')) {
    const [start, end] = payload.split(';');
    if (start && end) {
      return { [`filter[${key}]`]: payload };
    }
    return {};
  }

  if (['page', 'sort', 'limit'].includes(key)) {
    return { [key]: payload };
  }
  return { [`filter[${key}]`]: payload };
}
