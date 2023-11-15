import cn from '@/utils/class-names';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';

type FloatingCartButtonProps = {
  totalItems: number;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FloatingCartButton({
  totalItems,
  className,
  ...props
}: FloatingCartButtonProps) {
  return (
    <button
      className={cn(
        'fixed end-2 top-1/3 flex -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-md bg-gray-900 p-3 text-xs font-semibold text-gray-0 shadow-[0_25px_50px_-12px_#000000] dark:bg-gray-200/90 dark:text-gray-900 dark:shadow-[0_25px_50px_-12px_#ffffff39] dark:backdrop-blur-md',
        className
      )}
      {...props}
    >
      <PiShoppingCartSimpleBold className="h-auto w-5" />
      <span>
        {totalItems} &nbsp; {totalItems > 1 ? 'Items' : 'Item'}
      </span>
    </button>
  );
}
