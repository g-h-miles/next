'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { PiArrowLineDownBold } from 'react-icons/pi';
import { useModal } from '@/app/shared/modal-views/use-modal';
import cn from '@/utils/class-names';
const FileUpload = dynamic(() => import('@/app/shared/file-upload'), {
  ssr: false,
});

type ImportButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
};

export default function ImportButton({
  title,
  modalBtnLabel = 'Import File',
  className,
  buttonLabel = 'Import',
}: React.PropsWithChildren<ImportButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
      onClick={() =>
        openModal({
          view: (
            <FileUpload
              label={title}
              accept="csv"
              multiple={false}
              btnLabel={modalBtnLabel}
            />
          ),
          customSize: '480px',
        })
      }
      className={cn(
        'w-full @lg:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100',
        className
      )}
    >
      <PiArrowLineDownBold className="me-1.5 h-[17px] w-[17px]" />
      {buttonLabel}
    </Button>
  );
}
