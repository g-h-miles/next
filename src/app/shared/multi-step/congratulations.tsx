import Link from 'next/link';
import Image from 'next/image';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';

export default function Congratulations() {
  return (
    <>
      <div className="w-full max-w-xl px-6">
        <figure className="relative mb-12 aspect-[60/45] md:mb-20">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/congratulations.jpg'
            }
            alt="congratulation image"
            fill
            priority
            sizes="(max-width: 768px) 140px"
            className="h-auto w-full object-cover"
          />
        </figure>
        <Confetti className="!fixed" />
        <div className="text-center">
          <h2 className="mb-2 text-xl font-semibold text-gray-900 md:text-2xl">
            Congratulations !
          </h2>
          <p className="mb-6 text-gray-500">You are done</p>
          <Link href={'/'}>
            <Button>Back To Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
