'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Title, Text } from '@/components/ui/text';
import dayjs from 'dayjs';
import { ResponsiveContainer, BarChart, Bar } from 'recharts';
import { PiArrowSquareOut } from 'react-icons/pi';
import { RoundedTopBarFill } from '@/components/charts/rounded-topbar';

const formatter = Intl.NumberFormat('en', {
  notation: 'compact',
});

function getTrafficShare(trafficShare: number) {
  if (trafficShare > 70) {
    return (
      <div className="flex items-center">
        <Badge color="success" renderAsDot />
        <Text className="ms-2 font-medium text-green-dark">
          {trafficShare}%
        </Text>
      </div>
    );
  }
  if (trafficShare > 40) {
    return (
      <div className="flex items-center">
        <Badge color="warning" renderAsDot />
        <Text className="ms-2 font-medium text-orange-dark">
          {trafficShare}%
        </Text>
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <Badge color="danger" renderAsDot />
      <Text className="ms-2 font-medium text-red-dark">{trafficShare}%</Text>
    </div>
  );
}

function getChartColorByTrafficShare(trafficShare: number) {
  if (trafficShare > 70) {
    return '#16a679';
  }
  if (trafficShare > 40) {
    return '#d89b0d';
  }
  return '#c5280c';
}

type Columns = {
  sortConfig?: any;
  onHeaderCellClick: (value: string) => void;
};

export const getColumns = ({ sortConfig, onHeaderCellClick }: Columns) => [
  {
    title: (
      <HeaderCell
        title="Pages"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'pages'
        }
        className="ps-2 lg:ps-4"
      />
    ),
    dataIndex: 'pages',
    key: 'pages',
    width: 200,
    onHeaderCell: () => onHeaderCellClick('pages'),
    render: (pages: string, row: any) => (
      <>
        <div className="flex items-center ps-2 lg:ps-4">
          <Title as="h6" className="mb-0.5 me-1.5 !text-sm font-semibold">
            {pages}
          </Title>
          <PiArrowSquareOut strokeWidth={4} className="h-4 w-4" />
        </div>
      </>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Traffic Share"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'trafficShare'
        }
      />
    ),
    dataIndex: 'trafficShare',
    key: 'trafficShare',
    width: 150,
    onHeaderCell: () => onHeaderCellClick('trafficShare'),
    render: (value: number) => <div className="">{getTrafficShare(value)}</div>,
  },
  {
    title: (
      <HeaderCell
        title="Unique Previews"
        sortable
        ascending={
          sortConfig?.direction === 'asc' &&
          sortConfig?.key === 'uniquePreviews'
        }
      />
    ),
    dataIndex: 'uniquePreviews',
    key: 'uniquePreviews',
    width: 150,
    onHeaderCell: () => onHeaderCellClick('uniquePreviews'),
    render: (value: number) => (
      <div className="font-medium">{formatter.format(value)}</div>
    ),
  },
  {
    title: <HeaderCell title="AVG. SESSION DURATION" />,
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 150,
    render: (value: Date) => (
      <div className="">
        <Text className="mb-1 font-medium text-gray-700">
          {dayjs(value).format('mm')}m {dayjs(value).format('ss')}s
        </Text>
        <Text className="text-[13px] text-gray-500">
          {dayjs(value).format('DD MMM YYYY')}
        </Text>
      </div>
    ),
  },
  {
    title: (
      <HeaderCell title="Activity" align="right" className="pe-2 lg:pe-4" />
    ),
    dataIndex: 'chart',
    key: 'chart',
    width: 200,
    render: (chart: any, row: any) => (
      <>
        <div className="ms-auto h-8 w-full max-w-[240px] pe-2 lg:pe-4 4xl:h-9">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart barSize={4} barGap={3} data={chart}>
              <Bar
                dataKey="count"
                fill={getChartColorByTrafficShare(row.trafficShare)}
                shape={<RoundedTopBarFill cornerRadius={2} />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
    ),
  },
];
