'use client';

import Image, { ImageProps } from 'next/image';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';
import EmailTemplateForm from '@/app/shared/email-templates/email-template-form';

interface TemplateWidgetProps {
  src: ImageProps['src'];
  name: string;
  title: string;
  className?: string;
}

export default function TemplateWidget({
  src,
  name,
  title,
  className,
}: TemplateWidgetProps) {
  const { openModal } = useModal();
  return (
    <div className="relative rounded-md">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3">{title}</Title>
      </div>
      <figure
        title={title}
        className={cn(
          'relative h-[575px] overflow-hidden rounded-md drop-shadow-xl',
          className
        )}
      >
        <Image
          src={src}
          alt={title}
          className="mx-auto rounded-md object-contain"
        />
        {/* <div className="absolute inset-0 z-20 rounded-md bg-gray-700/40" /> */}
      </figure>
      {/* <SendEmailButton /> */}

      <Button
        className="mt-6"
        onClick={() =>
          openModal({
            view: <EmailTemplateForm template={name} />,
          })
        }
      >
        Test this email
      </Button>
    </div>
  );
}

// function SendEmailButton() {
//   return (
//     <Button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//       Test this email
//     </Button>
//   );
// }
