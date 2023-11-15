'use client';

import { atom, useAtom } from 'jotai';
import { MenuItemsType } from './beryllium-fixed-menu-items';

const LOCAL_STORAGE_KEY = 'iso-beryllium-sidebar-left-expanded';

const isomorphicBerylliumSidebarLeftExpandedAtom = atom(
  typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY) : true
);

const isomorphicBerylliumSidebarLeftExpandedAtomWithPersistence = atom(
  (get) => get(isomorphicBerylliumSidebarLeftExpandedAtom),
  (get, set, newStorage: any) => {
    set(isomorphicBerylliumSidebarLeftExpandedAtom, newStorage);
    localStorage.setItem(LOCAL_STORAGE_KEY, newStorage);
  }
);

export function useBerylliumSidebars() {
  const [expandedLeft, setExpandedLeft] = useAtom(
    isomorphicBerylliumSidebarLeftExpandedAtomWithPersistence
  );

  return {
    expandedLeft: !!(expandedLeft === null
      ? true
      : JSON.parse(expandedLeft as string)),
    setExpandedLeft,
  };
}

export function getActiveMainMenuIndex(
  pathname: string,
  menuItems: MenuItemsType[]
) {
  let activeIndex = 0;
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    for (let j = 0; j < menuItem.menuItems.length; j++) {
      const items = menuItem.menuItems[j];
      if (items.href === pathname) {
        activeIndex = i;
        break;
      } else {
        if (items.subMenuItems) {
          for (let k = 0; k < items.subMenuItems.length; k++) {
            const subMenuItem = items.subMenuItems[k];
            if (subMenuItem.href === pathname) {
              activeIndex = i;
              break;
            }
          }
        }
      }
    }
  }
  return activeIndex;
}
