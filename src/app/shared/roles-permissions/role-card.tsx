'use client';

import Image from 'next/image';
import { PiDotsThreeBold } from 'react-icons/pi';
import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';
import UserCog from '@/components/icons/user-cog';
import { ROLES } from '@/config/constants';
import { ActionIcon } from '@/components/ui/action-icon';
import { Dropdown, DropdownItem } from '@/components/ui/dropdown ';
import { useModal } from '@/app/shared/modal-views/use-modal';
import ModalButton from '@/app/shared/modal-button';
import EditRole from '@/app/shared/roles-permissions/edit-role';
import CreateUser from '@/app/shared/roles-permissions/create-user';

type User = {
  id: number;
  role: keyof typeof ROLES;
  avatar: string;
};

interface RoleCardProps {
  name: string;
  color?: string;
  className?: string;
  icon?: React.ReactNode;
  users: User[];
}

export default function RoleCard({
  name,
  color,
  users,
  className,
}: RoleCardProps) {
  const { openModal } = useModal();
  return (
    <div className={cn('rounded-lg border border-gray-200 p-6', className)}>
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-content-center rounded-lg text-white"
            style={{
              backgroundColor: color,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.935 8.49268 21.9916 8.96506 21.9989 10.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.44493 20.4927 10.5 20.5H11"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M15.59 18.9736C14.9612 19.3001 13.3126 19.9668 14.3167 20.801C14.8072 21.2085 15.3536 21.4999 16.0404 21.4999H19.9596C20.6464 21.4999 21.1928 21.2085 21.6833 20.801C22.6874 19.9668 21.0388 19.3001 20.41 18.9736C18.9355 18.208 17.0645 18.208 15.59 18.9736Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M20 14.4378C20 15.508 19.1046 16.3756 18 16.3756C16.8954 16.3756 16 15.508 16 14.4378C16 13.3676 16.8954 12.5 18 12.5C19.1046 12.5 20 13.3676 20 14.4378Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </span>
          <Title as="h4" className="font-medium">
            {name}
          </Title>
        </div>
        {/* <button className="ml-auto h-7 w-7 rounded px-0.5 transition duration-300 hover:bg-gray-100">
          <PiDotsThreeBold size={26} />
        </button> */}
        <Dropdown
          className={className}
          trigger={
            <ActionIcon variant="text" className="ml-auto h-auto w-auto p-1">
              <PiDotsThreeBold className="h-auto w-6" />
            </ActionIcon>
          }
          dropdownClassName="w-48 z-30 right-0 p-2 gap-1 grid mt-0"
        >
          <DropdownItem
            className="gap-2 p-2 text-xs sm:text-sm"
            activeClassName="bg-gray-100 rounded-md"
          >
            {({ active }) => (
              <span
                onClick={() =>
                  openModal({
                    view: <CreateUser />,
                  })
                }
              >
                Add User
              </span>
            )}
          </DropdownItem>
          <DropdownItem
            className="gap-2 p-2 text-xs sm:text-sm"
            activeClassName="bg-gray-100 rounded-md"
          >
            {({ active }) => <>Rename</>}
          </DropdownItem>
          <DropdownItem
            className="gap-2 p-2 text-xs sm:text-sm"
            activeClassName="bg-gray-100 rounded-md"
          >
            {({ active }) => <>Remove Role</>}
          </DropdownItem>
        </Dropdown>
      </header>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center">
          {users?.slice(0, 4).map((user) => (
            <figure
              key={user.id}
              className="relative z-10 -ml-1.5 h-8 w-8 rounded-full border-2 border-white"
            >
              <Image
                src={user.avatar}
                alt="user avatar"
                fill
                className="rounded-full"
              />
            </figure>
          ))}
        </div>
        <span>Total {users.length} users</span>
      </div>
      <ModalButton
        customSize="700px"
        variant="outline"
        label="Edit Role"
        icon={<UserCog className="h-5 w-5" />}
        view={<EditRole />}
        className="items-center gap-1 text-gray-800 @lg:w-full lg:mt-6"
      />
    </div>
  );
}
