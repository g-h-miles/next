import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import { Button } from '@/components/ui/button';
import { teams as apps } from '@/data/teams-data';
import { PiArrowLineUpRightBold } from 'react-icons/pi';

export default function RecentAppList() {
  return (
    <WidgetCard
      title={'Recent Apps'}
      titleClassName="leading-none"
      headerClassName="mb-3 lg:mb-4"
      action={
        <Button variant="outline" size="sm" className="text-sm">
          View All
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-5">
        {apps.map((app) => (
          <div key={app.name} className="flex items-start">
            <div className="me-3 shrink-0">{app.icon}</div>
            <div className="flex w-[calc(100%-48px)] items-center justify-between">
              <div className="w-[calc(100%-40px)]">
                <Title as="h4" className="mb-1 text-sm font-semibold">
                  {app.name}
                </Title>
                <Text className="w-[94%] truncate text-gray-500">
                  {app.content}
                </Text>
              </div>
              <div>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow noindex"
                  className="inline-flex rounded-md border border-gray-200 p-2"
                >
                  <PiArrowLineUpRightBold />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
