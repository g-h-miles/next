'use client';

import dynamic from 'next/dynamic';
import cn from '@/utils/class-names';
import { Title } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ActionIcon } from '@/components/ui/action-icon';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { PiPlusBold, PiFolderBold, PiXBold } from 'react-icons/pi';
const CreateFolder = dynamic(
  () => import('@/app/shared/support/inbox/create-folder'),
  {
    ssr: false,
  }
);
const CreateSnippetTemplateForm = dynamic(
  () => import('@/app/shared/support/create-snippet-template-from'),
  {
    ssr: false,
  }
);

function CreateFolderModalView() {
  const { closeModal } = useModal();
  return (
    <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
      <div className="mb-7 flex items-center justify-between">
        <Title as="h4" className="font-semibold">
          Create New Folder
        </Title>
        <ActionIcon size="sm" variant="text" onClick={() => closeModal()}>
          <PiXBold className="h-auto w-5" />
        </ActionIcon>
      </div>

      <CreateFolder onClose={() => closeModal()} />
    </div>
  );
}

interface HeaderActionProps {
  title: 'template' | 'snippet';
  className?: string;
}

export default function HeaderAction({ title, className }: HeaderActionProps) {
  const { openModal } = useModal();
  return (
    <>
      <div className={cn(className, 'mt-4 flex flex-wrap items-center gap-4')}>
        <Button
          variant="outline"
          className="w-full text-xs @lg:w-auto sm:text-sm"
          onClick={() =>
            openModal({
              view: <CreateFolderModalView />,
              customSize: '480px',
            })
          }
        >
          <PiFolderBold className="me-1.5 h-[17px] w-[17px]" />
          New Folder
        </Button>
        <Button
          className="w-full text-xs capitalize @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100 sm:text-sm"
          onClick={() =>
            openModal({
              view: <CreateSnippetTemplateForm title={title} />,
              customSize: '720px',
            })
          }
        >
          <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
          Create {title}
        </Button>
      </div>
    </>
  );
}
