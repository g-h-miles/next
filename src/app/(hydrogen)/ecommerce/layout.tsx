import CartDrawer from '@/app/shared/ecommerce/cart/cart-drawer';
// import FloatingCart from '@/app/shared/floating-cart';
import { CartProvider } from '@/store/quick-cart/cart.context';

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
