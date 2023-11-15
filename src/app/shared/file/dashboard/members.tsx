import Image from 'next/image';
import { Title, Text } from '@/components/ui/text';
import WidgetCard from '@/components/cards/widget-card';
import TrophyIcon from '@/components/icons/trophy';
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';
import { members } from '@/data/members-data';

export default function Members({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Title
        as="h3"
        className="mb-3 text-lg font-semibold text-gray-900 xl:text-xl 2xl:mb-5"
      >
        Members
      </Title>
      <WidgetCard title="" headerClassName="hidden" className="p-0 lg:p-0">
        <SimpleBar style={{ maxHeight: 450 }}>
          <div className="p-5 lg:p-7">
            <div className="-me-2 grid gap-4 @sm:gap-5">
              {members.map((member) => (
                <div
                  key={member.name + member.id}
                  className="flex items-start pe-2"
                >
                  <div className="relative me-3 h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100 @sm:h-12 @sm:w-12">
                    <Image
                      src={member.thumbnail}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <div>
                      <Text className="text-sm font-semibold text-gray-900 dark:text-gray-700 2xl:text-base">
                        {member.name}
                      </Text>
                      <Text className="text-gray-500">{member.email}</Text>
                    </div>
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full',
                        member.fill
                      )}
                    >
                      <TrophyIcon className={cn('h-6 w-6', member.color)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SimpleBar>
      </WidgetCard>
    </div>
  );
}
