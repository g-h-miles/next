import { useMemo } from 'react';
// import { useRouter } from 'next/router';
import { CURRENCY_CODE, CURRENCY_OPTIONS, LOCALE } from '@/config/constants';

export function formatPrice({
  amount,
  currencyCode,
  locale,
  fractions,
}: {
  amount: number;
  currencyCode: string;
  locale: string;
  fractions: number;
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: fractions,
  });

  return formatCurrency.format(amount);
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale,
  fractions = 2,
}: {
  baseAmount: number;
  amount: number;
  currencyCode: string;
  locale: string;
  fractions: number;
}) {
  const hasDiscount = baseAmount > amount;
  const formatDiscount = new Intl.NumberFormat(locale, { style: 'percent' });
  const discount = hasDiscount
    ? formatDiscount.format((baseAmount - amount) / baseAmount)
    : null;

  const price = formatPrice({ amount, currencyCode, locale, fractions });
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale, fractions })
    : null;

  return { price, basePrice, discount };
}

export default function usePrice(
  data?: {
    amount: number;
    baseAmount?: number;
    currencyCode?: string;
  } | null
) {
  const { amount, baseAmount, currencyCode, currencyOptionsFormat } = {
    ...data,
    currencyCode: CURRENCY_CODE,
    currencyOptionsFormat: CURRENCY_OPTIONS,
  };
  const { formation, fractions } = currencyOptionsFormat!;

  // const { locale } = useRouter();
  const value = useMemo(() => {
    if (typeof amount !== 'number' || !currencyCode) return '';
    const fractionalDigit = fractions ? fractions : 2;
    let currentLocale = formation ? formation : LOCALE;
    // if (process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG) {
    //   currentLocale = locale ? locale : 'en';
    // }

    return baseAmount
      ? formatVariantPrice({
          amount,
          baseAmount,
          currencyCode,
          locale: currentLocale,
          fractions: fractionalDigit,
        })
      : formatPrice({
          amount,
          currencyCode,
          locale: currentLocale,
          fractions: fractionalDigit,
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, baseAmount, currencyCode]);

  return typeof value === 'string'
    ? { price: value, basePrice: null, discount: null }
    : value;
}
