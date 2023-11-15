import { Badge } from '@/components/ui/badge';

const data = [
  {
    Agency: 'Deprixa Miami',
    Office: 'Miami - Florida',
    'Logistics Service': 'Ocean Freight',
  },
  {
    'Invoice date': 'Jun 15, 2023',
    'Package Type': 'Flat small box',
    'Courier Company': 'Cargus',
  },
  {
    'Delivery time': 'TNT 10-14 DAYS',
    'Payment Method': 'Cash on delivery',
    'Shipping Mode': 'Next Day',
  },
];

export default function InvoiceDetails() {
  return (
    <div className="grid items-start rounded-xl border border-gray-300 p-5 @2xl:grid-cols-2 @3xl:grid-cols-3 @3xl:p-8 @5xl:grid-cols-4">
      <ul className="grid gap-3 @3xl:col-span-full @3xl:mb-2 @5xl:col-span-1 @5xl:mb-0">
        <li className="flex items-center gap-3 @3xl:justify-between @5xl:justify-start">
          <span className="font-semibold text-gray-900">Invoice No :</span>
          <span className="text-base font-semibold text-gray-900">
            #AWB235740
          </span>
        </li>
        <li className="flex items-center gap-3 @3xl:justify-between @5xl:justify-start">
          <span className="font-semibold text-gray-900">Package Status :</span>
          <Badge color="primary" rounded="md">
            Approved
          </Badge>
        </li>
        <li className="flex items-center gap-3 @3xl:justify-between @5xl:justify-start">
          <span className="font-semibold text-gray-900">Invoice Status :</span>
          <Badge color="success" rounded="md">
            Paid
          </Badge>
        </li>
      </ul>
      {data.map((item, index) => (
        <ul key={index} className="mt-3 grid gap-3 @5xl:mt-0">
          {Object.entries(item).map(([key, value]) => (
            <li key={key} className="flex items-center gap-3">
              <span className="font-semibold text-gray-900">{key} :</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
