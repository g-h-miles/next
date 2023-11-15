export type InitialStateType = {
  filter: string;
  recommended: [];
  startDate: string;
};

export const initialState: InitialStateType = {
  filter: '',
  recommended: [],
  startDate: '',
};

// Options
export const otherOptions = [
  {
    id: 1,
    name: 'Earliest take-off (DAC)',
    value: 'earliest-take-off',
  },
  {
    id: 2,
    name: 'Latest take-off (DAC)',
    value: 'latest-take-off',
  },
  {
    id: 3,
    name: 'Earliest landing (JFK)',
    value: 'earliest-landing',
  },
  {
    id: 4,
    name: 'Latest landing (JFK)',
    value: 'latest-landing',
  },
  {
    id: 5,
    name: 'Earliest take-off (JFK)',
    value: 'earliest-take-off-jfk',
  },
];

export const tags = [
  {
    name: 'Cheapest',
    value: '$89.2 • 21h 02m',
  },
  {
    name: 'Best',
    value: '$89.2 • 21h 02m',
  },
  {
    name: 'Quickest',
    value: '$71.49 • 19h 50m',
  },
];

export const recommendedData = [
  {
    id: '1',
    name: 'Hide 2+ stops',
    count: 105.0,
  },
];

export const stopsData = [
  {
    id: 1,
    name: 'Direct',
    count: 0,
  },
  {
    id: 2,
    name: '1 stop',
    count: 105.0,
  },
  {
    id: 3,
    name: '2 stop',
    count: 85.5,
  },
];

export const paymentMethods = [
  {
    id: 1,
    name: 'American Express',
  },
  {
    id: 2,
    name: 'Mobile Wallet',
  },
  {
    id: 3,
    name: 'Net Banking',
  },
  {
    id: 4,
    name: 'RuPay',
  },
  {
    id: 5,
    name: 'Diners Club',
  },
  {
    id: 6,
    name: 'UPI',
  },
  {
    id: 7,
    name: 'MasterCard Credit',
  },
  {
    id: 8,
    name: 'Visa Credit',
  },
  {
    id: 9,
    name: 'MasterCard Debit',
  },
  {
    id: 10,
    name: 'Visa Debit',
  },
];

export const airlinesData = [
  {
    id: 1,
    name: 'Multiple Airlines',
    isTooltip: true,
    count: 0,
  },
  {
    id: 2,
    name: 'Emirates',
    isTooltip: false,
    count: 105.0,
  },
  {
    id: 3,
    name: 'Etihad Airways',
    isTooltip: false,
    count: 85.5,
  },
  {
    id: 4,
    name: 'IndiGo',
    isTooltip: false,
    count: 125.5,
  },
  {
    id: 5,
    name: 'Qatar Airways',
    isTooltip: false,
    count: 125.5,
  },
  {
    id: 6,
    name: 'Turkish Airlines',
    isTooltip: false,
    count: 125.5,
  },
];

export const bookingData = [
  {
    id: 1,
    name: 'Airlines only',
    isTooltip: true,
    count: 0,
  },
  {
    id: 2,
    name: 'American Airlines',
    isTooltip: false,
    count: 105.0,
  },
  {
    id: 3,
    name: 'Bravofly',
    isTooltip: false,
    count: 85.5,
  },
  {
    id: 4,
    name: 'British Airways',
    isTooltip: false,
    count: 125.5,
  },
  {
    id: 5,
    name: 'Qatar Airways',
    isTooltip: false,
    count: 125.5,
  },
  {
    id: 6,
    name: 'BudgetAir',
    isTooltip: false,
    count: 125.5,
  },
  {
    id: 7,
    name: 'Cathay Pacific',
    isTooltip: false,
    count: 125.5,
  },
];

export type LayoverAirPortOptionType = {
  id: number;
  name: string;
  isGroupTitle?: boolean;
  checked?: boolean;
  disabled?: boolean;
};

