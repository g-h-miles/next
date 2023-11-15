'use client';

import Link from 'next/link';
import { PiCaretDownBold } from 'react-icons/pi';
import cn from '@/utils/class-names';
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import BulletIcon from '@/layouts/lithium/bullet-icon';
import { AiFillCaretRight } from 'react-icons/ai';

import {
  DropdownItemType,
  MenuItemsType,
} from '@/layouts/lithium/lithium-menu-items';
import {
  useFloating,
  flip,
  shift,
  offset,
  autoUpdate,
} from '@floating-ui/react';
import { usePathname } from 'next/navigation';

export function CollapsibleMenu({
  items,
  className = '',
}: {
  items: DropdownItemType[];
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <motion.ul
      style={{ transformOrigin: 'top' }}
      initial={{ opacity: 0, scale: 0.75 }}
      transition={{ duration: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className={cn('rounded-md border border-gray-300', className)}
    >
      {items.map((item, index) => {
        if (item.subMenuItems) {
          const isActive = item.subMenuItems.some(
            (subItem) => subItem.href === pathname
          );
          return (
            <li
              key={`link-menu-${item.name}-${index}`}
              className={cn(
                'group/parent relative my-0.5 flex cursor-pointer items-center justify-between gap-3 rounded-md bg-gray-100/0 px-3 py-2 text-left font-medium text-gray-900 duration-150 hover:bg-gray-100 hover:dark:bg-gray-50/50',
                {
                  'bg-gray-100': isActive,
                }
              )}
            >
              {item.icon}
              <span className="me-auto duration-200">{item.name}</span>
              <PiCaretDownBold
                strokeWidth={3}
                className={cn(
                  'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90 '
                )}
              />
              {item.subMenuItems && (
                <ul className="invisible absolute -right-[calc(100%_+_24px)] top-0 min-w-[200px] scale-75 rounded-md border border-gray-200 bg-white p-2 opacity-0 shadow-md  duration-200 after:absolute after:-left-[22px] after:-top-0 after:h-9 after:w-7 group-hover/parent:visible group-hover/parent:scale-100 group-hover/parent:opacity-100 rtl:right-[calc(100%_+_24px)] rtl:after:-right-[22px] dark:bg-gray-100">
                  {item.subMenuItems.map((subItem, subIndex) => {
                    const isActive = subItem.href === pathname;
                    return (
                      <li key={`link-submenu-menu-${subItem.name}-${subIndex}`}>
                        <Link
                          href={subItem.href}
                          className="group/submenu-link flex items-center gap-2 px-3 py-2"
                        >
                          <span
                            className={cn(
                              'text-gray-500 duration-200 group-hover/submenu-link:text-gray-900',
                              {
                                'text-gray-900': isActive,
                              }
                            )}
                          >
                            <BulletIcon className="h-3 w-3 " />
                          </span>
                          <span
                            className={cn('duration-200 ', {
                              'group-hover/submenu-link:translate-x-1 rtl:group-hover/submenu-link:-translate-x-1':
                                !isActive,
                              'text-gray-900 underline': isActive,
                            })}
                          >
                            {subItem.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        } else {
          return (
            <Link
              href={item?.href ?? '/'}
              key={`link-menu-${item.name}-${index}`}
              className={cn(
                'my-0.5 flex items-center gap-3 rounded-md bg-gray-100/0 px-3 py-2 text-left font-medium text-gray-900 duration-200 hover:bg-gray-100 hover:dark:bg-gray-50/50',
                {
                  'bg-gray-100 text-gray-900 dark:bg-gray-50/50':
                    pathname === item.href,
                }
              )}
            >
              {item.icon}
              <span className="duration-200">{item.name}</span>
            </Link>
          );
        }
      })}
    </motion.ul>
  );
}

function EnhancedMenuItems({
  items,
  currentState,
  className = '',
}: {
  items: DropdownItemType[];
  currentState: number;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        'w-[calc(100%_-_200px)] rounded-lg bg-white pl-3 dark:bg-gray-100',
        className
      )}
    >
      <ul className="grid list-none grid-cols-2  gap-x-10 gap-y-4 p-7">
        {items &&
          items[currentState] &&
          items[currentState]?.subMenuItems &&
          items[currentState]?.subMenuItems?.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.li
                style={{ transformOrigin: 'center' }}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.075 }}
                className="basis-1/2 text-left"
                key={`enhance-menu-item-${item.name}-${index}`}
              >
                <Link
                  href={item.href ?? '/'}
                  className="group/submenu-link flex items-center gap-3 font-medium text-gray-900"
                >
                  <span
                    className={cn(
                      'text-gray-500 duration-200 group-hover/submenu-link:text-gray-900',
                      {
                        'text-gray-900': isActive,
                      }
                    )}
                  >
                    <BulletIcon className="h-3 w-3" />
                  </span>
                  <span
                    className={cn('duration-200 ', {
                      'group-hover/submenu-link:translate-x-1': !isActive,
                      underline: isActive,
                    })}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.li>
            );
          })}
      </ul>
    </div>
  );
}

export const EnhancedMenu = forwardRef(
  (
    {
      style,
      items,
      className = '',
    }: {
      items: DropdownItemType[];
      className?: string;
      style: CSSProperties;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [currentState, setState] = useState<number>(0);
    const pathname = usePathname();

    useEffect(() => {
      if (
        items.some(
          (item) =>
            item.subMenuItems?.some((subItem) => subItem.href === pathname)
        )
      ) {
        setState(
          items.findIndex(
            (item) =>
              item.subMenuItems?.some((subItem) => subItem.href === pathname)
          )
        );
      }
    }, [items, pathname]);
    return (
      <motion.div
        style={style}
        ref={ref}
        key="enhanced-menu"
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className={cn(
          'flex gap-x-2 rounded-md border border-gray-300 p-1',
          className
        )}
      >
        <div className="col-span-3 flex w-[200px] flex-col gap-2 pe-0">
          {items.map((item, index) => (
            <button
              role="div"
              key={`link-menu-${item.name}-${index}`}
              className={cn(
                'relative cursor-pointer rounded-lg p-3 pb-2.5 text-left font-medium text-gray-900 duration-200',
                {
                  'bg-white dark:bg-gray-100': currentState === index,
                }
              )}
              onClick={() => setState(index)}
            >
              <div className="mb-2 flex items-center gap-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
              <p className="text-xs font-normal leading-5 text-gray-500">
                {item?.description}
              </p>
              <span
                className={cn(
                  'absolute -right-[9px] top-1/2 -translate-y-1/2 text-white opacity-0 duration-200 dark:text-gray-100',
                  {
                    'opacity-100': currentState === index,
                  }
                )}
              >
                <AiFillCaretRight className="h-auto w-3.5" />
              </span>
              <span
                className={cn(
                  'absolute -right-[18px] top-1/2 -translate-y-1/2 text-white opacity-0 duration-200 dark:text-gray-50',
                  {
                    'opacity-100': currentState === index,
                  }
                )}
              >
                <AiFillCaretRight className="h-auto w-3.5" />
              </span>
            </button>
          ))}
        </div>
        <EnhancedMenuItems items={items} currentState={currentState} />
      </motion.div>
    );
  }
);

EnhancedMenu.displayName = 'EnhancedMenu';

export function LinkMenu({
  items,
  className = '',
}: {
  items: DropdownItemType[];
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <motion.ul
      style={{ transformOrigin: 'top' }}
      initial={{ opacity: 0, scale: 0.75 }}
      transition={{ duration: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className={cn('rounded-md border border-gray-300', className)}
    >
      {items.map((item, index) => {
        const isActive = item.href === pathname;
        return (
          <li
            key={`link-menu-${item.name}-${index}`}
            className="relative my-0.5 "
          >
            <Link
              href={item.href ?? '/'}
              className={cn(
                'flex items-center gap-3 whitespace-nowrap rounded-md bg-gray-100/0 px-3 py-2 font-medium text-gray-900 duration-200 hover:bg-gray-100 hover:dark:bg-gray-50/50',
                { 'bg-gray-100 dark:bg-gray-50/50': isActive }
              )}
            >
              {item.icon}
              <span className="relative block">{item.name}</span>
            </Link>
          </li>
        );
      })}
    </motion.ul>
  );
}

export default function HeaderMenuLeft({
  hoveredMenu,
  menu,
  onHover,
  onLeave,
}: {
  menu: MenuItemsType;
  hoveredMenu: string;
  onHover: (e: React.MouseEvent) => void;
  onLeave: (e: React.MouseEvent) => void;
}) {
  const pathname = usePathname();
  const isActive = menu.dropdownItems?.some(
    (dropdownItem) =>
      dropdownItem.href === pathname ||
      dropdownItem?.subMenuItems?.some((subItem) => subItem.href === pathname)
  );
  const { x, y, refs, strategy } = useFloating({
    placement: 'bottom-start',
    middleware: [
      flip(),
      shift(),
      offset({
        mainAxis: 6,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const [isVisible] = useCycle(true, false);

  const dropdownVisibility = hoveredMenu === menu.id && isVisible;

  return (
    <>
      <li
        ref={refs.setReference}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        key={menu.name + '-' + menu.id}
        className={cn(
          'group relative flex cursor-pointer items-center justify-start gap-1 duration-200 after:absolute after:-bottom-full after:hidden after:h-5 after:w-full hover:after:block'
        )}
      >
        <span
          className={cn(
            'inline-block w-full overflow-hidden whitespace-nowrap pe-1.5 ps-0 text-sm font-medium leading-5 text-gray-900 transition-all duration-200',
            {
              'group-hover:text-gray-900': !isActive,
              'text-primary': isActive,
            }
          )}
        >
          {menu.name}
        </span>
        <span
          className={cn('text-gray-900 duration-200', {
            'text-primary': isActive,
          })}
        >
          <PiCaretDownBold />
        </span>
        <AnimatePresence>
          {dropdownVisibility && (
            <>
              {menu.type === 'enhance' && (
                <EnhancedMenu
                  ref={refs.setFloating}
                  style={{
                    position: strategy,
                    left: x ?? 0,
                  }}
                  className={cn(
                    'absolute top-[calc(100%_+_20px)] w-[unset] bg-gray-50 p-1 shadow-md ',
                    menu.popoverContentClassName
                  )}
                  items={menu.dropdownItems ?? []}
                />
              )}

              {menu.type === 'collapse' && (
                <CollapsibleMenu
                  className={cn(
                    'absolute start-0 top-[calc(100%_+_20px)] w-[unset] bg-white shadow-md  dark:bg-gray-100',
                    menu.popoverContentClassName
                  )}
                  items={menu.dropdownItems ?? []}
                />
              )}

              {menu.type === 'link' && (
                <LinkMenu
                  className={cn(
                    'absolute start-0 top-[calc(100%_+_20px)] bg-white p-3 shadow-md dark:bg-gray-100',
                    menu.popoverContentClassName
                  )}
                  items={menu.dropdownItems ?? []}
                />
              )}
            </>
          )}
        </AnimatePresence>
      </li>
    </>
  );
}
