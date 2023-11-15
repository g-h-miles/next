export type InitialStateType = {
  filter: string;
};

export const initialState: InitialStateType = {
  filter: '',
};

// Options
export const filterOptions = [
  {
    id: 1,
    name: 'Most Active',
    value: 'most-active',
  },
  {
    id: 2,
    name: 'Price: Lowest',
    value: 'price-lowest',
  },
  {
    id: 3,
    name: 'Price: Highest',
    value: 'price-highest',
  },
  {
    id: 4,
    name: 'Newest',
    value: 'newest',
  },
  {
    id: 5,
    name: 'Oldest',
    value: 'oldest',
  },
];

export function getOptionByValue(value: string, options: any[]) {
  return options.find((option) => option.value === value);
}
