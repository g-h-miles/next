export function filterData<T extends Record<string, any>>(
  array: T[],
  filterKeys: string[]
) {
  return array.filter((obj) => {
    return Object.values(obj).some((key) => filterKeys.includes(key));
  });
}
