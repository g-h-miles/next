import cn from '@/utils/class-names';
import { Title } from '@/components/ui/text';

type UserInfoType = {
  name: string;
  address: string;
  email: string;
  country: string;
  phone: string;
  city: string;
};

const user1 = {
  name: 'Martha Hoeger',
  address: '756 Braxton Flats',
  email: 'dena41@yahoo.com',
  country: 'Zambia',
  phone: '(874) 580-9617',
  city: 'Randichester',
};
const user2 = {
  name: 'Brent Smith',
  address: '39801 Powlowski Forest',
  email: 'abraham.erdman56@hotmail.com',
  country: 'Cyprus',
  phone: '(381) 043-8154',
  city: 'Naderstead',
};

interface AddressesProps {
  className?: string;
}

export default function Addresses({ className }: AddressesProps) {
  return (
    <div className={cn('grid gap-6 @2xl:grid-cols-2 @3xl:gap-10', className)}>
      <AddressCard title="Sender’s Details" userInfo={user1} />
      <AddressCard title="Recipient’s Details" userInfo={user2} />
    </div>
  );
}

function AddressCard({
  title,
  className,
  userInfo,
}: {
  title: string;
  className?: string;
  userInfo: UserInfoType;
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-300 p-5 @3xl:p-7 ',
        className
      )}
    >
      <Title as="h3" className="text-base font-semibold sm:text-lg">
        {title}
      </Title>
      <ul className="mt-4 grid gap-3 @3xl:mt-5">
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Name :</span>
          <span>{userInfo.name}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Address :</span>
          <span>{userInfo.address}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Email :</span>
          <span>{userInfo.email.toLowerCase()}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Country :</span>
          <span>{userInfo.country}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Phone :</span>
          <span>{userInfo.phone}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">City :</span>
          <span>{userInfo.city}</span>
        </li>
      </ul>
    </div>
  );
}
