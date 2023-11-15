'use client';

import { HeaderCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Title, Text } from '@/components/ui/text';
import dayjs from 'dayjs';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

function getEngagementRate(engagementRate: number) {
  if (engagementRate > 70) {
    return (
      <div className="flex items-center justify-end">
        <Badge color="success" renderAsDot />
        <Text className="ms-2 font-medium text-green-dark">
          {engagementRate}%
        </Text>
      </div>
    );
  }
  if (engagementRate > 40) {
    return (
      <div className="flex items-center justify-end">
        <Badge color="warning" renderAsDot />
        <Text className="ms-2 font-medium text-orange-dark">
          {engagementRate}%
        </Text>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-end">
      <Badge color="danger" renderAsDot />
      <Text className="ms-2 font-medium text-red-dark">{engagementRate}%</Text>
    </div>
  );
}

function getBounceRate(bounceRate: number) {
  if (bounceRate > 30) {
    return (
      <div className="flex items-center justify-end">
        <Badge color="danger" renderAsDot />
        <Text className="ms-2 font-medium text-red-dark">{bounceRate}%</Text>
      </div>
    );
  }
  if (bounceRate > 20) {
    return (
      <div className="flex items-center justify-end">
        <Badge color="warning" renderAsDot />
        <Text className="ms-2 font-medium text-orange-dark">{bounceRate}%</Text>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-end">
      <Badge color="success" renderAsDot />
      <Text className="ms-2 font-medium text-green-dark">{bounceRate}%</Text>
    </div>
  );
}

function getChartColorByEngagementRate(trafficShare: number) {
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
    title: <HeaderCell title="Channel" className="ps-2 lg:ps-4" />,
    dataIndex: 'channel',
    key: 'channel',
    width: 100,
    hidden: 'channel',
    render: (channel: string) => (
      <div className="flex items-center ps-2 lg:ps-4">
        <Title as="h6" className="mb-0.5 !text-sm font-semibold">
          {channel}
        </Title>
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="New Users"
        sortable
        align="right"
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'users'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('users'),
    dataIndex: 'users',
    key: 'users',
    width: 150,
    render: (value: number) => (
      <Text className="text-right font-medium text-gray-700 rtl:text-left">
        {value}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Engaged Sessions" align="right" />,
    dataIndex: 'sessions',
    key: 'sessions',
    width: 150,
    render: (value: number) => (
      <Text className="text-right font-medium text-gray-700 rtl:text-left">
        {value}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Engagement Rate" align="right" />,
    dataIndex: 'engagementRate',
    key: 'engagementRate',
    width: 150,
    render: (value: number) => (
      <div className="text-right rtl:text-left">{getEngagementRate(value)}</div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Engagement Time"
        align="right"
        sortable
        ascending={
          sortConfig?.direction === 'asc' &&
          sortConfig?.key === 'engagementTime'
        }
      />
    ),
    dataIndex: 'engagementTime',
    key: 'engagementTime',
    width: 150,
    onHeaderCell: () => onHeaderCellClick('engagementTime'),
    render: (value: Date) => (
      <div className="text-right rtl:text-left">
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
    title: <HeaderCell title="Bounce Rate" align="right" />,
    dataIndex: 'bounceRate',
    key: 'bounceRate',
    width: 150,
    render: (value: number) => (
      <div className="text-right rtl:text-left">{getBounceRate(value)}</div>
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
        <div className="ms-auto h-8 w-full max-w-[280px] pe-2 lg:pe-4 4xl:h-9">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chart}
              margin={{
                left: -30,
              }}
            >
              <defs>
                <linearGradient
                  id={`deviceSessionsMobile-${row.id}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#F0F1FF"
                    className=" [stop-opacity:0.25] dark:[stop-opacity:0.2]"
                  />
                  <stop
                    offset="95%"
                    stopColor={getChartColorByEngagementRate(
                      row.engagementRate
                    )}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="bump"
                dataKey="count"
                stroke={getChartColorByEngagementRate(row.engagementRate)}
                strokeWidth={1.8}
                fillOpacity={1}
                fill={`url(#deviceSessionsMobile-${row.id})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    ),
  },
];
