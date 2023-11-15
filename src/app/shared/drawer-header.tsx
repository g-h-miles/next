'use client';

import { Title } from '@/components/ui/text';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiXBold } from 'react-icons/pi';
import cn from '@/utils/class-names';

type DrawerHeaderProps = {
  heading: string;
  onClose: () => void;
  headerClassName?: string;
};

export default function DrawerHeader({
  onClose,
  heading,
  headerClassName,
}: DrawerHeaderProps) {
  return (
    <div
      className={cn(
        'mb-4 flex items-center justify-between border-b border-gray-200 px-4 py-[14px]',
        headerClassName
      )}
    >
      <Title as="h5" className="font-semibold">
        {heading}
      </Title>
      <ActionIcon variant="outline" onClick={onClose} className="border-0 p-0">
        <PiXBold className="h-auto w-5" />
      </ActionIcon>
    </div>
  );
}
