import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const ticketStatuses = {
  open: 'open',
  closed: 'closed',
  completed: 'completed',
  inProgress: 'inProgress',
};
export type TicketCountsType = {
  open: number;
  closed: number;
  completed: number;
  inProgress: number;
};

export const statuses = {
  'In Progress': 'In Progress',
  Completed: 'Completed',
  Open: 'Open',
  Closed: 'Closed',
};

export type StatusType = keyof typeof statuses;

export type CustomerTicketsDataType = {
  id: string;
  ticketsCount: number;
  user: {
    name: string;
    avatar: string;
  };
  location: {
    country: string;
    countryCode: string;
  };
  lastCreated: Date;
  status: StatusType;
};

export const customerWithTickets = [
  {
    id: '9b94f685-1165-4aab-b69c-ea59d554c04f',
    user: {
      name: 'Johnnie Kassulke',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    ticketsCount: 23,
    location: {
      country: 'Slovenia',
      countryCode: 'FR',
    },
    lastCreated: '2022-11-10T06:22:01.621Z',
    status: 'In Progress',
    engagementRate: 70.03,
    chart: [
      {
        label: '1',
        count: 21,
      },
      {
        label: '2',
        count: 23,
      },
      {
        label: '3',
        count: 16,
      },
      {
        label: '4',
        count: 87,
      },
      {
        label: '5',
        count: 49,
      },
      {
        label: '6',
        count: 100,
      },
      {
        label: '7',
        count: 88,
      },
      {
        label: '8',
        count: 57,
      },
      {
        label: '9',
        count: 86,
      },
      {
        label: '10',
        count: 73,
      },
      {
        label: '11',
        count: 57,
      },
      {
        label: '12',
        count: 32,
      },
      {
        label: '13',
        count: 39,
      },
      {
        label: '14',
        count: 99,
      },
      {
        label: '15',
        count: 12,
      },
      {
        label: '16',
        count: 33,
      },
      {
        label: '17',
        count: 26,
      },
      {
        label: '18',
        count: 50,
      },
      {
        label: '19',
        count: 18,
      },
      {
        label: '20',
        count: 48,
      },
    ],
  },
  {
    id: 'efdfa75e-8fb2-4357-a03f-200d166d5450',
    user: {
      name: 'Dr. Marcos McGlynn',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    ticketsCount: 35,
    location: {
      country: 'Rwanda',
      countryCode: 'YT',
    },
    lastCreated: '2023-02-06T17:46:26.713Z',
    status: 'Closed',
    engagementRate: 21.19,
    chart: [
      {
        label: '1',
        count: 80,
      },
      {
        label: '2',
        count: 9,
      },
      {
        label: '3',
        count: 59,
      },
      {
        label: '4',
        count: 79,
      },
      {
        label: '5',
        count: 70,
      },
      {
        label: '6',
        count: 4,
      },
      {
        label: '7',
        count: 75,
      },
      {
        label: '8',
        count: 75,
      },
      {
        label: '9',
        count: 89,
      },
      {
        label: '10',
        count: 24,
      },
      {
        label: '11',
        count: 95,
      },
      {
        label: '12',
        count: 7,
      },
      {
        label: '13',
        count: 13,
      },
      {
        label: '14',
        count: 88,
      },
      {
        label: '15',
        count: 10,
      },
      {
        label: '16',
        count: 83,
      },
      {
        label: '17',
        count: 53,
      },
      {
        label: '18',
        count: 73,
      },
      {
        label: '19',
        count: 78,
      },
      {
        label: '20',
        count: 76,
      },
    ],
  },
  {
    id: '3f48e02e-c6b7-4ee4-ba7a-f81c9d9f1cd9',
    user: {
      name: 'Omar Haag',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    ticketsCount: 87,
    location: {
      country: 'Eswatini',
      countryCode: 'MS',
    },
    lastCreated: '2022-03-06T05:10:57.625Z',
    status: 'Open',
    engagementRate: 16.39,
    chart: [
      {
        label: '1',
        count: 26,
      },
      {
        label: '2',
        count: 24,
      },
      {
        label: '3',
        count: 78,
      },
      {
        label: '4',
        count: 82,
      },
      {
        label: '5',
        count: 70,
      },
      {
        label: '6',
        count: 46,
      },
      {
        label: '7',
        count: 10,
      },
      {
        label: '8',
        count: 27,
      },
      {
        label: '9',
        count: 56,
      },
      {
        label: '10',
        count: 49,
      },
      {
        label: '11',
        count: 33,
      },
      {
        label: '12',
        count: 9,
      },
      {
        label: '13',
        count: 58,
      },
      {
        label: '14',
        count: 57,
      },
      {
        label: '15',
        count: 53,
      },
      {
        label: '16',
        count: 57,
      },
      {
        label: '17',
        count: 62,
      },
      {
        label: '18',
        count: 37,
      },
      {
        label: '19',
        count: 48,
      },
      {
        label: '20',
        count: 76,
      },
    ],
  },
  {
    id: '4c49aaab-fcf5-4ac6-8815-09824a9e7b20',
    user: {
      name: 'Susie Beatty',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    ticketsCount: 57,
    location: {
      country: 'Tuvalu',
      countryCode: 'MF',
    },
    lastCreated: '2021-09-27T21:47:53.304Z',
    status: 'Closed',
    engagementRate: 30.25,
    chart: [
      {
        label: '1',
        count: 17,
      },
      {
        label: '2',
        count: 70,
      },
      {
        label: '3',
        count: 18,
      },
      {
        label: '4',
        count: 34,
      },
      {
        label: '5',
        count: 16,
      },
      {
        label: '6',
        count: 57,
      },
      {
        label: '7',
        count: 24,
      },
      {
        label: '8',
        count: 67,
      },
      {
        label: '9',
        count: 83,
      },
      {
        label: '10',
        count: 18,
      },
      {
        label: '11',
        count: 96,
      },
      {
        label: '12',
        count: 57,
      },
      {
        label: '13',
        count: 34,
      },
      {
        label: '14',
        count: 96,
      },
      {
        label: '15',
        count: 27,
      },
      {
        label: '16',
        count: 25,
      },
      {
        label: '17',
        count: 26,
      },
      {
        label: '18',
        count: 74,
      },
      {
        label: '19',
        count: 49,
      },
      {
        label: '20',
        count: 72,
      },
    ],
  },
  {
    id: 'bf2365bd-5aa7-40a8-af8a-2847b38f5b76',
    user: {
      name: 'Kristie Ziemann',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    ticketsCount: 98,
    location: {
      country: 'Cocos (Keeling) Islands',
      countryCode: 'BV',
    },
    lastCreated: '2021-11-26T06:34:48.311Z',
    status: 'Closed',
    engagementRate: 41.09,
    chart: [
      {
        label: '1',
        count: 19,
      },
      {
        label: '2',
        count: 47,
      },
      {
        label: '3',
        count: 33,
      },
      {
        label: '4',
        count: 20,
      },
      {
        label: '5',
        count: 21,
      },
      {
        label: '6',
        count: 19,
      },
      {
        label: '7',
        count: 36,
      },
      {
        label: '8',
        count: 20,
      },
      {
        label: '9',
        count: 28,
      },
      {
        label: '10',
        count: 17,
      },
      {
        label: '11',
        count: 64,
      },
      {
        label: '12',
        count: 36,
      },
      {
        label: '13',
        count: 58,
      },
      {
        label: '14',
        count: 76,
      },
      {
        label: '15',
        count: 10,
      },
      {
        label: '16',
        count: 67,
      },
      {
        label: '17',
        count: 73,
      },
      {
        label: '18',
        count: 65,
      },
      {
        label: '19',
        count: 9,
      },
      {
        label: '20',
        count: 84,
      },
    ],
  },
];
