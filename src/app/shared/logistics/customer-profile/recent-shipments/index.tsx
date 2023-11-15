'use client';

import Image from 'next/image';
import cn from '@/utils/class-names';
import DateCell from '@/components/ui/date-cell';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';

export type DataType = {
  id: string;
  origin: {
    country: string;
    countryCode: string;
  };
  destination: {
    country: string;
    countryCode: string;
  };
  date: Date;
  weight: string;
};

export const tableData = [
  {
    id: 'c0f03a35-8b04-441c-bbf4-d81d50e01120',
    origin: {
      country: 'French Guiana',
      countryCode: 'GF',
    },
    destination: {
      country: 'Saint Barthelemy',
      countryCode: 'BL',
    },
    date: '2021-11-29T02:10:59.311Z',
    weight: '1 lbs / 0.45 kgs',
  },
  {
    id: 'a3ba5e1d-0531-48a0-9c33-4e3380351b16',
    origin: {
      country: 'Saint Kitts and Nevis',
      countryCode: 'KN',
    },
    destination: {
      country: 'Guinea-Bissau',
      countryCode: 'GW',
    },
    date: '2022-05-21T01:14:55.058Z',
    weight: '1 lbs / 0.45 kgs',
  },
  {
    id: '9eef3525-3368-482a-817b-d20dc34c29f7',
    origin: {
      country: 'Papua New Guinea',
      countryCode: 'PG',
    },
    destination: {
      country: 'Virgin Islands, U.S.',
      countryCode: 'VI',
    },
    date: '2022-03-01T11:29:01.633Z',
    weight: '1 lbs / 0.45 kgs',
  },
  {
    id: '8d23d8db-035a-4902-a7df-912394cefa8f',
    origin: {
      country: 'Kyrgyz Republic',
      countryCode: 'KG',
    },
    destination: {
      country: 'Malta',
      countryCode: 'MT',
    },
    date: '2021-07-25T17:09:45.291Z',
    weight: '1 lbs / 0.45 kgs',
  },
  {
    id: 'd83b92fb-bac0-4bda-9f8f-94a7b0ecc374',
    origin: {
      country: 'Kyrgyz Republic',
      countryCode: 'KG',
    },
    destination: {
      country: 'Norfolk Island',
      countryCode: 'NF',
    },
    date: '2021-08-15T13:26:14.715Z',
    weight: '1 lbs / 0.45 kgs',
  },
  {
    id: '1e81b38f-7928-4d02-83b0-9a794cc983fd',
    origin: {
      country: 'Monaco',
      countryCode: 'MC',
    },
    destination: {
      country: 'Grenada',
      countryCode: 'GD',
    },
    date: '2022-11-20T15:28:25.653Z',
    weight: '1 lbs / 0.45 kgs',
  },
];

export const getColumns = () => [
  {
    title: <span className="ms-6 block">Origin</span>,
    dataIndex: 'origin',
    key: 'origin',
    width: 200,
    render: ({
      country,
      countryCode,
    }: {
      country: string;
      countryCode: string;
    }) => (
      <div className="ms-6 flex items-center gap-2">
        <figure className="relative h-10 w-10">
          <Image
            fill
            quality={100}
            alt={`${country} Flag icon`}
            className="object-contain"
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
          />
        </figure>

        <span className="whitespace-nowrap">{country}</span>
      </div>
    ),
  },
  {
    title: <span className="block">Destination</span>,
    dataIndex: 'destination',
    key: 'destination',
    width: 200,
    render: ({
      country,
      countryCode,
    }: {
      country: string;
      countryCode: string;
    }) => (
      <div className="flex items-center gap-2">
        <figure className="relative h-10 w-10">
          <Image
            fill
            quality={100}
            alt={`${country} Flag icon`}
            className="object-contain"
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
          />
        </figure>

        <span className="whitespace-nowrap">{country}</span>
      </div>
    ),
  },
  {
    title: <span className="block">Date</span>,
    dataIndex: 'date',
    key: 'date',
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <span className="block">Weight</span>,
    dataIndex: 'weight',
    key: 'weight',
    width: 200,
    render: (weight: string) => <span className="block">{weight}</span>,
  },
];

export default function RecentShipments() {
  return (
    <BasicTableWidget
      title="Recent Shipment"
      className={cn(
        'mb-3 mt-14 pb-0 lg:pb-0 [&_.rc-table-row:last-child_td]:border-b-0'
      )}
      data={tableData}
      getColumns={getColumns}
      noGutter
      scroll={{
        x: 900,
      }}
    />
  );
}