export const layoverAirportsData: LayoverAirPortOptionType[] = [
  { id: 1, name: 'United Arab Emirates', isGroupTitle: true },
  {
    id: 2,
    name: 'Abu Dhabi (AUH)',
  },
  {
    id: 3,
    name: 'Dubai (DXB)',
  },
  { id: 4, name: 'United States', isGroupTitle: true },
  {
    id: 5,
    name: 'Boston (BOS)',

    disabled: true,
  },
  {
    id: 6,
    name: 'Chicago (ORD)',

    disabled: true,
  },
  {
    id: 7,
    name: 'Dallas (DFW)',

    disabled: true,
  },
  {
    id: 8,
    name: 'Los Angeles (LAX)',
  },
  {
    id: 9,
    name: 'Miami (MIA)',
  },
  {
    id: 10,
    name: 'San Francisco (SFO)',
  },
  {
    id: 11,
    name: 'Singapore',
    isGroupTitle: true,
  },
  { id: 12, name: 'Singapore (SIN)', disabled: true },

  {
    id: 13,
    name: 'United Kingdom',
    isGroupTitle: true,
  },
  {
    id: 14,
    name: 'London (LGW)',
  },
  {
    id: 15,
    name: 'London (LHR)',
  },
  {
    id: 16,
    name: 'Manchester (MAN)',
  },
  {
    id: 17,
    name: 'Germany',
    isGroupTitle: true,
  },
  {
    id: 18,
    name: 'Frankfurt am Main (FRA)',
  },
  {
    id: 19,
    name: 'Sri Lanka',
    isGroupTitle: true,
  },
  {
    id: 20,
    name: 'Colombo (CMB)',
  },
];

export const roadTripData = [
  {
    id: 1,
    name: 'Round Way',
    value: 'round-way',
  },
  {
    id: 2,
    name: 'One Way',
    value: 'one-way',
  },
  {
    id: 3,
    name: 'Multi City',
    value: 'multi-city',
  },
];

export const modelData = [
  {
    tabName: 'Include',
    options: [
      {
        id: 1,
        name: 'Airbus A320neo',
      },
      {
        id: 2,
        name: 'Airbus A330neo',
      },
      {
        id: 3,
        name: 'Airbus A350',
      },
      {
        id: 4,
        name: 'Airbus A380',
      },
      {
        id: 5,
        name: 'Boeing 737 MAX',
      },
      {
        id: 6,
        name: 'Boeing 777',
      },
      {
        id: 7,
        name: 'Other',
      },
    ],
  },
  {
    tabName: 'Exclude',
    options: [
      {
        id: 1,
        name: 'Boeing 737 MAX',
      },
      {
        id: 2,
        name: 'Boeing 777',
      },
      {
        id: 3,
        name: 'Other',
      },
      {
        id: 4,
        name: 'Airbus A320neo',
      },
      {
        id: 5,
        name: 'Airbus A330neo',
      },
      {
        id: 6,
        name: 'Airbus A350',
      },
      {
        id: 7,
        name: 'Airbus A380',
      },
      {
        id: 8,
        name: 'Boeing 737 MAX',
      },
    ],
  },
];

export const locationData = [
  {
    id: '1',
    city: 'Abidjan',
    cityCode: 'ABJ',
    country: 'Ivory Coast',
    airport: 'Felix Houphouet Boigny Airport',
  },
  {
    id: '2',
    city: 'Dhaka',
    cityCode: 'DAC',
    country: 'Bangladesh',
    airport: 'Hazrat Shahjalal International Airport',
  },
  {
    id: '3',
    city: 'Adana',
    cityCode: 'ADA',
    country: 'Turkey',
    airport: 'Adana Airport',
  },
  {
    id: '4',
    city: 'Izmir',
    cityCode: 'ADB',
    country: 'Turkey',
    airport: 'Izmir Adnan Menderes Airport',
  },
  {
    id: '5',
    city: 'Malaga',
    cityCode: 'AGP',
    country: 'Spain',
    airport: 'Malaga Airport',
  },
  {
    id: '6',
    city: 'Almaty',
    cityCode: 'ALA',
    country: 'Kazakhstan',
    airport: 'Almaty International Airport',
  },
  {
    id: '7',
    city: 'Abu Dhabi',
    cityCode: 'AUH',
    country: 'United Arab Emirates',
    airport: 'Abu Dhabi International Airport',
  },
  {
    id: '8',
    city: 'Barcelona',
    cityCode: 'BCN',
    country: 'Spain',
    airport: 'Barcelona International Airport',
  },
];

