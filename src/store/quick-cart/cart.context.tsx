'use client';

import {
  useMemo,
  useEffect,
  useReducer,
  useContext,
  useCallback,
  createContext,
} from 'react';
import { useAtom } from 'jotai';
import { cartReducer, State, initialState } from './cart.reducer';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getItem, inStock } from './cart.utils';
import { verifiedResponseAtom } from '@/store/checkout';
import { CART_KEY } from '@/config/constants';
import { CartItem as Item } from '@/types';

interface CartProviderState extends State {
  addItemsToCart: (items: Item[]) => void;
  addItemToCart: (item: Item, quantity: number) => void;
  removeItemFromCart: (id: Item['id']) => void;
  clearItemFromCart: (id: Item['id']) => void;
  getItemFromCart: (id: Item['id']) => any | undefined;
  isInCart: (id: Item['id']) => boolean;
  isInStock: (id: Item['id']) => boolean;
  resetCart: () => void;
  updateCartLanguage: (language: string) => void;
}

export const cartContext = createContext<CartProviderState | undefined>(
  undefined
);

cartContext.displayName = 'CartContext';

export const useCart = () => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return useMemo(() => context, [context]);
};

export function CartProvider({
  cartKey,
  children,
  ...props
}: {
  cartKey?: string;
  children: React.ReactNode;
}) {
  const [savedCart, saveCart] = useLocalStorage(
    cartKey ?? CART_KEY,
    JSON.stringify(initialState)
  );
  const [state, dispatch] = useReducer<React.Reducer<State, any>>(
    cartReducer,
    (savedCart ? JSON.parse(savedCart) : initialState) as State
  );
  const [, emptyVerifiedResponse] = useAtom(verifiedResponseAtom);
  useEffect(() => {
    emptyVerifiedResponse(null);
  }, [emptyVerifiedResponse, state]);

  useEffect(() => {
    saveCart(JSON.stringify(state));
  }, [state, saveCart]);

  const addItemsToCart = (items: Item[]) =>
    dispatch({ type: 'ADD_ITEMS_WITH_QUANTITY', items });
  const addItemToCart = (item: Item, quantity: number) =>
    dispatch({ type: 'ADD_ITEM_WITH_QUANTITY', item, quantity });
  const removeItemFromCart = (id: Item['id']) =>
    dispatch({ type: 'REMOVE_ITEM_OR_QUANTITY', id });
  const clearItemFromCart = (id: Item['id']) =>
    dispatch({ type: 'REMOVE_ITEM', id });
  const isInCart = useCallback(
    (id: Item['id']) => !!getItem(state.items, id),
    [state.items]
  );
  const getItemFromCart = useCallback(
    (id: Item['id']) => getItem(state.items, id),
    [state.items]
  );
  const isInStock = useCallback(
    (id: Item['id']) => inStock(state.items, id),
    [state.items]
  );
  const updateCartLanguage = (language: string) =>
    dispatch({ type: 'UPDATE_CART_LANGUAGE', language });
  const resetCart = () => dispatch({ type: 'RESET_CART' });
  const value = useMemo(
    () => ({
      ...state,
      addItemsToCart,
      addItemToCart,
      removeItemFromCart,
      clearItemFromCart,
      getItemFromCart,
      isInCart,
      isInStock,
      resetCart,
      updateCartLanguage,
    }),
    [getItemFromCart, isInCart, isInStock, state]
  );
  return (
    <cartContext.Provider value={value} {...props}>
      {children}
    </cartContext.Provider>
  );
}
