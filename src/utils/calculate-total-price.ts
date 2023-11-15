export function calculateTotalPrice(
  basePrice: number,
  shippingCost: number,
  discount: number,
  taxPercentage: number
): number {
  const discountedPrice = basePrice - discount;
  const taxAmount = (discountedPrice * taxPercentage) / 100;
  const total =
    Number(discountedPrice) + Number(shippingCost) + Number(taxAmount);
  return total;
}
