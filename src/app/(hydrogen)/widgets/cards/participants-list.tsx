import { Title, Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import WidgetCard from '@/components/cards/widget-card';
import cn from '@/utils/class-names';
import TrophyIcon from '@/components/icons/trophy';
import { members } from '@/data/members-data';

const status: any = {
  online: 'success',
  busy: 'danger',
  away: 'warning',
};

export default function ParticipantsList() {
  return (
    <WidgetCard
      title={'Participants'}
      titleClassName="leading-none"
      headerClassName="mb-3 lg:mb-4"
      action={
        <Button variant="outline" size="sm" className="text-sm">
          View All
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-5">
        {members.slice(0, 7).map((user) => (
          <div key={user.name} className="flex items-center">
            <div className="relative inline-flex flex-shrink-0">
              <Avatar
                src={user.thumbnail}
                name={user.name}
                className="flex-shrink-0 shadow-sm xs:!h-10 xs:!w-10"
              />
              {user.status !== 'offline' ? (
                <Badge
                  renderAsDot
                  color={status[user.status]}
                  enableOutlineRing
                  className="absolute bottom-0 end-0 -translate-y-[56%]"
                />
              ) : null}
            </div>
            <div className="flex w-[calc(100%-44px)] items-center justify-between gap-2 ps-3.5">
              <div className="w-[calc(100%-40px)]">
                <Title as="h4" className="mb-1 text-sm font-semibold">
                  {user.name}
                </Title>
                <Text className="w-[98%] truncate text-gray-500">
                  {user.email}
                </Text>
              </div>

              <div
                className={cn(
                  'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10',
                  user.fill
                )}
              >
                <TrophyIcon className={cn('h-6 w-6', user.color)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
