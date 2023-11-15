'use client';

import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { formatDate } from '@/utils/format-date';
import { toCurrency } from '@/utils/to-currency';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import DateCell from '@/components/ui/date-cell';

export type DataType = {
  id: string;
  date: Date;
  paymentMethod: string;
  paidBy: string;
  paymentAmount: string;
};

export const tableData = [
  {
    id: '6e5188f6-8117-4dfa-aad9-1b1bf86a9fe4',
    date: new Date('2021-10-13T08:26:31.154Z'),
    paymentMethod: 'Debit Card',
    paidBy: 'Sender',
    paymentAmount: 137.0,
  },
  {
    id: 'c9f6334a-cc62-4a89-99a8-c6ba42ee5be4',
    date: new Date('2022-12-21T00:42:38.427Z'),
    paymentMethod: 'Cryptocurrency',
    paidBy: 'Third Party',
    paymentAmount: 168.0,
  },
  {
    id: '4f3cefe8-6aea-47cf-971d-7cb31b49a690',
    date: new Date('2021-10-19T02:00:09.103Z'),
    paymentMethod: 'Cash on Delivery (COD)',
    paidBy: 'Recipient',
    paymentAmount: 103.0,
  },
  {
    id: 'e5530af3-95a5-491a-a60e-4a083b70bab3',
    date: new Date('2022-03-30T14:54:40.458Z'),
    paymentMethod: 'Bank Transfer',
    paidBy: 'Third Party',
    paymentAmount: 182.0,
  },
  {
    id: 'a3221594-4953-407e-87bc-539aff5167e4',
    date: new Date('2022-02-23T20:16:06.325Z'),
    paymentMethod: 'Credit Card',
    paidBy: 'Sender',
    paymentAmount: 194.0,
  },
  {
    id: 'd3a985c8-8656-462a-a8ff-f5f26a5e9512',
    date: new Date('2022-07-23T12:23:57.404Z'),
    paymentMethod: 'Cash on Delivery (COD)',
    paidBy: 'Third Party',
    paymentAmount: 117.0,
  },
];

export const getColumns = () => [
  {
    title: <span className="ms-6 block">Payment Date</span>,
    dataIndex: 'date',
    key: 'date',
    width: 200,
    render: (value: Date) => <DateCell date={value} className="ms-6" />,
  },
  {
    title: <span className="block">Payment Method</span>,
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    width: 200,
    render: (paymentMethod: string) => (
      <span className="block">{paymentMethod}</span>
    ),
  },
  {
    title: <span className="block">Paid By</span>,
    dataIndex: 'paidBy',
    key: 'paidBy',
    width: 200,
    render: (paidBy: string) => <span className="block">{paidBy}</span>,
  },
  {
    title: <span className="ms-6 block">Payment Amount</span>,
    dataIndex: 'paymentAmount',
    key: 'paymentAmount',
    width: 200,
    render: (paymentAmount: string) => (
      <span className="ms-6 block">{toCurrency(paymentAmount)}</span>
    ),
  },
];

export default function RecentPayments() {
  return (
    <BasicTableWidget
      title="Recent Payments"
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
