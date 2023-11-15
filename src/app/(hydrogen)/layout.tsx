'use client';
import { LAYOUT_OPTIONS } from '@/config/enums';
import { useLayout } from '@/hooks/use-layout';
import HydrogenLayout from '@/layouts/hydrogen/layout';
import HeliumLayout from '@/layouts/helium/helium-layout';
import BerylLiumLayout from '@/layouts/beryllium/beryllium-layout';

import { useIsMounted } from '@/hooks/use-is-mounted';
import LithiumLayout from '@/layouts/lithium/lithium-layout';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { layout } = useLayout();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  if (layout === LAYOUT_OPTIONS.HELIUM) {
    return <HeliumLayout>{children}</HeliumLayout>;
  }
  if (layout === LAYOUT_OPTIONS.LITHIUM) {
    return <LithiumLayout>{children}</LithiumLayout>;
  }
  if (layout === LAYOUT_OPTIONS.BERYLLIUM) {
    return <BerylLiumLayout>{children}</BerylLiumLayout>;
  }

  return <HydrogenLayout>{children}</HydrogenLayout>;
}
