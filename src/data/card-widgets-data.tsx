import {
  PiBankDuotone,
  PiFileTextDuotone,
  PiGiftDuotone,
  PiPulseDuotone,
} from 'react-icons/pi';

export const widgetCardStat = [
  {
    title: 'Revenue',
    metric: '$2780.00',
    bgColor: 'bg-[#3872FA]',
    textColor: 'text-[#3872FA]',
    icon: <PiBankDuotone className="h-6 w-6" />,
  },
  {
    title: 'Profit',
    metric: '$2780.00',
    bgColor: 'bg-[#10b981]',
    textColor: 'text-[#10b981]',
    icon: <PiGiftDuotone className="h-6 w-6" />,
  },
  {
    title: 'Invoices',
    metric: '$2780.00',
    bgColor: 'bg-[#f1416c]',
    textColor: 'text-[#f1416c]',
    icon: <PiFileTextDuotone className="h-6 w-6" />,
  },
  {
    title: 'Expense',
    metric: '$2780.00',
    bgColor: 'bg-[#7928ca]',
    textColor: 'text-[#7928ca]',
    icon: <PiPulseDuotone className="h-6 w-6" />,
  },
];

export const widgetData = [
  {
    name: 'Sales',
    color: '#3872FA',
    stat: widgetCardStat,
  },
  {
    name: 'Profit',
    color: '#10b981',
    statTitle: 'Profit',
    statMetric: '$2780.00',
    stat: widgetCardStat,
  },
  {
    name: 'Customer',
    color: '#f1416c',
    statTitle: 'Overdue Invoices',
    statMetric: '$2780.00',
    stat: widgetCardStat,
  },
  {
    name: 'Inventory',
    color: '#7928ca',
    statTitle: 'Expense',
    statMetric: '$2780.00',
    stat: widgetCardStat,
  },
];

export const chartData = [
  {
    day: 'Mon',
    bounceRate: 40,
    pageSession: 40,
  },
  {
    day: 'Tue',
    bounceRate: 90,
    pageSession: 30,
  },
  {
    day: 'Thu',
    bounceRate: 64,
    pageSession: 43,
  },
  {
    day: 'Wed',
    bounceRate: 99,
    pageSession: 50,
  },
  {
    day: 'Fri',
    bounceRate: 50,
    pageSession: 70,
  },
  {
    day: 'Sun',
    bounceRate: 70,
    pageSession: 80,
  },
];
