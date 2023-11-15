import { formatDate } from '@/utils/format-date';

export function getRelativeTime(date: Date): string {
  if (!date) return '';
  date = new Date(date);
  const now = new Date();
  const elapsedSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (elapsedSeconds >= 31536000) {
    // One year in seconds
    return formatDate(date); // Return the actual date as an ISO string
  }

  const intervals: [number, string][] = [
    [2592000, 'month'],
    [86400, 'day'],
    [3600, 'hour'],
    [60, 'minute'],
    [1, 'second'],
  ];

  for (const [seconds, unit] of intervals) {
    const intervalValue = Math.floor(elapsedSeconds / seconds);
    if (intervalValue >= 1) {
      return intervalValue === 1
        ? `${intervalValue} ${unit} ago`
        : `${intervalValue} ${unit}s ago`;
    }
  }

  return 'just now';
}
