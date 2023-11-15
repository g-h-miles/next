import cn from '@/utils/class-names';
import { Title, Text } from '@/components/ui/text';
import { Avatar, AvatarProps } from '@/components/ui/avatar';

interface AvatarCardProps {
  src: string;
  name: string;
  className?: string;
  description?: string;
  avatarProps?: AvatarProps;
}

export default function AvatarCard({
  src,
  name,
  className,
  description,
  avatarProps,
}: AvatarCardProps) {
  return (
    <figure className={cn('flex items-center gap-3', className)}>
      <Avatar name={name} src={src} {...avatarProps} />
      <figcaption className="grid gap-0.5">
        <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          {name}
        </Text>
        {description && (
          <Text className="text-[13px] text-gray-500">{description}</Text>
        )}
      </figcaption>
    </figure>
  );
}
