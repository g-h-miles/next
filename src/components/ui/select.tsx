'use client';

import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import { FieldHelperText } from 'rizzui';
import { Listbox, Transition } from '@headlessui/react';
import { ExtractProps } from '@/components/ui/table';
import cn from '@/utils/class-names';
import { PiCaretUpDown } from 'react-icons/pi';
import { FieldError } from '@/components/ui/field-error';
import {
  type Placement,
  flip,
  shift,
  offset,
  autoUpdate,
  useFloating,
} from '@floating-ui/react';
import { useElementSize } from '@/hooks/use-element-size';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

const selectClasses = {
  base: 'flex items-center peer w-full transition duration-200',
  disabled: '!bg-gray-100 cursor-not-allowed !border-gray-200',
  error: '!border-red hover:!border-red focus:!border-red focus:!ring-red',
  size: {
    sm: 'px-2 py-1 text-xs h-8 leading-[32px]',
    DEFAULT: 'px-3 py-2 text-sm h-10 leading-[40px]',
    lg: 'px-4 py-2 text-base h-12 leading-[48px]',
    xl: 'px-5 py-2.5 text-base h-14 leading-[56px]',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
  variant: {
    active: {
      base: 'border bg-gray-0 focus:ring-[0.6px]',
      color: {
        DEFAULT:
          'border-gray-900 focus:border-gray-1000 focus:ring-gray-1000 text-gray-1000',
        primary:
          'border-primary focus:border-primary focus:ring-primary text-primary-dark',
        secondary:
          'border-secondary focus:border-secondary focus:ring-secondary text-secondary-dark',
        danger: 'border-red focus:border-red focus:ring-red text-red-dark',
        info: 'border-blue focus:border-blue focus:ring-blue text-blue-dark',
        success:
          'border-green focus:border-green focus:ring-green text-green-dark',
        warning:
          'border-orange focus:border-orange-dark focus:ring-orange-dark text-orange-dark',
      },
    },
    flat: {
      base: 'focus:ring-2 focus:bg-transparent border-0',
      color: {
        DEFAULT: 'bg-gray-200/70 focus:ring-gray-900/20 text-gray-1000',
        primary:
          'bg-primary-lighter/70 focus:ring-primary/30 text-primary-dark',
        secondary:
          'bg-secondary-lighter/70 focus:ring-secondary/30 text-secondary-dark',
        danger: 'bg-red-lighter/70 focus:ring-red/30 text-red-dark',
        info: 'bg-blue-lighter/70 focus:ring-blue/30 text-blue-dark',
        success: 'bg-green-lighter/70 focus:ring-green/30 text-green-dark',
        warning: 'bg-orange-lighter/80 focus:ring-orange/30 text-orange-dark',
      },
    },
    outline: {
      base: 'bg-transparent focus:ring-[0.6px] border border-gray-300',
      color: {
        DEFAULT:
          'hover:border-gray-1000 focus:border-gray-1000 focus:ring-gray-1000',
        primary: 'hover:border-primary focus:border-primary focus:ring-primary',
        secondary:
          'hover:border-secondary focus:border-secondary focus:ring-secondary',
        danger: 'hover:border-red focus:border-red focus:ring-red',
        info: 'hover:border-blue focus:border-blue focus:ring-blue',
        success: 'hover:border-green focus:border-green focus:ring-green',
        warning: 'hover:border-orange focus:border-orange focus:ring-orange',
      },
    },
    text: {
      base: 'border-0 focus:ring-2 bg-transparent',
      color: {
        DEFAULT: 'hover:text-gray-1000 focus:ring-gray-900/20',
        primary: 'hover:text-primary-dark focus:ring-primary/30 text-primary',
        secondary:
          'hover:text-secondary-dark focus:ring-secondary/30 text-secondary',
        danger: 'hover:text-red-600 focus:ring-red/30 text-red',
        info: 'hover:text-blue-dark focus:ring-blue/30 text-blue',
        success: 'hover:text-green-dark focus:ring-green/30 text-green',
        warning: 'hover:text-orange-dark focus:ring-orange/30 text-orange',
      },
    },
  },
};

const optionsClasses = {
  base: 'max-h-[265px] p-2 w-full overflow-auto border border-gray-100 focus:outline-none z-40 bg-gray-0 dark:bg-gray-100 [&>ul]:outline-none [&>ul]:ring-0',
  shadow: {
    sm: 'drop-shadow-md',
    DEFAULT: 'drop-shadow-lg',
    lg: 'drop-shadow-xl',
    xl: 'drop-shadow-2xl',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-xl',
  },
};

const optionClasses = {
  base: 'text-gray-900 relative cursor-pointer select-none text-sm dark:hover:bg-gray-50',
  notFound:
    'relative cursor-default select-none text-center text-gray-500 whitespace-nowrap',
  color: {
    DEFAULT: 'text-gray-900 bg-gray-100',
    primary: 'text-primary-dark bg-primary-lighter',
    secondary: 'text-secondary-dark bg-secondary-lighter',
    danger: 'text-red-dark bg-red-lighter',
    info: 'text-blue-dark bg-blue-lighter',
    success: 'text-green-dark bg-green-lighter',
    warning: 'text-orange-dark bg-orange-lighter',
  },
};

// actual select field styles
const selectFieldClasses = {
  base: 'w-full text-inherit border-0 p-0 focus:outline-none focus:ring-0',
  disabled: 'cursor-not-allowed placeholder:text-gray-500',
  clearable:
    '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
  prefixStartPadding: {
    base: 'rtl:pl-[inherit]',
    size: {
      sm: 'pl-1.5 rtl:pr-1.5',
      DEFAULT: 'pl-2.5 rtl:pr-2.5',
      lg: 'pl-3.5 rtl:pr-3.5',
      xl: 'pl-4 rtl:pr-4',
    },
  },
  suffixEndPadding: {
    base: 'rtl:pr-[inherit]',
    size: {
      sm: 'pr-1.5 rtl:pl-1.5',
      DEFAULT: 'pr-2.5 rtl:pl-2.5',
      lg: 'pr-3.5 rtl:pl-3.5',
      xl: 'pr-4 rtl:pl-4',
    },
  },
};

export type SelectOption = {
  /** Provide unique id for each option */
  value: string | number;
  /** Provide name which will be used as value */
  name: string;
  /** Provide label for each option */
  label?: React.ReactNode;
  /** Whether the option is disabled or not */
  disabled?: boolean;
  /** Any other dynamic key with unknown value */
  [key: string]: unknown;
};

export type SelectBoxProps<Option> = Omit<
  ExtractProps<typeof Listbox>,
  'color'
> & {
  /** Options for select */
  options: SelectOption[];
  // options: Option[];
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Set select placeholder text */
  placeholder?: string;
  /** The size of the component. `"sm"` is equivalent to the dense select styling. */
  size?: keyof typeof labelClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof selectClasses.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof selectClasses.variant;
  /** Change select color */
  color?: keyof (typeof selectClasses.variant)['outline']['color'];
  /** add clearable option */
  clearable?: boolean;
  /** if this field is required or not */
  isRequired?: boolean;
  /** use input width for options container */
  useContainerWidth?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** The prefix is design for adding any icon or text on the select field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: React.ReactNode;
  /** The suffix is design for adding any icon or text on the select field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
  suffix?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Add custom classes for container */
  className?: string;
  /** Add custom classes for container */
  placement?: Placement;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for select */
  selectClassName?: string;
  /** Add custom classes to select option */
  optionClassName?: string;
  /** Override default CSS style of prefix */
  prefixClassName?: string;
  /** Override default CSS style of suffix */
  suffixClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper text message style */
  helperClassName?: string;
  /** This prop allows you to customize the Options Wrapper style */
  dropdownClassName?: string;
  /** Define whether label or value you want to display */
  displayValue?(value: ExtractProps<typeof Listbox>['value']): React.ReactNode;
  /** Use this when you want to display other than displayValue*/
  getOptionDisplayValue?(option: SelectOption): React.ReactNode;
  /** Select whether label or value you want get on onChange method */
  getOptionValue?: (
    option: SelectOption
  ) => SelectOption[keyof SelectOption] | SelectOption;
};

function getOptionValueFn(option: any) {
  return option;
}

function getOptionDisplayValueFn({ name, label }: SelectOption) {
  if (label) return label;
  if (name) return name;
  return `Error: use getOptionDisplayValue prop`;
}

function displayValueFn(value: any) {
  if (isString(value) || isNumber(value)) return value;
  if (value?.label) return value.label;
  if (value.name) return value.name;
  return `Error: use displayValue prop`;
}

export default function SelectBox<OptionType extends SelectOption>({
  label,
  error,
  options,
  disabled,
  className,
  labelClassName,
  selectClassName,
  optionClassName,
  suffixClassName,
  prefixClassName,
  errorClassName,
  helperText,
  helperClassName,
  dropdownClassName,
  prefix = null,
  placeholder = 'Select',
  displayValue = displayValueFn,
  getOptionDisplayValue = getOptionDisplayValueFn,
  getOptionValue = getOptionValueFn,
  value,
  onClear,
  clearable,
  isRequired,
  useContainerWidth = true,
  placement = 'bottom-start',
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  variant = 'outline',
  color = 'DEFAULT',
  suffix = <PiCaretUpDown className="h-5 w-5" />,
  onFocus,
  onBlur,
  ...props
}: SelectBoxProps<OptionType>) {
  const [ref, { width }] = useElementSize();
  const { x, y, refs, strategy } = useFloating({
    placement,
    middleware: [
      flip(),
      shift(),
      offset({
        mainAxis: 6,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const variantStyle = selectClasses.variant[variant];
  const emptyValue = !isNumber(value) && isEmpty(value);

  return (
    <div ref={refs.setReference} className={cn('grid', className)}>
      <Listbox value={value} disabled={disabled} {...props}>
        {({ open }) => (
          <>
            {label && (
              <Listbox.Label
                className={cn(
                  'block font-medium',
                  labelClasses.size[size],
                  labelClassName
                )}
              >
                {label}
                {isRequired && (
                  <span className="ms-1 font-medium text-red-light">*</span>
                )}
              </Listbox.Label>
            )}

            <div ref={ref} className="h-full">
              <Listbox.Button
                className={cn(
                  selectClasses.base,
                  selectFieldClasses.base,
                  variantStyle.base,
                  variantStyle.color[color],
                  selectClasses.size[size],
                  selectClasses.rounded[rounded],
                  disabled && selectFieldClasses.disabled,
                  clearable && selectFieldClasses.clearable,
                  prefix && selectFieldClasses.prefixStartPadding.size[size],
                  suffix && selectFieldClasses.suffixEndPadding.size[size],
                  // isFocus && 'is-focus', // must have is-focus class based on onFocus event
                  disabled && selectClasses.disabled,
                  error && selectClasses.error,
                  selectClassName
                )}
              >
                {prefix && (
                  <span
                    className={cn(
                      'block whitespace-nowrap leading-normal',
                      prefixClassName
                    )}
                  >
                    {prefix}
                  </span>
                )}
                <div
                  className={cn(
                    'block w-full truncate text-left rtl:text-right',
                    emptyValue && 'text-gray-500 dark:text-gray-400',
                    prefix && selectFieldClasses.prefixStartPadding.size[size],
                    suffix && selectFieldClasses.suffixEndPadding.size[size]
                  )}
                >
                  {emptyValue ? placeholder : displayValue(value)}
                </div>

                {clearable && !emptyValue && (
                  <ClearButton
                    size={size}
                    onClick={onClear}
                    hasSuffix={Boolean(suffix)}
                  />
                )}

                {suffix && (
                  <span
                    className={cn(
                      'whitespace-nowrap leading-normal',
                      suffixClassName
                    )}
                  >
                    {suffix}
                  </span>
                )}
              </Listbox.Button>
              <Transition
                ref={refs.setFloating}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className={cn(
                  optionsClasses.base,
                  optionsClasses.shadow[size],
                  optionsClasses.rounded[rounded],
                  dropdownClassName
                )}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  ...(useContainerWidth && { width }),
                }}
              >
                <Listbox.Options>
                  {isEmpty(options) ? (
                    <li
                      className={cn(
                        optionClasses.notFound,
                        selectClasses.size[size],
                        'h-auto'
                      )}
                    >
                      Nothing found.
                    </li>
                  ) : (
                    options.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        {...(option?.disabled && {
                          disabled: option?.disabled,
                        })}
                        className={({ active }) =>
                          cn(
                            optionClasses.base,
                            selectClasses.base,
                            selectClasses.size[size],
                            optionsClasses.rounded[rounded],
                            option?.disabled && selectClasses.disabled,
                            option?.disabled && 'text-gray-500',
                            active && optionClasses.color[color],
                            optionClassName
                          )
                        }
                        value={getOptionValue(option)}
                      >
                        {({ selected }) => (
                          <span
                            className={cn(
                              suffix &&
                                selectFieldClasses.suffixEndPadding.size[size],
                              prefix &&
                                selectFieldClasses.prefixStartPadding.size[
                                  size
                                ],
                              {
                                'font-medium': selected,
                              }
                            )}
                          >
                            {getOptionDisplayValue(option)}
                          </span>
                        )}
                      </Listbox.Option>
                    ))
                  )}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {!error && helperText && (
        <FieldHelperText size={size} className={helperClassName}>
          {helperText}
        </FieldHelperText>
      )}
      {error && (
        <FieldError size={size} error={error} className={errorClassName} />
      )}
    </div>
  );
}

const inputIconClearClasses = {
  base: 'inline-flex shrink-0 transform items-center justify-center rounded-full bg-gray-1000/30 backdrop-blur p-[1px] text-gray-0 transition-all duration-200 ease-in-out hover:bg-gray-1000',
  size: {
    sm: 'h-3.5 w-3.5',
    DEFAULT: 'h-4 w-4',
    lg: 'h-4 w-4',
    xl: 'h-[18px] w-[18px]',
  },
  hasSuffix: {
    sm: 'mr-1.5 rtl:ml-1.5 rtl:mr-[inherit]',
    DEFAULT: 'mr-2 rtl:ml-2 rtl:mr-[inherit]',
    lg: 'mr-2.5 rtl:ml-2.5 rtl:mr-[inherit]',
    xl: 'mr-2.5 rtl:ml-2.5 rtl:mr-[inherit]',
  },
};

export interface FieldClearButtonProps {
  hasSuffix?: boolean;
  size?: keyof typeof inputIconClearClasses.size;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export function ClearButton({
  size,
  onClick,
  hasSuffix,
  className,
}: FieldClearButtonProps) {
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={cn(
        'input-clear-btn', // must contain this CSS class in this component
        inputIconClearClasses.base,
        size && [
          inputIconClearClasses.size[size],
          hasSuffix && inputIconClearClasses.hasSuffix[size],
        ],
        className
      )}
    >
      {/* HeroIcon: x-mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-auto"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </span>
  );
}

ClearButton.displayName = 'ClearButton';