export const flightListingData = [
  {
    id: 1,
    image: '/logo/qatar.webp',
    title: 'Qatar Airways',
    price: '$540.40',
    model: 'Airbus A330-300',
    hours: '28h 05m',
    stop: '1 stop',
    class: 'Business',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Qatar Airways',
    cheapest: true,
    best: false,
    quickest: false,
  },
  {
    id: 2,
    image: '/logo/biman-logo.webp',
    title: 'Biman Bangladesh',
    price: '$1540.40',
    model: 'Airbus A330-300',
    hours: '19h 05m',
    stop: '2 stop',
    class: 'Business',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Biman Bangladesh',
    cheapest: false,
    best: true,
    quickest: true,
  },
  {
    id: 3,
    image: '/logo/biman.webp',
    title: 'Biman Bangladesh',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '34h 05m',
    stop: '2 stop',
    class: 'Economy',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Biman Bangladesh',
    cheapest: true,
    best: true,
    quickest: false,
  },
  {
    id: 4,
    image: '/logo/emirates.webp',
    title: 'Emirates Airlines',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '8h 05m',
    stop: '2 stop',
    class: 'Economy',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Emirates Airlines',
    cheapest: true,
    best: true,
    quickest: false,
  },
  {
    id: 5,
    image: '/logo/gulfa.webp',
    title: 'Gulfa Airlines',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '8h 05m',
    stop: '2 stop',
    class: 'Business',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Gulfa Airlines',
    cheapest: true,
    best: true,
    quickest: false,
  },
  {
    id: 6,
    image: '/logo/vistara.webp',
    title: 'Vistara Airways',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '8h 05m',
    stop: 'direct',
    class: 'Business',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Vistara Airways',
    cheapest: true,
    best: true,
    quickest: false,
  },
  {
    id: 7,
    image: '/logo/qatar.webp',
    title: 'Qatar Airways',
    price: '$540.40',
    model: 'Airbus A330-300',
    hours: '28h 05m',
    stop: '1 stop',
    class: 'Business',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Qatar Airways',
    cheapest: true,
    best: false,
    quickest: false,
  },
  {
    id: 8,
    image: '/logo/biman-logo.webp',
    title: 'Biman Bangladesh',
    price: '$1540.40',
    model: 'Airbus A330-300',
    hours: '19h 05m',
    stop: '2 stop',
    class: 'Business',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Biman Bangladesh',
    cheapest: false,
    best: true,
    quickest: true,
  },
  {
    id: 9,
    image: '/logo/biman.webp',
    title: 'Biman Bangladesh',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '34h 05m',
    stop: '2 stop',
    class: 'First Class',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Biman Bangladesh',
    cheapest: true,
    best: true,
    quickest: false,
  },
  {
    id: 10,
    image: '/logo/emirates.webp',
    title: 'Emirates Airlines',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '8h 05m',
    stop: '2 stop',
    class: 'First Class',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Emirates Airlines',
    cheapest: true,
    best: true,
    quickest: false,
  },
  {
    id: 11,
    image: '/logo/gulfa.webp',
    title: 'Gulfa Airlines',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '8h 05m',
    stop: '2 stop',
    class: 'Economy',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Gulfa Airlines',
    cheapest: true,
    best: true,
    quickest: false,
  },
  {
    id: 12,
    image: '/logo/vistara.webp',
    title: 'Vistara Airways',
    price: '$540.40',
    model: 'Airbus A430-400',
    hours: '8h 05m',
    stop: 'direct',
    class: 'Economy',
    luggage: '40 kg',
    bag: '7 kg',
    airlines: 'Vistara Airways',
    cheapest: true,
    best: true,
    quickest: false,
  },
];

export function getOptionByValue(value: string, options: any[]) {
  return options.find((option) => option.value === value);
}
