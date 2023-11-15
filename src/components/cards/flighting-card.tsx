'use client';

import Image from 'next/image';
import { Title } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PiCaretDownBold } from 'react-icons/pi';
import cn from '@/utils/class-names';
import LuggageTwoIcon from '@/components/icons/luggage-two';
import BagIcon from '@/components/icons/bag';
import PlaneIcon from '@/components/icons/plane';
import { Collapse } from '@/components/ui/collapse';
import { flightListingData } from '@/app/shared/explore-flight/listing-filters/filter-utils';
import { useState } from 'react';
import hasSearchedParams from '@/utils/has-searched-params';
import shuffle from 'lodash/shuffle';

export interface FlightingCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  model: string;
  hours: string;
  stop: string;
  class: string;
  luggage: string;
  bag: string;
  airlines: string;
  cheapest: boolean;
  best: boolean;
  quickest: boolean;
}

let countPerPage = 6;

export default function FlightingCard() {
  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(countPerPage);

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNextPage(nextPage + countPerPage);
    }, 600);
  }

  const filteredData = hasSearchedParams()
    ? shuffle(flightListingData)
    : flightListingData;

  return (
    <>
      <div className="mt-5 flex flex-col gap-7">
        {filteredData?.slice(0, nextPage)?.map((flight, index) => (
          <div key={flight.id} className="rounded-lg border border-gray-200">
            <AccordionContent flight={flight} />

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-gray-200 p-5 md:flex-nowrap">
              <span className="text-gray-500">
                <span className="text-lg font-semibold text-gray-700 md:text-2xl">
                  {flight.price}
                </span>{' '}
                <span>/ person</span>
              </span>
              <div className="grid w-full grid-cols-2 items-center gap-4 sm:flex sm:w-auto ">
                <Button
                  size="sm"
                  tag="span"
                  variant="text"
                  className="rounded-none border-b border-primary px-0 text-xs font-medium text-primary"
                >
                  View Details
                </Button>
                <Button size="sm" className="rounded-md text-xs font-medium">
                  Select Flight
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {nextPage < filteredData?.length && (
        <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
          <Button
            isLoading={isLoading}
            onClick={() => handleLoadMore()}
            className="dark:bg-gray-100 dark:text-white dark:active:bg-gray-100"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
}

type ContentProps = {
  flight: FlightingCardProps;
};

function AccordionContent({ flight }: ContentProps) {
  return (
    <Collapse
      header={({ open, toggle }) => (
        <div
          onClick={toggle}
          className="flex cursor-pointer items-center justify-between gap-4 p-3 md:p-5"
        >
          <div className="flex gap-2 sm:items-center md:gap-4">
            <div className="relative aspect-square w-20">
              <Image
                src={flight.image}
                alt={flight.title}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
                blurDataURL={`/_next/image?url=${flight.image}&w=10&q=1`}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="sm:flex sm:flex-col">
              <Button
                size="sm"
                tag="span"
                variant="flat"
                className="mb-2 h-6 rounded-md bg-secondary-lighter text-xs font-semibold text-secondary-dark dark:bg-secondary-dark dark:text-secondary-lighter sm:hidden"
              >
                {flight.class}
              </Button>
              <Title as="h6" className="text-gray-900">
                {flight.title}
              </Title>
              <ul className="flex items-center divide-x">
                <li className="pr-1.5">{flight.model}</li>
                <li className="hidden px-1.5 md:block">{flight.hours}</li>
                <li className="hidden px-1.5 md:block">{flight.stop}</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              rounded="md"
              variant="flat"
              color={
                flight.class === 'Economy'
                  ? 'success'
                  : flight.class === 'Business'
                  ? 'secondary'
                  : 'info'
              }
              className={cn(
                'hidden px-3.5 py-1 sm:block',
                flight.class === 'Economy'
                  ? 'dark:bg-[#05361e] dark:text-green-light'
                  : flight.class === 'Business'
                  ? 'dark:bg-[#33095e] dark:text-secondary-light'
                  : 'dark:bg-[#07274e] dark:text-blue-light'
              )}
            >
              {flight.class}
            </Badge>
            <div
              className={cn(
                'flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500',
                open && 'bg-gray-900 text-gray-0'
              )}
            >
              <PiCaretDownBold
                strokeWidth={3}
                className={cn(
                  'h-3 w-3 rotate-180 transition-transform duration-200 rtl:-rotate-180',
                  open && 'rotate-0 rtl:rotate-0'
                )}
              />
            </div>
          </div>
        </div>
      )}
    >
      {/* Body */}
      <div className="flex items-center justify-between gap-4 bg-gray-50 px-5 py-3 text-gray-500 dark:bg-gray-100">
        <span>Include free baggage and cabin in capacity</span>
        <ul className="flex shrink-0 grow-0 basis-auto items-center gap-4">
          <li className="flex items-center gap-1">
            <LuggageTwoIcon className="h-4 w-4 text-gray-900" />
            <span>{flight.luggage}</span>
          </li>
          <li className="flex items-center gap-1">
            <BagIcon className="h-4 w-4 text-gray-900" />
            <span>{flight.bag}</span>
          </li>
        </ul>
      </div>

      <div className="grid items-center gap-4 @container sm:grid-cols-2 lg:gap-6 xl:grid-cols-12">
        <div className="p-3 @xl:p-4 @2xl:p-5 xl:col-span-7">
          <div className="grid grid-cols-8">
            <div className="hidden flex-col gap-0.5 lg:col-span-2 lg:flex">
              <span className="text-sm font-semibold text-gray-900">05:40</span>
              <span>Thu, July 13</span>
            </div>
            <div className="relative col-span-1 mt-1.5">
              <span className="relative block h-3 w-3 rounded-full bg-gray-900 before:absolute before:-left-1.5 before:-top-1.5 before:-z-10 before:h-6 before:w-6 before:rounded-full before:bg-white dark:bg-gray-900 dark:before:bg-gray-50"></span>
              <span className="absolute left-[5px] top-[18px] block h-full w-[2px] bg-gray-200"></span>
            </div>
            <div className="col-span-7 flex flex-col pb-9 lg:col-span-5">
              <span className="block text-xs font-semibold text-gray-900 lg:hidden lg:text-sm">
                05:40 PM
              </span>
              <span className="font-semibold text-gray-900">Dhaka</span>
              <span className="text-sm text-gray-500">
                Hazrat Shajalal International Airport
              </span>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="hidden flex-col gap-0.5 lg:col-span-2 lg:flex"></div>
            <div className="relative col-span-1 mt-1.5">
              <span className="relative z-10 mb-1.5 block h-3 w-3 rounded-full before:absolute before:-left-1.5 before:-top-1.5 before:-z-10 before:h-6 before:w-6 before:rounded-full before:bg-white dark:bg-gray-900 dark:before:bg-gray-50">
                <PlaneIcon className="h-3 w-3" />
              </span>
              <span className="absolute left-[5px] top-[18px] block h-full w-[2px] bg-gray-200"></span>
            </div>
            <div className="col-span-7 flex flex-col pb-9 lg:col-span-5">
              <span className="font-semibold text-gray-900">
                1 hr 30 mins Transit
              </span>
              <span className="text-sm text-gray-500">
                Mumbai Chhatrapati Shivaji International
              </span>
            </div>
          </div>
          <div className="grid grid-cols-8">
            <div className="hidden flex-col gap-0.5 lg:col-span-2 lg:flex">
              <span className=" font-semibold text-gray-900">22:55</span>
              <span>Thu, July 13</span>
            </div>

            <div className="relative z-10 col-span-1 mt-1.5">
              <span className="relative -bottom-[38px] block h-3 w-3 rounded-full bg-gray-900 before:absolute before:-left-1.5 before:-top-1.5 before:-z-10 before:h-6 before:w-6 before:rounded-full before:bg-gray-0 dark:bg-gray-900 dark:before:bg-gray-50 lg:-bottom-[22px]"></span>
              <span className="absolute -top-[2px] left-[5px] -z-20 block h-full w-[2px] bg-gray-200"></span>
            </div>

            <div className="col-span-7 flex flex-col lg:col-span-5">
              <span className="block text-xs font-semibold text-gray-900 lg:hidden lg:text-sm">
                22:55 PM
              </span>
              <span className=" font-semibold text-gray-900">Abu Dhobi</span>
              <span className="text-sm text-gray-500">
                Dubai International Airport
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[228px] @2xl:block xl:col-span-5">
          <Image
            src="/map.webp"
            alt="Qatar Logo"
            fill
            priority
            quality={100}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw"
            blurDataURL={`/_next/image?url="/map.webp"&w=10&q=1`}
            className="dark:opacity-[0.2]"
          />
        </div>
      </div>
    </Collapse>
  );
}
