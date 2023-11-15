import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const priorities = {
  Low: 'Low',
  High: 'High',
  Medium: 'Medium',
};
export const shippingStatuses = {
  Approved: 'Approved',
  InTransit: 'In Transit',
  OutForDelivery: 'Out For Delivery',
  Delivered: 'Delivered',
  DeliveryFailed: 'Delivery Failed',
};
export const paymentMethods = {
  CashOnDelivery: 'Cash on Delivery',
  CardPayment: 'Card Payment',
  PayPal: 'PayPal',
  ApplePay: 'Apple Pay',
  GooglePay: 'Google Pay',
};

export type PriorityType = keyof typeof priorities;
export type StatusType =
  | 'Approved'
  | 'In Transit'
  | 'Out For Delivery'
  | 'Delivered'
  | 'Delivery Failed';

type Person = {
  name: string;
  avatar: string;
};

export type TicketType = {
  id: string;
  trackingId: string;
  date: Date;
  sender: Person;
  receiver: Person;
  origin: string;
  destination: string;
  paymentMethod: string;
  status: StatusType;
};

export type ShipmentType = {
  id: string;
  trackingNumber: string;
  recipient: {
    name: string;
    avatar: string;
  };
  destination: string;
  date: Date;
  cost: string;
  payment: string;
  status: StatusType;
  invoiceStatus: string;
};

