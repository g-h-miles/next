import { Placement } from '@floating-ui/react';
import { PiTrashBold, PiTrashFill } from 'react-icons/pi';
import { ActionIcon } from '@/components/ui/action-icon';
import { Title, Text } from '@/components/ui/text';
import { Popover } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import cn from '@/utils/class-names';
import { useCart } from '@/store/quick-cart/cart.context';
import { Product } from '@/types';

interface RemoveItemProps {
  productID: number;
  className?: string;
  placement: Placement;
}

export default function RemoveItem({
  productID,
  className,
  placement,
}: RemoveItemProps) {
  const { clearItemFromCart } = useCart();
  return (
    <Popover
      placement={placement}
      className={cn(
        'z-50 dark:bg-gray-100 dark:[&>svg]:fill-gray-100',
        className
      )}
      content={({ setOpen }) => (
        <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
          <Title
            as="h6"
            className="mb-0.5 flex items-start text-sm sm:items-center"
          >
            <PiTrashFill className="me-1 h-5 w-5" /> Delete the order
          </Title>
          <Text className="mb-2 leading-relaxed">
            Are you sure you want to delete this order?
          </Text>
          <div className="flex items-center justify-end">
            <Button size="sm" className="me-1.5 h-7">
              Yes
            </Button>
            <Button size="sm" variant="outline" className="h-7">
              No
            </Button>
          </div>
        </div>
      )}
    >
      <ActionIcon
        variant="text"
        rounded="full"
        className="h-auto w-auto border border-gray-200 p-2 hover:border-red-light"
        onClick={() => clearItemFromCart(productID)}
      >
        <PiTrashBold className="h-4 w-4 text-red-light" />
      </ActionIcon>
    </Popover>
  );
}
