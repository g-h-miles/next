'use client';

import Image from 'next/image';
import cn from '@/utils/class-names';
import UserInfo from '@/app/shared/logistics/customer-profile/user-info';
import RecentPayments from '@/app/shared/logistics/customer-profile/recent-payments';
import RecentShipments from '@/app/shared/logistics/customer-profile/recent-shipments';
import PersonalInformation from '@/app/shared/logistics/customer-profile/personal-info';
import { getRandomArrayElement } from '@/utils/get-random-array-element';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import { useBerylliumSidebars } from '@/layouts/beryllium/beryllium-utils';

interface CustomerProfileProps {
  className?: string;
}

export default function CustomerProfile({ className }: CustomerProfileProps) {
  const { layout } = useLayout();
  const { expandedLeft } = useBerylliumSidebars();
  const coverPhoto = getRandomArrayElement([
    '1648583076906-60338fa01f07',
    '1655962342982-57cae2d061cf',
  ]);

  return (
    <div className={cn('@container', className)}>
      <figure
        className={cn(
          'relative -mx-6 flex h-[150px] items-end justify-end bg-gray-50  bg-gradient-to-r from-[#F8E1AF] to-[#F6CFCF] @5xl:h-[200px] 3xl:-mx-8 3xl:h-[250px] 4xl:-mx-10 4xl:h-[300px]',
          layout === LAYOUT_OPTIONS.HELIUM &&
            'xl:-ms-[19px] 2xl:-ms-6 3xl:-ms-6 4xl:-ms-9',
          layout === LAYOUT_OPTIONS.BERYLLIUM &&
            expandedLeft &&
            'xl:-ms-3 3xl:-ms-[10px] 4xl:-ms-[11px]'
        )}
      >
        <Image
          alt="Mountains"
          src={`https://images.unsplash.com/photo-${coverPhoto}?auto=format&fit=crop&w=1920&q=80`}
          // placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </figure>
      <UserInfo />
      <PersonalInformation />
      <RecentShipments />
      <RecentPayments />
    </div>
  );
}
