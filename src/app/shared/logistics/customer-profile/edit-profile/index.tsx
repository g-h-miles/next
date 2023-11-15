'use client';

import cn from '@/utils/class-names';
import { useModal } from '@/app/shared/modal-views/use-modal';
import EditProfileForm from './edit-profile-form';
import { Button } from '@/components/ui/button';
import { PiNotePencil } from 'react-icons/pi';

interface EditProfileProps {
  className?: string;
}

export default function EditProfileButton({ className }: EditProfileProps) {
  const { openModal } = useModal();
  return (
    <Button
      className={cn(
        'gap-2 dark:bg-gray-100 dark:text-white dark:active:bg-gray-100',
        className
      )}
      onClick={() =>
        openModal({
          view: <EditProfileForm />,
          customSize: '850px',
        })
      }
    >
      <PiNotePencil className="h-5 w-5" /> Edit Profile
    </Button>
  );
}
