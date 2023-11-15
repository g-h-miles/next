import dayjs from 'dayjs';

export function getFormattedDateString(date: number | string | null | Date) {
  if (!date) return date as string;
  return dayjs(date).format('DD-MMM-YYYY');
}

export function getDateRangeStateValues(state: string | null) {
  if (!state) {
    return null;
  }
  return new Date(state);
}

export default function getFormattedDateRangeString(dates: Date[]) {
  const [start, end] = Array.isArray(dates) ? dates : [];
  if (start && end) {
    return `${getFormattedDateString(start)};${getFormattedDateString(end)}`;
  }
  return getFormattedDateString(start);
}
