'use client';

import React from 'react';

// Note: move to hook
export function useElementRePosition({ ref, activeTab }: any) {
  React.useEffect(() => {
    function handleScrollLeft() {
      // activeTab + 1 is to prevent 0 index case
      if (ref.current && activeTab + 1) {
        const tabElement = ref.current.children[activeTab] as HTMLElement;
        const containerWidth = ref.current.offsetWidth;
        const tabWidth = tabElement.offsetWidth;
        const tabOffsetLeft = tabElement.offsetLeft;
        const currentScrollLeft = ref.current.scrollLeft;

        let newScrollLeft = currentScrollLeft;

        if (tabWidth + tabOffsetLeft > currentScrollLeft + containerWidth) {
          newScrollLeft = tabOffsetLeft + tabWidth - containerWidth;
        } else if (tabOffsetLeft < currentScrollLeft) {
          newScrollLeft = tabOffsetLeft;
        }

        // Set the new scroll position
        ref.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      }
    }
    handleScrollLeft();

    window.addEventListener('resize', handleScrollLeft);
    // clear event
    return () => {
      window.removeEventListener('resize', handleScrollLeft);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
}
