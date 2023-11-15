export type InitialStateType = {
  search: string;
  for_sale: string;
  pricing: string;
  price: number[] | string;
  bed_and_baths: string[] | string;
  home_type: string[] | string;
  maxHoA: string;
  listing_type: string;
  property_status: string[] | string;
  parking_spots: string;
  garages: string;
  square_feet_min: string;
  square_feet_max: string;
  lot_size_min: string;
  lot_size_max: string;
  built_year_min: string;
  built_year_max: string;
  basement: string;
  number_of_stories: string;
  senior_living: string;
  other_amenities: string;
  view: string;
  sold_in_last: string;
  keywords: string;
  tour_status: string[] | string;
};

export const initialState: InitialStateType = {
  search: '',
  for_sale: '',
  pricing: '',
  price: [0, 0],
  bed_and_baths: [],
  home_type: [],
  maxHoA: '',
  listing_type: '',
  property_status: [],
  parking_spots: '',
  garages: '',
  square_feet_min: '',
  square_feet_max: '',
  lot_size_min: '',
  lot_size_max: '',
  built_year_min: '',
  built_year_max: '',
  basement: '',
  number_of_stories: '',
  senior_living: '',
  other_amenities: '',
  view: '',
  sold_in_last: '',
  keywords: '',
  tour_status: [],
};

// Options
export const homeTypes = [
  {
    id: 1,
    name: 'Houses',
    value: 'houses',
    selected: false,
  },
  {
    id: 2,
    name: 'Townhomes',
    value: 'townhomes',
    selected: false,
  },
  {
    id: 3,
    name: 'Multi-Family',
    value: 'multi-family',
    selected: false,
  },
  {
    id: 4,
    name: 'Condor/Co-ops',
    value: 'condor-coOps',
    selected: false,
  },
  {
    id: 5,
    name: 'Lots/Lands',
    value: 'lots-lands',
    selected: false,
  },
  {
    id: 6,
    name: 'Apartments',
    value: 'apartments',
    selected: false,
  },
  {
    id: 7,
    name: 'Manufactured',
    value: 'manufactured',
    selected: false,
  },
];

export const forsaleData = [
  {
    id: 1,
    name: 'For Sale',
    value: 'for-sale',
  },
  {
    id: 2,
    name: 'For Rent',
    value: 'for-rent',
  },
  {
    id: 3,
    name: 'Sold',
    value: 'sold',
  },
];

export const maxHOAOptions = [
  { name: 'Any', value: 'any' },
  { name: 'No HOA Fee', value: '0' },
  { name: '$50/Month', value: '50' },
  { name: '$100/Month', value: '100' },
  { name: '$200/Month', value: '200' },
  { name: '$500/Month', value: '500' },
];

export const propertyStatusOptions = [
  {
    name: 'Coming Soon',
    value: 'coming_soon',
  },
  {
    name: 'Accepting Backup Offer',
    value: 'accepting_backup_offer',
  },
  {
    name: 'Pending & Under Contract',
    value: 'pending_under_contract',
  },
];

export const amenitiesOptions = [
  {
    name: 'Must Have AC',
    value: 'must-have-ac',
  },
  {
    name: 'Must Have Pool',
    value: 'must-have-pool',
  },
  {
    name: 'Warfront',
    value: 'warfront',
  },
];

export const viewOptions = [
  {
    name: 'City',
    value: 'city',
  },
  {
    name: 'Mountain',
    value: 'mountain',
  },
  {
    name: 'Park',
    value: 'park',
  },
  {
    name: 'Water',
    value: 'water',
  },
];

export const tourOptions = [
  {
    name: 'Must Have Open House',
    value: 'have_open_house',
  },
  {
    name: 'Must Have 3D Tour',
    value: 'have_3d_tour',
  },
];

export const parkingSpotsData = [
  { name: 'Any', value: 'any' },
  { name: '1+', value: '1+' },
  { name: '2+', value: '2+' },
  { name: '3+', value: '3+' },
  { name: '4+', value: '4+' },
  { name: '5+', value: '5+' },
];

export const squareFeetOptions = [
  { name: '500 Sqft', value: '500' },
  { name: '750 Sqft', value: '750' },
  { name: '1000 Sqft', value: '1000' },
  { name: '1250 Sqft', value: '1250' },
  { name: '1500 Sqft', value: '1500' },
  { name: '1750 Sqft', value: '1750' },
  { name: '2000 Sqft', value: '2000' },
  { name: '2250 Sqft', value: '2250' },
];

export const lotSizeOptions = [
  { name: '500 Sqft', value: '500' },
  { name: '750 Sqft', value: '750' },
  { name: '1000 Sqft', value: '1000' },
  { name: '1250 Sqft', value: '1250' },
  { name: '1500 Sqft', value: '1500' },
  { name: '1750 Sqft', value: '1750' },
  { name: '2000 Sqft', value: '2000' },
  { name: '2250 Sqft', value: '2250' },
];

export const soldInLastOptions = [
  { name: 'Any', value: 'any' },
  { name: '1 day', value: '1_day' },
  { name: '7 days', value: '7_days' },
  { name: '14 days', value: '14_days' },
  { name: '30 days', value: '30_days' },
  { name: '90 days', value: '90_days' },
  { name: '6 months', value: '6 months' },
  { name: '1 year', value: '1 year' },
];

export const noMinimumData = [
  { name: '$0', value: 0 },
  { name: '$10000', value: 10000 },
  { name: '$20000', value: 20000 },
  { name: '$30000', value: 30000 },
  { name: '$40000', value: 40000 },
  { name: '$50000', value: 50000 },
];

export const noMaximumData = [
  { name: '$0', value: 0 },
  { name: '$100000', value: 100000 },
  { name: '$200000', value: 200000 },
  { name: '$300000', value: 300000 },
  { name: '$400000', value: 400000 },
  { name: '$500000', value: 500000 },
];
