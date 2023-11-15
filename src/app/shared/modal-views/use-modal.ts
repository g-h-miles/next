'use client';

import { atom, useAtomValue, useSetAtom } from 'jotai';

type ModalTypes = {
  view: React.ReactNode;
  isOpen: boolean;
  customSize?: string;
};

const modalAtom = atom<ModalTypes>({
  isOpen: false,
  view: null,
  customSize: '320px',
});

export function useModal() {
  const state = useAtomValue(modalAtom);
  const setState = useSetAtom(modalAtom);

  const openModal = ({
    view,
    customSize,
  }: {
    view: React.ReactNode;
    customSize?: string;
  }) => {
    setState({
      ...state,
      isOpen: true,
      view,
      customSize,
    });
  };

  const closeModal = () => {
    setState({
      ...state,
      isOpen: false,
    });
  };

  return {
    ...state,
    openModal,
    closeModal,
  };
}
