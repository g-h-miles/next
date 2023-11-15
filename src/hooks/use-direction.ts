'use client';

// import { useEffect } from 'react';
// import { useLocalStorage } from '@/hooks/use-local-storage';

// export function useDirection() {
//   const [direction, setDirection] = useLocalStorage('iso-direction', 'ltr');

//   useEffect(() => {
//     document.documentElement.dir = direction ?? 'ltr';

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [direction]);

//   return {
//     direction: direction ? direction : 'ltr',
//     setDirection,
//   };
// }

import { atom, useAtom } from 'jotai';

// 1. set initial atom for isomorphic direction
const isomorphicDirectionAtom = atom(
  typeof window !== 'undefined' ? localStorage.getItem('iso-direction') : 'ltr'
);

const isomorphicDirectionAtomWithPersistence = atom(
  (get) => get(isomorphicDirectionAtom),
  (get, set, newStorage: any) => {
    set(isomorphicDirectionAtom, newStorage);
    localStorage.setItem('iso-direction', newStorage);
  }
);

// 2. useDirection hook to check which direction is available
export function useDirection() {
  const [direction, setDirection] = useAtom(
    isomorphicDirectionAtomWithPersistence
  );

  return {
    direction: direction === null ? 'ltr' : direction,
    setDirection,
  };
}