export const shipmentData = [
  {
    id: 'da6ec6cf-bf80-4d92-b1fb-8f96c537ae30',
    trackingId: 'HHP6411',
    date: '2018-06-08T23:09:12.576Z',
    sender: {
      name: 'Tracy Rempel',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Priscilla Price',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Kazakhstan',
    destination: 'Hong Kong',
    paymentMethod: 'Google Pay',
    status: 'Delivered',
  },
  {
    id: '7f4d4b25-aa50-4e36-b208-b6d30b71aa6d',
    trackingId: 'HHP3454',
    date: '2021-08-23T01:40:25.825Z',
    sender: {
      name: 'Nelson Toy',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Wesley Gulgowski-Hayes',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Monaco',
    destination: 'Albania',
    paymentMethod: 'Apple Pay',
    status: 'Delivered',
  },
  {
    id: 'de96661f-dd18-4c7d-8d26-d7f401ff2d51',
    trackingId: 'HHP1979',
    date: '2018-12-12T14:11:29.183Z',
    sender: {
      name: 'Cristina Waelchi',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Owen Stokes',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Suriname',
    destination: 'Tanzania',
    paymentMethod: 'Cash on Delivery',
    status: 'Approved',
  },
  {
    id: '88ea91b3-a70c-4808-ad6e-a45641ec1be1',
    trackingId: 'HHP2430',
    date: '2021-07-08T18:04:03.850Z',
    sender: {
      name: 'Carole Bogan',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Billie Nienow',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'China',
    destination: 'Sweden',
    paymentMethod: 'PayPal',
    status: 'Delivery Failed',
  },
  {
    id: '0953f1c7-7edb-4b64-9d19-4f8248a0eba0',
    trackingId: 'HHP2594',
    date: '2022-12-28T05:29:57.101Z',
    sender: {
      name: 'Marian Will',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Nicholas Carter',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Libyan Arab Jamahiriya',
    destination: 'Turkmenistan',
    paymentMethod: 'Cash on Delivery',
    status: 'Delivered',
  },
  {
    id: 'b70eca3d-72bc-412f-9fce-3e8b6e433d3c',
    trackingId: 'HHP1933',
    date: '2022-03-22T18:34:46.584Z',
    sender: {
      name: 'Kristen Kirlin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Audrey Conroy',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Belize',
    destination: 'Chile',
    paymentMethod: 'Card Payment',
    status: 'Approved',
  },
  {
    id: 'e714dc27-8463-497c-ad53-b0d0a06b0283',
    trackingId: 'HHP7784',
    date: '2022-04-28T00:43:49.934Z',
    sender: {
      name: 'Kim Nicolas',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Randolph Heller',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Uganda',
    destination: 'Panama',
    paymentMethod: 'Google Pay',
    status: 'Delivery Failed',
  },
  {
    id: '13ce0dc7-b4e6-4c18-99fc-87d18044a9c9',
    trackingId: 'HHP1670',
    date: '2018-01-30T08:52:47.969Z',
    sender: {
      name: 'Jaime Murazik',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Annette Hyatt',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Guadeloupe',
    destination: 'Tonga',
    paymentMethod: 'Apple Pay',
    status: 'In Transit',
  },
  {
    id: '9831e914-6344-4e71-a875-d73dfc0bca0f',
    trackingId: 'HHP6091',
    date: '2021-12-03T10:40:20.654Z',
    sender: {
      name: 'Kathy Zemlak',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Gwen Bernier',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Dominican Republic',
    destination: 'Tokelau',
    paymentMethod: 'Google Pay',
    status: 'Out For Delivery',
  },
  {
    id: '66eef98c-32cb-42b6-970b-686921f3f9ba',
    trackingId: 'HHP0563',
    date: '2021-09-01T19:33:23.836Z',
    sender: {
      name: 'Mr. Luis Schmeler-Legros',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Noel Funk',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Somalia',
    destination: 'Algeria',
    paymentMethod: 'Card Payment',
    status: 'Delivered',
  },
  {
    id: '329b1a06-362f-461d-addb-c9fa1d37044d',
    trackingId: 'HHP8377',
    date: '2018-12-17T02:29:56.581Z',
    sender: {
      name: 'Laurie Beer',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'James Welch',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Switzerland',
    destination: 'Mongolia',
    paymentMethod: 'Card Payment',
    status: 'In Transit',
  },
  {
    id: '9a3d54e7-2579-41eb-937a-2035fd85062c',
    trackingId: 'HHP6410',
    date: '2018-11-12T19:24:31.825Z',
    sender: {
      name: 'Cheryl Corkery',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Mr. Kyle Pfeffer',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Guinea-Bissau',
    destination: 'Isle of Man',
    paymentMethod: 'PayPal',
    status: 'Approved',
  },
  {
    id: '2d5f9fe2-2dd4-4c15-91fa-8798225cda5c',
    trackingId: 'HHP5268',
    date: '2019-07-21T21:25:28.867Z',
    sender: {
      name: 'Bennie Weber',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Arnold Leannon',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Bolivia',
    destination: 'Azerbaijan',
    paymentMethod: 'Card Payment',
    status: 'Approved',
  },
  {
    id: '65bc0a73-aaf0-4f48-b015-b7ecc9b6db01',
    trackingId: 'HHP1247',
    date: '2018-07-19T00:17:13.182Z',
    sender: {
      name: 'Moses Bashirian',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Dr. Darlene Roberts',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Lithuania',
    destination: 'Uruguay',
    paymentMethod: 'Cash on Delivery',
    status: 'Delivered',
  },
  {
    id: 'bcea1ed7-958e-4f1a-8a2d-c4e10e65fae8',
    trackingId: 'HHP7998',
    date: '2019-09-27T03:37:39.519Z',
    sender: {
      name: 'Beulah Rohan',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Arthur Goyette',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Cayman Islands',
    destination: 'Moldova',
    paymentMethod: 'Card Payment',
    status: 'In Transit',
  },
  {
    id: 'e306af51-35a0-4135-825e-d338a0e6f8ae',
    trackingId: 'HHP5221',
    date: '2020-10-05T04:42:12.119Z',
    sender: {
      name: 'Kelli Pfannerstill',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Dr. Christopher Baumbach',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Fiji',
    destination: 'Zimbabwe',
    paymentMethod: 'Apple Pay',
    status: 'Delivery Failed',
  },
  {
    id: '5c737802-553c-4d35-86b0-07556c3b5e5a',
    trackingId: 'HHP1525',
    date: '2018-02-16T16:28:23.890Z',
    sender: {
      name: 'Terry Kautzer',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Alfredo Cruickshank',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Christmas Island',
    destination: 'Western Sahara',
    paymentMethod: 'Apple Pay',
    status: 'Delivered',
  },
  {
    id: '05f3f25a-095b-4be8-b961-6b98c248836e',
    trackingId: 'HHP0731',
    date: '2022-08-12T19:29:25.633Z',
    sender: {
      name: 'Marco Koss',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Mario Howe',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Vietnam',
    destination: 'Kuwait',
    paymentMethod: 'Apple Pay',
    status: 'Out For Delivery',
  },
  {
    id: '4e97bdb2-8e20-435b-8b46-db240375321f',
    trackingId: 'HHP3581',
    date: '2018-06-21T09:13:03.760Z',
    sender: {
      name: 'Eugene Feest',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Sue Lind',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Niger',
    destination: 'Madagascar',
    paymentMethod: 'PayPal',
    status: 'Delivery Failed',
  },
  {
    id: 'e1cec898-e46f-418c-bb8b-b3c3d4845420',
    trackingId: 'HHP0951',
    date: '2021-11-05T23:53:38.522Z',
    sender: {
      name: 'Pat Bruen',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Ted Ortiz',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'United Arab Emirates',
    destination: 'Mayotte',
    paymentMethod: 'Cash on Delivery',
    status: 'Out For Delivery',
  },
  {
    id: '2cef960c-76bc-4a3e-9141-95eed115fdda',
    trackingId: 'HHP1172',
    date: '2018-04-17T14:57:41.296Z',
    sender: {
      name: 'Carole Price',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Donnie Medhurst DVM',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Singapore',
    destination: 'Tuvalu',
    paymentMethod: 'Card Payment',
    status: 'Delivery Failed',
  },
  {
    id: '6c629288-fd34-433f-b350-68a42a217649',
    trackingId: 'HHP1604',
    date: '2021-10-22T13:49:10.836Z',
    sender: {
      name: 'Gilbert McKenzie',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Kristen Legros',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Kiribati',
    destination: 'Burkina Faso',
    paymentMethod: 'Card Payment',
    status: 'Out For Delivery',
  },
  {
    id: '131e46cf-0766-4b34-a630-2e90b040da95',
    trackingId: 'HHP6937',
    date: '2023-07-29T06:31:45.685Z',
    sender: {
      name: 'Muriel Gorczany',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Wilfred Larson',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Faroe Islands',
    destination: 'Chile',
    paymentMethod: 'Cash on Delivery',
    status: 'Out For Delivery',
  },
  {
    id: '22ef247b-0121-425e-9705-fe0449ce3ac2',
    trackingId: 'HHP8783',
    date: '2021-08-23T11:30:13.169Z',
    sender: {
      name: 'Lela Powlowski',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Dora Bradtke',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Turkmenistan',
    destination: 'Svalbard & Jan Mayen Islands',
    paymentMethod: 'Card Payment',
    status: 'Delivery Failed',
  },
  {
    id: '0236d69e-8a95-4c40-a5ea-fdf3e89e6c0d',
    trackingId: 'HHP3592',
    date: '2020-05-28T08:50:59.653Z',
    sender: {
      name: 'Ginger Effertz',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Janis Schiller',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Cuba',
    destination: 'Malta',
    paymentMethod: 'PayPal',
    status: 'Out For Delivery',
  },
  {
    id: '71aab5a9-9760-422f-85a3-f13350aba1d1',
    trackingId: 'HHP5164',
    date: '2021-03-30T17:06:03.915Z',
    sender: {
      name: 'Ross Conroy',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Hugo Bernier',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Western Sahara',
    destination: 'Cape Verde',
    paymentMethod: 'Apple Pay',
    status: 'In Transit',
  },
  {
    id: 'd6525f8e-dedd-4b12-b410-cc40ab4df55e',
    trackingId: 'HHP5791',
    date: '2020-09-22T06:11:18.537Z',
    sender: {
      name: 'Sonja Cummings',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Bradford Marks',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Bonaire, Sint Eustatius and Saba',
    destination: 'Germany',
    paymentMethod: 'PayPal',
    status: 'In Transit',
  },
  {
    id: '74eb1932-0580-4980-9ed0-d590e70b7151',
    trackingId: 'HHP0050',
    date: '2023-01-23T19:53:33.091Z',
    sender: {
      name: 'Curtis Von',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Victor Simonis',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Barbados',
    destination: 'Papua New Guinea',
    paymentMethod: 'Card Payment',
    status: 'Delivered',
  },
  {
    id: '4952293b-7db9-474c-8e1d-84c9c0311f33',
    trackingId: 'HHP4232',
    date: '2021-10-10T20:35:33.877Z',
    sender: {
      name: 'Nelson Effertz',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Mindy Hudson',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Vanuatu',
    destination: 'Guadeloupe',
    paymentMethod: 'Card Payment',
    status: 'Approved',
  },
  {
    id: '13fd5ecd-e2c4-48da-a3b2-0d0975125b16',
    trackingId: 'HHP6058',
    date: '2023-07-06T21:50:53.765Z',
    sender: {
      name: 'Sherman Kassulke',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Nina Leffler',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Nigeria',
    destination: 'Central African Republic',
    paymentMethod: 'Apple Pay',
    status: 'Out For Delivery',
  },
  {
    id: '6dbf8140-00bb-473e-a1a7-a99ad5566b33',
    trackingId: 'HHP1354',
    date: '2022-07-19T05:29:14.343Z',
    sender: {
      name: 'Keith Langworth',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Mr. Gene Stamm',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Macao',
    destination: 'Estonia',
    paymentMethod: 'Apple Pay',
    status: 'In Transit',
  },
  {
    id: '5598184c-b673-4464-a6b2-037b64537251',
    trackingId: 'HHP3694',
    date: '2020-02-16T09:28:20.711Z',
    sender: {
      name: 'Willard Jones',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Antonia Feest',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Malta',
    destination: 'Burundi',
    paymentMethod: 'Card Payment',
    status: 'Delivered',
  },
  {
    id: '4d2c1828-3706-4cb9-8af7-abf0323192ed',
    trackingId: 'HHP6752',
    date: '2018-08-27T10:58:54.073Z',
    sender: {
      name: 'Roderick Prohaska-Mosciski MD',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Trevor Beer I',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Colombia',
    destination: 'New Caledonia',
    paymentMethod: 'Cash on Delivery',
    status: 'Delivered',
  },
  {
    id: '258fef4e-0a7f-4d12-8a3d-80d5199ef87e',
    trackingId: 'HHP1176',
    date: '2023-08-06T19:53:11.228Z',
    sender: {
      name: 'Neil Kshlerin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Mr. Leroy Lakin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'China',
    destination: 'Liechtenstein',
    paymentMethod: 'Google Pay',
    status: 'In Transit',
  },
  {
    id: '6ac971d4-327e-4c11-9ae0-f6f8898d956f',
    trackingId: 'HHP2088',
    date: '2021-08-18T10:15:27.413Z',
    sender: {
      name: 'Susan Pouros',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Frances Bins II',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: "Democratic People's Republic of Korea",
    destination: 'Morocco',
    paymentMethod: 'Google Pay',
    status: 'Out For Delivery',
  },
  {
    id: 'b841b238-b0f6-4a91-b7e7-adaac083b6fd',
    trackingId: 'HHP5547',
    date: '2021-09-30T20:23:11.357Z',
    sender: {
      name: 'Tabitha Weimann',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Gilbert Murazik',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Indonesia',
    destination: 'South Sudan',
    paymentMethod: 'Cash on Delivery',
    status: 'Out For Delivery',
  },
  {
    id: '8ea3d987-ec8b-43b5-b3a5-63e3c3d7d44c',
    trackingId: 'HHP0479',
    date: '2018-08-15T01:15:48.050Z',
    sender: {
      name: 'Erick Metz',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Alfonso Fisher',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Finland',
    destination: 'Curacao',
    paymentMethod: 'Google Pay',
    status: 'Approved',
  },
  {
    id: '7779679a-62c8-4c14-8dab-2012a80d59bd',
    trackingId: 'HHP4126',
    date: '2018-02-18T04:47:08.085Z',
    sender: {
      name: 'Orville Collier',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Kristy Koelpin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Armenia',
    destination: 'Holy See (Vatican City State)',
    paymentMethod: 'PayPal',
    status: 'In Transit',
  },
  {
    id: 'ae14ee95-3019-46a4-b4fd-47fe7098e7f6',
    trackingId: 'HHP9899',
    date: '2023-06-19T05:50:06.232Z',
    sender: {
      name: 'Sophia Powlowski',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Zachary Huels',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Lebanon',
    destination: 'Western Sahara',
    paymentMethod: 'Apple Pay',
    status: 'Delivery Failed',
  },
  {
    id: '03158082-2e9a-42f0-b882-a42d85f69251',
    trackingId: 'HHP0944',
    date: '2021-05-08T19:55:02.746Z',
    sender: {
      name: 'Mr. Eduardo Turner-Wiza',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Candace Baumbach',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'South Africa',
    destination: 'Trinidad and Tobago',
    paymentMethod: 'Apple Pay',
    status: 'Approved',
  },
  {
    id: '455b10a7-286e-4ed8-a9a1-d30995503eb8',
    trackingId: 'HHP3103',
    date: '2023-07-28T14:51:46.161Z',
    sender: {
      name: 'Heidi Schultz',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Julia Johnston',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Poland',
    destination: 'Holy See (Vatican City State)',
    paymentMethod: 'Cash on Delivery',
    status: 'Delivered',
  },
  {
    id: '68a31b06-8684-4fbb-a313-4c4db6365f75',
    trackingId: 'HHP5657',
    date: '2018-07-29T02:45:40.989Z',
    sender: {
      name: 'Mr. Joshua Kuhic',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Delbert King DVM',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Western Sahara',
    destination: 'Paraguay',
    paymentMethod: 'Cash on Delivery',
    status: 'Approved',
  },
  {
    id: 'b84121a3-1548-47ff-8967-6c065ff88965',
    trackingId: 'HHP0894',
    date: '2019-03-30T19:51:45.881Z',
    sender: {
      name: 'Frederick Walker',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Dr. Ronnie Champlin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'North Macedonia',
    destination: 'Burundi',
    paymentMethod: 'Cash on Delivery',
    status: 'Out For Delivery',
  },
  {
    id: '29a4bf75-0629-4131-84d1-bf8e8c9f04f2',
    trackingId: 'HHP2833',
    date: '2020-11-02T12:23:52.088Z',
    sender: {
      name: 'Amos Dibbert-Ebert',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Gwen Stokes',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Aland Islands',
    destination: 'Azerbaijan',
    paymentMethod: 'Card Payment',
    status: 'Delivered',
  },
  {
    id: 'dcf14177-b1fd-462d-9146-e461512fb44b',
    trackingId: 'HHP1515',
    date: '2020-01-15T17:41:49.349Z',
    sender: {
      name: 'Susan Cormier',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'James Rippin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Spain',
    destination: 'Andorra',
    paymentMethod: 'Apple Pay',
    status: 'Delivery Failed',
  },
  {
    id: 'cc84db6e-ae4b-468d-9813-ce5bc3b3ab77',
    trackingId: 'HHP7224',
    date: '2022-11-27T06:12:10.751Z',
    sender: {
      name: 'Dr. Gregory Sipes',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Ms. Connie Johnson',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Japan',
    destination: 'Pakistan',
    paymentMethod: 'Cash on Delivery',
    status: 'Delivery Failed',
  },
  {
    id: '3515b9b3-ce6f-4885-bdd2-c41c7ca948c4',
    trackingId: 'HHP5776',
    date: '2018-06-21T20:50:43.930Z',
    sender: {
      name: 'Mr. Homer Ernser',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Erik Toy',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Uruguay',
    destination: 'Norway',
    paymentMethod: 'PayPal',
    status: 'In Transit',
  },
  {
    id: '78c55d23-3ee0-4dcb-b7a7-22f0f5f58408',
    trackingId: 'HHP0211',
    date: '2018-12-20T23:18:52.052Z',
    sender: {
      name: "Jesse O'Connell",
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Bonnie Breitenberg-Upton',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Samoa',
    destination: 'Saint Lucia',
    paymentMethod: 'Google Pay',
    status: 'Approved',
  },
  {
    id: 'eb760415-373e-40d2-b432-9c1aa6f85f7e',
    trackingId: 'HHP4008',
    date: '2019-08-06T21:55:27.098Z',
    sender: {
      name: 'Marcus Rogahn',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Stacy Gulgowski',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Vanuatu',
    destination: 'Romania',
    paymentMethod: 'Cash on Delivery',
    status: 'Delivery Failed',
  },
  {
    id: '8dcd03f9-730e-4721-9802-ac4844eb07c4',
    trackingId: 'HHP9173',
    date: '2023-02-15T02:39:05.012Z',
    sender: {
      name: 'Roger Barton',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    receiver: {
      name: 'Natalie Jakubowski',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    origin: 'Spain',
    destination: 'Austria',
    paymentMethod: 'Apple Pay',
    status: 'In Transit',
  },
];
