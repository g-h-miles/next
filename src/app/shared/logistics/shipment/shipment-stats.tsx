'use client';

import cn from '@/utils/class-names';
import { toCurrency } from '@/utils/to-currency';
import ShipWithContainer from '@/components/icons/ship-with-container';
import ShippingBox from '@/components/icons/shipping-box';
import CargoPallet from '@/components/icons/cargo-pallet';
import MoneyInHand from '@/components/icons/money-in-hand';
import Containers from '@/components/icons/containers';
import SimpleBar from '@/components/ui/simplebar';

type StatType = {
  id: number;
  count: number | string;
  icon: React.ReactNode;
  label: string;
};

const data = [
  {
    id: 1,
    count: 570,
    icon: <ShipWithContainer />,
    label: 'Shipment Registered',
  },
  {
    id: 2,
    count: 380,
    icon: <ShippingBox />,
    label: 'Shipments Delivered',
  },
  {
    id: 3,
    count: 118,
    icon: <CargoPallet />,
    label: 'Shipment Consolidated',
  },
  {
    id: 4,
    count: toCurrency(5534),
    icon: <MoneyInHand />,
    label: 'Accounts Receivable',
  },
  {
    id: 5,
    count: 130999,
    icon: <Containers />,
    label: 'Total Shipments',
  },
];

interface IndexProps {
  className?: string;
}

export default function ShipmentStats({ className }: IndexProps) {
  return (
    <SimpleBar>
      <div className="grid grid-flow-col gap-5">
        {data.map((item) => (
          <ShipmentStat key={item.id} {...item} />
        ))}
      </div>
    </SimpleBar>
  );
}

export function ShipmentStat({ count, icon, label }: StatType) {
  return (
    <div
      className={cn(
        'grid w-72 grid-cols-[56px_1fr] items-start gap-4 rounded-lg border border-gray-300 px-6 py-6 3xl:w-auto'
      )}
      // style={{ borderColor: bgColor }}
    >
      <figure className="relative flex items-center justify-center rounded-full [&>svg]:h-12 [&>svg]:w-12">
        {icon}
      </figure>
      <div>
        <p className="text-2xl font-bold text-gray-900">{count}</p>
        <p className="mt-0.5 text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}
