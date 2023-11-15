'use client';

import Link from 'next/link';
import { Title } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import LoggedInDevices from './logged-in-devices/table';
import HorizontalFormBlockWrapper from './horiozontal-block';
import GithubIcon from '@/components/icons/github';
import TeamsIcon from '@/components/icons/teams';
import FigmaIcon from '@/components/icons/figma';
import AddTeamMemberModalView from './modal/add-team-member';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { loggedInDeviceData } from '@/data/logged-in-device';
import { PiPlusBold } from 'react-icons/pi';

const currentActiveTeams = [
  {
    name: 'GitHub',
    url: 'https://github.com/RedQ',
    icon: <GithubIcon className="h-6 w-6" />,
  },
  {
    name: 'Teams',
    url: 'https://teams.microsoft.com/redQ',
    icon: <TeamsIcon className="h-6 w-6" />,
  },
  {
    name: 'Figma',
    url: 'https://figma.com/redQ',
    icon: <FigmaIcon className="h-6 w-6" />,
  },
];

export default function TeamSettingsView() {
  const { openModal } = useModal();
  return (
    <div className='@container'>
      <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Teams"
        description="Manage your teams & user permissions."
        titleClassName="text-xl font-semibold"
      >
        <div className="col-span-2 flex justify-end gap-4">
          <Button
            type="button"
            className="dark:bg-gray-100 dark:text-white"
            onClick={() =>
              openModal({
                view: <AddTeamMemberModalView />,
              })
            }
          >
            <PiPlusBold className="me-1.5 h-4 w-4" />
            Add Member
          </Button>
        </div>
      </HorizontalFormBlockWrapper>

      <HorizontalFormBlockWrapper
        className="pb-0 sm:pb-10"
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="On Teams"
        description="You’re currently on these teams."
      >
        {currentActiveTeams.map((currentTeam, index) => {
          return (
            <div
              key={`team-${index}`}
              className="col-span-2 flex items-center gap-3 border-b border-gray-300 py-6 last:border-none"
            >
              <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-300">
                {currentTeam.icon}
              </div>
              <div className="flex flex-grow flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Title as="h3" className="mb-1 text-sm font-semibold">
                    {currentTeam.name}
                  </Title>
                  <Link
                    href={currentTeam.url}
                    className="truncate text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {currentTeam.url}
                  </Link>
                </div>
                <Button
                  type="button"
                  variant="text"
                  className="w-auto flex-shrink-0 justify-start p-0 text-sm font-semibold text-gray-900 sm:justify-center"
                >
                  Leave
                </Button>
              </div>
            </div>
          );
        })}
      </HorizontalFormBlockWrapper>

      <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Where you’re logged in"
        description="We’ll alert you via olivia@untitledui.com if there is any unusual activity on your account."
        descriptionClassName="max-w-[352px]"
        className="border-0 pb-0"
      >
        <LoggedInDevices
          data={loggedInDeviceData}
          className="@xs:col-span-full"
        />
      </HorizontalFormBlockWrapper>
    </div>
  );
}
