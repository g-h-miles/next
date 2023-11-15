import { ROLES } from '@/config/constants';
import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export type User = {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
  role: keyof typeof ROLES;
  createdAt: Date;
  permissions: keyof typeof PERMISSIONS;
  status: keyof typeof STATUSES;
};

export const PERMISSIONS = {
  Read: 'Read',
  Write: 'Write',
  Delete: 'Delete',
} as const;

export const STATUSES = {
  Pending: 'Pending',
  Active: 'Active',
  Deactivated: 'Deactivated',
} as const;

export const usersData = [
  {
    id: '0256',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Bessie Beatty',
    email: 'christophe78@gmail.com',
    role: ROLES.Manager,
    createdAt: '2029-10-14T16:01:40.021Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '6177',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Joshua Green',
    email: 'ayla_schuster28@yahoo.com',
    role: ROLES.Support,
    createdAt: '2027-11-01T13:23:52.903Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '5456',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Wendy Ankunding',
    email: 'lorine66@gmail.com',
    role: ROLES.Support,
    createdAt: '2024-12-29T08:37:13.101Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '6370',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Daryl Wilderman',
    email: 'kane_anderson@gmail.com',
    role: ROLES.RestrictedUser,
    createdAt: '2027-09-01T14:14:54.439Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Deactivated,
  },
  {
    id: '8681',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Antonia Ankunding Jr.',
    email: 'forest_aufderhar76@gmail.com',
    role: ROLES.RestrictedUser,
    createdAt: '2029-08-25T22:39:48.166Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '1083',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Marie VonRueden',
    email: 'molly.hauck57@hotmail.com',
    role: ROLES.Manager,
    createdAt: '2024-10-02T21:04:29.582Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '9425',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Katherine Parisian',
    email: 'rashad.moen@yahoo.com',
    role: ROLES.RestrictedUser,
    createdAt: '2029-05-08T23:10:02.387Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '4775',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Jaime Tremblay',
    email: 'madyson4@yahoo.com',
    role: ROLES.Sales,
    createdAt: '2022-10-05T20:26:08.004Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '5854',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Mr. Abel Hettinger',
    email: 'mac_ebert@hotmail.com',
    role: ROLES.Developer,
    createdAt: '2022-03-18T08:40:32.890Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '9964',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Velma Flatley',
    email: 'mohamed.ebert@yahoo.com',
    role: ROLES.Administrator,
    createdAt: '2025-04-06T11:49:01.720Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '6964',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Ebony Mertz-Grimes',
    email: 'jerry53@yahoo.com',
    role: ROLES.Customer,
    createdAt: '2021-11-05T09:08:03.695Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '3866',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Alma Ebert IV',
    email: 'trent.mcglynn@yahoo.com',
    role: ROLES.Administrator,
    createdAt: '2029-09-09T22:50:40.195Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '4895',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Dr. Lynn Hills V',
    email: 'lauretta.lehner0@gmail.com',
    role: ROLES.HRD,
    createdAt: '2025-05-09T10:06:11.460Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '8615',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Leona Berge',
    email: 'vanessa_zieme88@gmail.com',
    role: ROLES.Administrator,
    createdAt: '2021-12-19T16:15:30.584Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '0735',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Vicky Gorczany',
    email: 'javier.ernser-schiller@hotmail.com',
    role: ROLES.Administrator,
    createdAt: '2027-06-28T00:48:02.026Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '8778',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Elsie Veum',
    email: 'sienna9@yahoo.com',
    role: ROLES.Customer,
    createdAt: '2025-05-23T17:55:21.517Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '1520',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Sandy Kunde',
    email: 'ernie64@gmail.com',
    role: ROLES.Administrator,
    createdAt: '2024-06-03T17:42:21.420Z',
    permissions: [PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '7680',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Mrs. Melanie Harber',
    email: 'sadye.franey@hotmail.com',
    role: ROLES.Support,
    createdAt: '2025-05-26T00:17:49.373Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '4530',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Israel Schiller',
    email: 'johathan_runolfsson89@yahoo.com',
    role: ROLES.Administrator,
    createdAt: '2023-02-20T07:57:38.516Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '0649',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Ramon Schneider',
    email: 'maiya85@yahoo.com',
    role: ROLES.Developer,
    createdAt: '2025-10-14T17:57:37.805Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '3675',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Pearl Harvey',
    email: 'torey_schuster@yahoo.com',
    role: ROLES.Developer,
    createdAt: '2020-07-15T06:11:42.441Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '3104',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Orville Heathcote',
    email: 'titus.howe@yahoo.com',
    role: ROLES.Manager,
    createdAt: '2022-03-16T11:13:29.948Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '5806',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Sonia Schinner',
    email: 'oceane_jakubowski@hotmail.com',
    role: ROLES.Support,
    createdAt: '2022-10-13T21:21:37.126Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '6235',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Franklin Tillman',
    email: 'teagan_hartmann74@hotmail.com',
    role: ROLES.RestrictedUser,
    createdAt: '2023-05-31T22:16:58.817Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '8853',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Rick Dietrich',
    email: 'colton_rutherford55@gmail.com',
    role: ROLES.Sales,
    createdAt: '2027-09-28T03:57:45.429Z',
    permissions: [PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '0278',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Mathew Lang III',
    email: 'leonora_casper47@hotmail.com',
    role: ROLES.Support,
    createdAt: '2027-11-03T11:44:12.993Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '7029',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Bob Douglas',
    email: 'breanna_toy@hotmail.com',
    role: ROLES.Support,
    createdAt: '2021-11-16T03:18:23.412Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '0017',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Alexandra Nicolas',
    email: 'katrina99@yahoo.com',
    role: ROLES.Developer,
    createdAt: '2021-07-01T18:16:21.182Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '4295',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Jan Schiller',
    email: 'dina_kuhn@yahoo.com',
    role: ROLES.Developer,
    createdAt: '2026-07-22T12:46:06.635Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '4133',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Dr. Leigh Wolf',
    email: 'juana_schneider@hotmail.com',
    role: ROLES.Manager,
    createdAt: '2022-08-24T23:45:50.043Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '8054',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Bennie Block',
    email: 'willa49@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2022-03-18T06:58:10.210Z',
    permissions: [PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '3288',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Christopher Veum',
    email: 'rosetta_shanahan76@yahoo.com',
    role: ROLES.Sales,
    createdAt: '2029-03-21T17:10:49.103Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '6680',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Claudia Kutch I',
    email: 'izabella.gleason@gmail.com',
    role: ROLES.Support,
    createdAt: '2028-07-06T10:06:34.751Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '4369',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Hubert Glover',
    email: 'gregoria.buckridge64@hotmail.com',
    role: ROLES.HRD,
    createdAt: '2024-05-01T06:16:09.395Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Deactivated,
  },
  {
    id: '2882',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Dr. Allison Collier',
    email: 'mabel.runolfsdottir@hotmail.com',
    role: ROLES.Customer,
    createdAt: '2027-08-28T07:20:45.358Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '0456',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Patty Schimmel',
    email: 'buster.cormier@yahoo.com',
    role: ROLES.Customer,
    createdAt: '2026-12-24T05:46:03.976Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '7503',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Marcella Roberts',
    email: 'elva73@hotmail.com',
    role: ROLES.Administrator,
    createdAt: '2027-11-06T03:42:33.957Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '8237',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Claire Schumm',
    email: 'coty31@hotmail.com',
    role: ROLES.HRD,
    createdAt: '2028-09-23T05:08:31.333Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '1885',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Marcella Weber',
    email: 'nelson.kovacek@gmail.com',
    role: ROLES.HRD,
    createdAt: '2026-09-20T18:25:15.111Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '2335',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Pete Little-Schaefer',
    email: 'fred53@gmail.com',
    role: ROLES.Sales,
    createdAt: '2024-05-07T16:54:01.174Z',
    permissions: [PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '1187',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Irma Legros-Hilpert',
    email: 'lesly.kessler87@hotmail.com',
    role: ROLES.Manager,
    createdAt: '2027-02-24T02:38:41.704Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '6848',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'May Vandervort',
    email: 'adrienne.schamberger@yahoo.com',
    role: ROLES.Support,
    createdAt: '2025-10-01T00:02:16.087Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '0542',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Belinda Goldner',
    email: 'eden33@hotmail.com',
    role: ROLES.Customer,
    createdAt: '2022-04-23T02:37:48.422Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '5708',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Doreen Spencer',
    email: 'jacklyn52@yahoo.com',
    role: ROLES.Manager,
    createdAt: '2028-02-27T18:40:59.696Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '9416',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Bethany Reilly',
    email: 'mozelle.rosenbaum90@yahoo.com',
    role: ROLES.Manager,
    createdAt: '2023-04-28T18:22:15.430Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '0756',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Ellis Hartmann',
    email: 'holden69@yahoo.com',
    role: ROLES.Sales,
    createdAt: '2023-11-20T08:49:47.130Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '6171',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Lance Dickens',
    email: 'dasia40@yahoo.com',
    role: ROLES.HRD,
    createdAt: '2028-09-21T12:22:33.827Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Deactivated,
  },
  {
    id: '9363',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Eva Lang',
    email: 'lorine.cassin4@yahoo.com',
    role: ROLES.HRD,
    createdAt: '2026-08-13T09:35:50.891Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '5455',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Latoya Beatty',
    email: 'lauretta_koelpin80@yahoo.com',
    role: ROLES.Manager,
    createdAt: '2029-12-07T19:40:47.258Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '7949',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Douglas Hand',
    email: 'will73@yahoo.com',
    role: ROLES.Manager,
    createdAt: '2020-11-17T03:34:02.009Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '1568',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Virgil Stracke',
    email: 'gilberto23@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2025-07-18T11:25:14.773Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '8505',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Mr. Amos Botsford',
    email: 'trent11@hotmail.com',
    role: ROLES.HRD,
    createdAt: '2025-12-05T16:20:07.635Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '1619',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Gilbert Mertz Sr.',
    email: 'sonia41@yahoo.com',
    role: ROLES.Developer,
    createdAt: '2021-07-22T08:05:34.156Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '7952',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Clinton Mante',
    email: 'dante60@yahoo.com',
    role: ROLES.Sales,
    createdAt: '2021-06-06T03:49:50.055Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '3376',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'April Von-Davis',
    email: 'ruben_bins@gmail.com',
    role: ROLES.Administrator,
    createdAt: '2022-01-16T03:55:39.543Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '3544',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Hugo Veum',
    email: 'davon42@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2022-04-21T08:16:47.388Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '5807',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Patrick Keebler',
    email: 'fred_nader@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2024-04-05T09:45:13.957Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '9200',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Everett Bins Jr.',
    email: 'marielle_mante53@hotmail.com',
    role: ROLES.Administrator,
    createdAt: '2026-10-12T16:28:20.286Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '7412',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Sherman Ondricka',
    email: 'mylene_grant@yahoo.com',
    role: ROLES.Support,
    createdAt: '2026-12-19T23:46:33.024Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '5879',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Rufus Conn',
    email: 'einar_crist-hickle@yahoo.com',
    role: ROLES.Customer,
    createdAt: '2027-01-17T17:40:56.531Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '2784',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Ms. Kim Tillman',
    email: 'alexzander46@gmail.com',
    role: ROLES.Support,
    createdAt: '2027-02-03T16:12:07.180Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '6320',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Eddie Wisozk',
    email: 'julie5@gmail.com',
    role: ROLES.Developer,
    createdAt: '2022-07-14T12:16:05.062Z',
    permissions: [PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '0973',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Vincent Hand',
    email: 'lura58@hotmail.com',
    role: ROLES.Manager,
    createdAt: '2021-09-10T18:34:07.706Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '5323',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Marvin Langworth',
    email: 'nigel.blanda91@gmail.com',
    role: ROLES.Sales,
    createdAt: '2029-09-03T20:20:33.189Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '5052',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Alex Jenkins III',
    email: 'ezekiel_brown57@hotmail.com',
    role: ROLES.HRD,
    createdAt: '2028-11-21T17:04:03.251Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '6099',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Muriel Boyer',
    email: 'myrl.swaniawski21@gmail.com',
    role: ROLES.Customer,
    createdAt: '2020-12-29T06:57:26.798Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '8420',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Bernadette Bode III',
    email: 'providenci79@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2027-10-25T17:39:17.935Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '9621',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Louis Rippin',
    email: 'brad34@yahoo.com',
    role: ROLES.RestrictedUser,
    createdAt: '2021-11-28T19:02:11.210Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '4794',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Silvia Leuschke',
    email: 'nyasia.spencer46@gmail.com',
    role: ROLES.HRD,
    createdAt: '2028-08-01T03:37:07.270Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '4050',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Rosie Hintz',
    email: 'lilliana.dare@gmail.com',
    role: ROLES.HRD,
    createdAt: '2020-07-14T06:59:33.312Z',
    permissions: [PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '9681',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Ray Marquardt PhD',
    email: 'giles53@hotmail.com',
    role: ROLES.HRD,
    createdAt: '2021-09-01T10:07:01.128Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '0596',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Alfred Braun',
    email: 'benny76@yahoo.com',
    role: ROLES.HRD,
    createdAt: '2028-12-11T17:24:35.447Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '4156',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Jody Kshlerin',
    email: 'bobby.hettinger83@gmail.com',
    role: ROLES.Administrator,
    createdAt: '2026-12-09T10:08:13.333Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Deactivated,
  },
  {
    id: '9124',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'George Ratke',
    email: 'lydia.kovacek47@yahoo.com',
    role: ROLES.Developer,
    createdAt: '2025-03-17T04:24:14.035Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '8363',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Albert Purdy Sr.',
    email: 'melany_collier@yahoo.com',
    role: ROLES.Support,
    createdAt: '2027-12-06T04:43:24.050Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '4473',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Marsha Cummings',
    email: 'fay.damore@gmail.com',
    role: ROLES.RestrictedUser,
    createdAt: '2028-11-21T21:25:35.193Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '0716',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Miss Kellie Grady',
    email: 'yolanda_ryan91@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2020-10-17T22:04:29.935Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '5425',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Holly Pfannerstill',
    email: 'eudora29@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2029-10-09T11:58:23.756Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read, PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '7397',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Mabel Blick',
    email: 'lelia.barton-heathcote26@hotmail.com',
    role: ROLES.RestrictedUser,
    createdAt: '2026-09-16T11:48:28.280Z',
    permissions: [PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '2861',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Willie Cremin',
    email: 'shirley63@hotmail.com',
    role: ROLES.Developer,
    createdAt: '2029-11-24T12:29:43.638Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '9210',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Miss Tabitha Feil',
    email: 'vesta_quigley-schimmel@hotmail.com',
    role: ROLES.Support,
    createdAt: '2028-09-24T03:39:38.907Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '6085',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Megan Corkery',
    email: 'lane4@gmail.com',
    role: ROLES.HRD,
    createdAt: '2026-12-06T09:10:07.608Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '9633',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Dwight Baumbach',
    email: 'gail29@gmail.com',
    role: ROLES.Manager,
    createdAt: '2023-08-02T03:39:04.516Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '7815',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Blanca Raynor Sr.',
    email: 'hubert.auer@gmail.com',
    role: ROLES.Developer,
    createdAt: '2025-03-02T09:09:01.704Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read, PERMISSIONS.Delete],
    status: STATUSES.Pending,
  },
  {
    id: '1461',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Loren Kunde',
    email: 'lillie37@hotmail.com',
    role: ROLES.Customer,
    createdAt: '2025-10-04T02:15:33.032Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '1437',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Ms. Patty Gerlach',
    email: 'emilio_harber41@yahoo.com',
    role: ROLES.HRD,
    createdAt: '2028-11-15T20:23:14.034Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Deactivated,
  },
  {
    id: '0569',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Jenna Lang',
    email: 'lacey82@yahoo.com',
    role: ROLES.Customer,
    createdAt: '2027-06-02T12:37:04.088Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '8289',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Leroy Buckridge',
    email: 'bo.frami34@yahoo.com',
    role: ROLES.RestrictedUser,
    createdAt: '2029-12-23T15:20:34.596Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Active,
  },
  {
    id: '3468',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Dr. Ada Koss',
    email: 'jefferey_kling@hotmail.com',
    role: ROLES.Sales,
    createdAt: '2025-02-13T04:31:52.242Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '6174',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Mr. Francis Breitenberg',
    email: 'jayme.halvorson@hotmail.com',
    role: ROLES.Customer,
    createdAt: '2028-04-14T00:38:17.756Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '1831',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Omar Schimmel',
    email: 'bertram.thiel65@gmail.com',
    role: ROLES.Manager,
    createdAt: '2026-04-23T04:30:25.517Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Active,
  },
  {
    id: '8643',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Delbert Brekke',
    email: 'joel_pacocha@hotmail.com',
    role: ROLES.HRD,
    createdAt: '2025-04-06T01:20:52.532Z',
    permissions: [PERMISSIONS.Read],
    status: STATUSES.Deactivated,
  },
  {
    id: '3483',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Dr. Patrick Emard',
    email: 'noel_ratke53@gmail.com',
    role: ROLES.RestrictedUser,
    createdAt: '2027-09-06T14:52:24.498Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '2303',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Mitchell Hermiston',
    email: 'daryl.bechtelar67@gmail.com',
    role: ROLES.HRD,
    createdAt: '2025-03-14T18:40:01.520Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Deactivated,
  },
  {
    id: '8674',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Dr. Robyn Casper',
    email: 'armando13@yahoo.com',
    role: ROLES.Customer,
    createdAt: '2029-10-25T16:36:09.741Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete],
    status: STATUSES.Deactivated,
  },
  {
    id: '1973',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Eula Gleichner',
    email: 'patricia_reichert@yahoo.com',
    role: ROLES.Developer,
    createdAt: '2029-09-22T04:16:40.054Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '5985',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Erin Schumm Jr.',
    email: 'priscilla.deckow9@gmail.com',
    role: ROLES.HRD,
    createdAt: '2027-01-19T05:59:20.176Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Delete, PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
  {
    id: '9780',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Celia Miller',
    email: 'adrienne_leffler39@hotmail.com',
    role: ROLES.Customer,
    createdAt: '2026-07-19T23:26:25.392Z',
    permissions: [PERMISSIONS.Write],
    status: STATUSES.Active,
  },
  {
    id: '3294',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Katrina Price',
    email: 'oleta70@gmail.com',
    role: ROLES.Manager,
    createdAt: '2026-03-14T15:30:51.378Z',
    permissions: [PERMISSIONS.Delete, PERMISSIONS.Write],
    status: STATUSES.Pending,
  },
  {
    id: '0649',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    fullName: 'Leonard Franecki Sr.',
    email: 'danyka.ryan99@yahoo.com',
    role: ROLES.Manager,
    createdAt: '2020-05-14T13:22:06.872Z',
    permissions: [PERMISSIONS.Write, PERMISSIONS.Read],
    status: STATUSES.Pending,
  },
];
