'use client';

import { useState } from 'react';
import { ActionIcon } from '@/components/ui/action-icon';
import { PiStar, PiStarFill } from 'react-icons/pi';

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);
  return (
    <ActionIcon
      variant="text"
      title={'Favorite'}
      onClick={() => setFavorite((prevFav) => !prevFav)}
    >
      {favorite ? (
        <PiStarFill className="h-5 w-5 fill-orange text-orange" />
      ) : (
        <PiStar className="h-5 w-5 text-gray-500" />
      )}
    </ActionIcon>
  );
}
