import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { PaymentGateway } from '@/config/enums';
import { CHECKOUT } from '@/config/constants';
import { Address, Coupon } from '@/types';

interface DeliveryTime {
  id: string;
  title: string;
  description: string;
}

interface VerifiedResponse {
  total_tax: number;
  shipping_charge: number;
  unavailable_products: any[];
  wallet_amount: number;
  wallet_currency: number;
}

interface CheckoutState {
  billing_address: Address | null;
  shipping_address: Address | null;
  payment_gateway: PaymentGateway;
  payment_sub_gateway: string;
  delivery_time: DeliveryTime | null;
  customer_contact: string;
  customer_name: string | null;
  verified_response: VerifiedResponse | null;
  coupon: Coupon | null;
  payable_amount: number;
  use_wallet: boolean;
  note?: string;
  [key: string]: unknown;
}

export const defaultCheckout: CheckoutState = {
  billing_address: null,
  shipping_address: null,
  delivery_time: null,
  payment_gateway: PaymentGateway.COD,
  payment_sub_gateway: '',
  customer_contact: '',
  customer_name: '',
  verified_response: null,
  coupon: null,
  note: '',
  payable_amount: 0,
  use_wallet: false,
};

// Original atom.
export const checkoutAtom = atomWithStorage(CHECKOUT, defaultCheckout);
export const clearCheckoutAtom = atom(null, (_get, set, _data) => {
  return set(checkoutAtom, defaultCheckout);
});
export const billingAddressAtom = atom(
  (get) => get(checkoutAtom).billing_address,
  (get, set, data: Address) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, billing_address: data });
  }
);
export const shippingAddressAtom = atom(
  (get) => get(checkoutAtom).shipping_address,
  (get, set, data: Address) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, shipping_address: data });
  }
);
export const deliveryTimeAtom = atom(
  (get) => get(checkoutAtom).delivery_time,
  (get, set, data: DeliveryTime) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, delivery_time: data });
  }
);
export const paymentGatewayAtom = atom(
  (get) => get(checkoutAtom).payment_gateway,
  (get, set, data: PaymentGateway) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, payment_gateway: data });
  }
);

export const paymentSubGatewayAtom = atom(
  (get) => get(checkoutAtom).payment_sub_gateway,
  (get, set, data: string) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, payment_sub_gateway: data });
  }
);

export const verifiedTokenAtom = atom(
  (get) => get(checkoutAtom).token,
  (get, set, data: string) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, token: data });
  }
);
export const customerContactAtom = atom(
  (get) => get(checkoutAtom).customer_contact,
  (get, set, data: string) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, customer_contact: data });
  }
);
export const guestNameAtom = atom(
  (get) => get(checkoutAtom).customer_name,
  (get, set, data: string) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, customer_name: data });
  }
);
export const orderNoteAtom = atom(
  (get) => get(checkoutAtom).note,
  (get, set, data: string) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, note: data });
  }
);
export const verifiedResponseAtom = atom(
  (get) => get(checkoutAtom).verified_response,
  (get, set, data: VerifiedResponse | null) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, verified_response: data });
  }
);
export const couponAtom = atom(
  (get) => get(checkoutAtom).coupon,
  (get, set, data: Coupon | null) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, coupon: data });
  }
);
export const discountAtom = atom((get) => get(checkoutAtom).coupon?.amount);

export const walletAtom = atom(
  (get) => get(checkoutAtom).use_wallet,
  (get, set) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, use_wallet: !prev.use_wallet });
  }
);
export const payableAmountAtom = atom(
  (get) => get(checkoutAtom).payable_amount,
  (get, set, data: number) => {
    const prev = get(checkoutAtom);
    return set(checkoutAtom, { ...prev, payable_amount: data });
  }
);
