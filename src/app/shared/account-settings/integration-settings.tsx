'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import cn from '@/utils/class-names';
import { Input } from '@/components/ui/input';
import { PiMagnifyingGlass, PiX } from 'react-icons/pi';
import { Title, Text } from '@/components/ui/text';
import { Switch } from '@/components/ui/switch';
import { ActionIcon } from '@/components/ui/action-icon';
import { teams } from '@/data/teams-data';

export default function IntegrationSettingsView() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="@container">
      {showBanner && <PromoBanner className="mt-10" onClose={setShowBanner} />}

      <HorizontalFormBlockWrapper
        title="Account plans"
        description="Pick an account plan that fits your workflow."
      >
        <Input
          className="ms-auto w-full @2xl:max-w-sm"
          type="search"
          placeholder="Search"
          prefix={<PiMagnifyingGlass className="h-6 w-6 text-gray-900" />}
        />
      </HorizontalFormBlockWrapper>
      <div className="flex flex-col">
        {teams.map((currentTeam, index) => (
          <div
            key={`team-${index}`}
            className="col-span-2 my-3 flex gap-3 rounded-lg border border-gray-200 p-6 sm:my-4"
          >
            <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden">
              {currentTeam.icon}
            </div>
            <div className="flex flex-grow flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Title as="h3" className="mb-1 text-base font-semibold">
                  {currentTeam.name}
                </Title>
                <Text className="text-sm text-gray-500 transition-colors">
                  {currentTeam.content}
                </Text>
                <a
                  href={currentTeam.url}
                  target={'_blank'}
                  rel={'noopener noreferrer nofollow noindex'}
                  className="mt-3 inline-block w-auto flex-shrink-0 justify-start p-0 text-xs font-medium capitalize text-gray-900 sm:justify-center"
                >
                  Learn more
                </a>
              </div>
            </div>
            <Switch variant="flat" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PromoBanner({
  className,
  onClose,
}: {
  className?: string;
  onClose: (value: boolean) => void;
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center overflow-hidden rounded-xl border border-gray-300 xs:flex-row',
        className
      )}
    >
      <div className="relative h-full min-h-[200px] w-full sm:max-w-[223px]">
        <Image
          className="aspect-[223/170] rounded-t-xl object-cover xs:rounded-none ltr:xs:rounded-l-xl rtl:xs:rounded-r-xl"
          src="/promo-card-bg.jpg"
          alt=""
          // placeholder="blur"
          // blurDataURL="/promo-card-bg.jpg"
          fill
        />
      </div>

      <div className="flex flex-col justify-between p-5 pb-6 sm:p-6">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
          We’ve just released a new update!
        </h5>
        <p className="mb-5 text-sm font-normal text-gray-500">
          Check out the all new dashboard view. Pages and now load faster.
        </p>
        <div className="flex items-center gap-3">
          <Button
            variant="solid"
            className="w-full dark:bg-gray-100 dark:text-white sm:w-auto"
          >
            Changelog
          </Button>
        </div>
      </div>
      <ActionIcon
        variant="outline"
        rounded="full"
        className="absolute right-5 top-5"
        onClick={() => onClose(false)}
      >
        <PiX className="h-5 w-5" />
      </ActionIcon>
    </div>
  );
}

function HorizontalFormBlockWrapper({
  title,
  titleClassName,
  description,
  children,
  className,
}: React.PropsWithChildren<{
  title: React.ReactNode;
  description?: React.ReactNode;
  titleClassName?: string;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        'pb-3 pt-9 @2xl:grid @2xl:grid-cols-6 @2xl:pt-11',
        className
      )}
    >
      <div className="col-span-2 mb-6 @5xl:mb-0">
        <Title as="h6" className={cn('text-xl font-semibold', titleClassName)}>
          {title}
        </Title>
        <Text className="mt-1 text-sm text-gray-500">{description}</Text>
      </div>
      <div className="col-span-4">{children}</div>
    </div>
  );
}
