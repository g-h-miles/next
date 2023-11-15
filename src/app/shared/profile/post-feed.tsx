'use client';

import { useEffect, useState } from 'react';
import { postData } from '@/data/profile-data';
import { usePathname } from 'next/navigation';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import {
  PiCaretLeftBold,
  PiCaretRightBold,
  PiArrowsClockwiseFill,
} from 'react-icons/pi';
import PostCard from './post-card';
import PostsModal from './posts-modal';

export default function PostFeed() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [postLimit, setPostLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const [currentPostID, setCurrentPostID] = useState(100);

  useEffect(() => {
    setOpen(() => false);
  }, [pathname]);

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPostLimit(postLimit + 3);
    }, 600);
  }

  let currentPost: any;
  postData.forEach((item) => {
    if (item.id === currentPostID) {
      currentPost = item;
    }
  });

  return (
    <>
      <div className="pt-5 @container 2xl:pt-7">
        <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2 @3xl:gap-6 @4xl:grid-cols-3 @7xl:gap-8">
          {postData?.slice(0, postLimit).map((item: any) => (
            <div
              key={item.id}
              onClick={() => {
                setOpen(true);
                setCurrentPostID(item.id);
              }}
            >
              <PostCard
                type={item.type}
                base64={item.base64}
                thumbnail={item.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>

      {postData.length > postLimit ? (
        <div className="mt-8 flex justify-center">
          <Button
            variant="text"
            size="lg"
            isLoading={loading}
            className="flex items-center"
            onClick={handleLoadMore}
          >
            <PiArrowsClockwiseFill className="text-xl" />
            <span className="ms-2">Load More</span>
          </Button>
        </div>
      ) : null}

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        className="[&>div]:p-0 lg:[&>div]:p-4"
        overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg"
        containerClassName="dark:bg-gray-100 max-w-[460px] max-w-[1200px] lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1200px] relative"
      >
        {currentPostID > 100 && (
          <Button
            variant="text"
            className="absolute -left-12 top-1/2 -mt-4 hidden p-0 text-gray-50 dark:text-white lg:inline-block"
            onClick={() => setCurrentPostID(currentPostID - 1)}
          >
            <PiCaretLeftBold className="text-3xl" />
          </Button>
        )}

        {currentPostID < postData[postData.length - 1].id && (
          <Button
            variant="text"
            className="absolute -right-12 top-1/2 -mt-4 hidden p-0 text-gray-50 dark:text-white lg:inline-block"
            onClick={() => setCurrentPostID(currentPostID + 1)}
          >
            <PiCaretRightBold className="text-3xl" />
          </Button>
        )}

        {currentPost && (
          <PostsModal data={currentPost} onClose={() => setOpen(false)} />
        )}
      </Modal>
    </>
  );
}
