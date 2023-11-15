import React from 'react';
import Spinner from '@/components/ui/spinner';

export default function SVGLoader({ fileName }: { fileName: string }) {
  const SvgComponent = React.lazy(
    () => import(`@/components/icons/${fileName}`)
  );

  return (
    <React.Suspense fallback={<Spinner />}>
      <SvgComponent />
    </React.Suspense>
  );
}
