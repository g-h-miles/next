// Percentage Calculator Utility
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) {
    throw new Error('Total cannot be zero.');
  }

  const percentage = ((total - value) / total) * 100;
  return parseFloat(percentage.toFixed(2));
}
