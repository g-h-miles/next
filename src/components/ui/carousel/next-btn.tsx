import { Button } from '@/components/ui/button';
import { useSwiper } from 'swiper/react';

// import icons and images
import { PiCaretRightBold } from 'react-icons/pi';

export default function NextBtn() {
  const swiper = useSwiper();
  return (
    <Button
      variant="flat"
      rounded="pill"
      className="absolute right-5 top-1/2 z-10 -mt-2.5 h-[30px] w-[30px] bg-gray-700 p-1 text-gray-50 hover:!bg-gray-800 dark:bg-gray-200 dark:text-gray-1000 dark:hover:!bg-gray-100"
      onClick={() => swiper.slideNext()}
    >
      <PiCaretRightBold className="w-5" />
    </Button>
  );
}
