import BannerCard from '@/components/banners/banner-card';
import Link from 'next/link';
import { Title, Text } from '@/components/ui/text';
import { PiCheckCircleFill } from 'react-icons/pi';

const features = [
  'Premium features with customization.',
  'Multiple user access.',
  'Easy to access and edit.',
];

export default function UpgradeStorage({ className }: { className?: string }) {
  return (
    <div className={className}>
      <BannerCard
        title="Upgrade Storage"
        className="min-h-[280px] overflow-hidden rounded-lg"
      >
        <div className="my-5">
          {features.map((feature, index) => (
            <Text
              key={`feature-${index}`}
              className="flex items-center gap-2 py-1 text-sm font-medium text-white"
            >
              <PiCheckCircleFill className="h-5 w-5 text-xl text-white" />
              {feature}
            </Text>
          ))}
        </div>
        <Link
          href={'/file'}
          className="inline-block rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 dark:bg-gray-100"
        >
          Upgrade Storage
        </Link>
      </BannerCard>
    </div>
  );
}
