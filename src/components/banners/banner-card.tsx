import Image from 'next/image';
import { Title } from '@/components/ui/text';
import cn from '@/utils/class-names';

type BannerCardProps = {
  title: string;
  className?: string;
  titleClassName?: string;
  bgImage?: string;
};
export default function BannerCard({
  bgImage,
  className,
  titleClassName = 'text-white',
  children,
  title,
}: React.PropsWithChildren<BannerCardProps>) {
  return (
    <div className={cn('relative p-8', className)}>
      <Image
        src={
          bgImage
            ? bgImage
            : 'https://isomorphic-furyroad.s3.amazonaws.com/public/upgrade-storage-bg.webp'
        }
        alt="Upgrade Storage"
        fill
        sizes="(max-width: 768px) 100vw"
      />
      <div className="relative z-10">
        <Title as="h2" className={cn('text-2xl font-semibold', titleClassName)}>
          {title}
        </Title>
        {children}
      </div>
    </div>
  );
}
