import Image from 'next/image';
import { PiEnvelopeSimple, PiPhone, PiStarFill } from 'react-icons/pi';
import cn from '@/utils/class-names';
import { Title } from '@/components/ui/text';
import { toCurrency } from '@/utils/to-currency';
import { Button } from '@/components/ui/button';
import SimpleBar from '@/components/ui/simplebar';
import { Badge } from '@/components/ui/badge';
import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';
import { customer, stats } from '@/app/shared/logistics/customer-profile/data';

interface SidebarProps {
  className?: string;
}

export default function UserInfo({ className }: SidebarProps) {
  return (
    <article className={cn('lg:px-0 lg:pb-0', className)}>
      <div className="grid items-end gap-4 @xl:grid-cols-[80px_1fr] @2xl:grid-cols-[128px_1fr] md:gap-6">
        <figure className="relative -mt-8 h-20 w-20 rounded-full border-4 border-white drop-shadow @2xl:-mt-12 @2xl:h-32 @2xl:w-32 @4xl:-mt-12 @7xl:-mt-14">
          <span className="absolute bottom-1.5 right-1.5 z-10 h-3 w-3 rounded-full border-2 border-white bg-[#11A849] @2xl:bottom-2.5 @2xl:right-2.5 @3xl:h-4 @3xl:w-4 @4xl:bottom-2 @4xl:right-2" />
          <Image
            src={`https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
              avatarIds
            )}.webp`}
            alt={customer.name}
            fill
            priority
            className="rounded-full bg-gray-100"
          />
        </figure>
        <div className="grid grid-cols-2 gap-1 md:gap-1">
          <article>
            <div className="flex items-center gap-2.5">
              <Title as="h3" className="text-lg xl:text-xl">
                {customer.name}
              </Title>
              <Badge size="DEFAULT" className="gap-1.5">
                4.5/5
                <PiStarFill className="h-4 w-4 fill-[#FFEB3C]" />
              </Badge>
            </div>
            <p>
              <a href={`mailto:${customer.email}`}>{customer.email}</a>
            </p>
          </article>
          <article className="flex flex-wrap items-center justify-end gap-3">
            <Button variant="outline" className="flex items-center gap-1">
              <PiEnvelopeSimple size={18} />
              Message
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <PiPhone size={18} />
              Call
            </Button>
          </article>
        </div>
      </div>

      <SimpleBar>
        <div className="mt-8 grid min-w-[1536px] grid-cols-7 gap-5 rounded-lg border border-gray-200 p-8 md:mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <stat.icon className="h-10 w-10" />
              </div>
              <div className="">
                <span className="block text-base font-medium text-gray-900">
                  {stat.isCurrency ? toCurrency(stat.value) : stat.value}
                </span>
                <span className="block">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
    </article>
  );
}
