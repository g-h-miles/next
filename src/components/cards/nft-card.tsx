import Image from 'next/image';
import { CountDown } from '@/components/ui/count-down';
import cn from '@/utils/class-names';

type Nft = {
  name: string;
  thumbnail: string;
  thumbnailBase64?: string;
  avatar: string;
  avatar2: string;
  username: string;
  username2: string;
  currentBid: boolean;
  endsAt: Date;
};

interface NFTProps {
  nft: Nft;
  className?: string;
}

export function NftCard({ nft, className }: NFTProps) {
  return (
    <div
      className={cn(
        'group relative top-0 overflow-hidden rounded-lg duration-200 hover:-top-1',
        className
      )}
    >
      <div className="relative mx-auto aspect-square w-full">
        <Image
          alt={'title'}
          src={nft.thumbnail}
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={
            nft.thumbnailBase64 ?? `/_next/image?url=${nft.thumbnail}&w=10&q=1`
          }
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between bg-gray-900/30 p-5 opacity-0 duration-200 group-hover:opacity-100 dark:bg-gray-100/50">
          <div className="flex items-center gap-2">
            <div className="relative flex aspect-square w-8 items-center gap-2">
              <Image
                alt={nft.username2}
                src={nft.avatar2}
                fill
                priority
                sizes="(max-width: 768px) 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-semibold text-white ">{nft.username2}</span>
          </div>
          <p className="text-2xl font-semibold text-white">{nft.name}</p>
        </div>
      </div>
      <div className="bg-gray-900 p-5 dark:bg-gray-200">
        <div className="mb-4 flex gap-2">
          <div className="relative flex aspect-square w-5 items-center gap-2">
            <Image
              alt={nft.username}
              src={nft.avatar}
              fill
              priority
              sizes="(max-width: 768px) 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-semibold text-gray-300/70 dark:text-gray-600">
            {nft.username}
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-gray-300/70 dark:text-gray-600">
              Current Bid
            </span>
            <p className="relative ps-6 text-gray-100 after:absolute after:left-1.5 after:top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-gray-100 @5xl:text-xl @5xl:after:top-2.5 @5xl:after:h-2 @5xl:after:w-2 dark:text-gray-900 dark:after:bg-gray-900">
              Current Bid
            </p>
          </div>
          <CountDown target={nft.endsAt} />
        </div>
      </div>
    </div>
  );
}
