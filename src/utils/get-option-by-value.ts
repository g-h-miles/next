export function getOptionByValue(value: string, options: any[]) {
  return options.find((option) => option.value === value);
}
