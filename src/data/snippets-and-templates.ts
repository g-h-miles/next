import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export type SnippetType = {
  id: string;
  name: string;
  avatar: string;
  folder: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};

export const folders = [
  {
    name: 'Withdrawal',
    value: 'withdrawal',
  },
  {
    name: 'Invoice',
    value: 'invoice',
  },
  {
    name: 'Deposit',
    value: 'deposit',
  },
  {
    name: 'Payment',
    value: 'payment',
  },
];

export type SnippetOrTemplate = {
  id: string;
  name: string;
  avatar: string;
  folder: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};

export const snippetsAndTemplates = [
  {
    id: '5b679ea8-8261-4e0e-a562-e18381bd3175',
    name: 'Licensed Bronze Pants',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-bluravatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    folder: 'Payment',
    createdBy: 'Gilberto Balistreri II',
    createdAt: new Date('2022-09-21T16:33:07.319Z'),
    updatedAt: new Date('2022-03-17T06:13:45.761Z'),
  },
  {
    id: 'f7a77a4b-76e3-44bd-bd18-660d80751067',
    name: 'Handcrafted Steel Computer',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-bluravatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    folder: 'Payment',
    createdBy: 'Louis McClure',
    createdAt: new Date('2021-12-26T22:24:45.898Z'),
    updatedAt: new Date('2021-09-04T01:01:04.463Z'),
  },
  {
    id: '67426e62-3b78-4c1d-80ff-463fbc78e546',
    name: 'Oriental Plastic Shoes',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-bluravatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    folder: 'Withdrawal',
    createdBy: 'Antonio Ward',
    createdAt: new Date('2020-01-15T12:20:44.010Z'),
    updatedAt: new Date('2022-12-03T03:21:03.983Z'),
  },
  {
    id: 'ba88a5d6-ca86-47a9-b5e1-570ec0af4309',
    name: 'Handcrafted Granite Gloves',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-bluravatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    folder: 'Payment',
    createdBy: 'Lillian Vandervort',
    createdAt: new Date('2021-02-12T08:55:24.055Z'),
    updatedAt: new Date('2020-07-04T13:59:16.586Z'),
  },
  {
    id: '67426e62-3b7a-4c1d-80ff-463fbc78e546',
    name: 'Oriental Plastic Shoes',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-bluravatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    folder: 'Withdrawal',
    createdBy: 'Antonio Ward',
    createdAt: new Date('2020-01-15T12:20:44.010Z'),
    updatedAt: new Date('2022-12-03T03:21:03.983Z'),
  },
  {
    id: 'ba88a5d6-cae6-47a9-b5e1-570ec0af4309',
    name: 'Handcrafted Granite Gloves',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-bluravatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    folder: 'Payment',
    createdBy: 'Lillian Vandervort',
    createdAt: new Date('2021-02-12T08:55:24.055Z'),
    updatedAt: new Date('2020-07-04T13:59:16.586Z'),
  },
  {
    id: '67426e68-3b78-4c1d-80ff-463fbc78e546',
    name: 'Oriental Plastic Shoes',
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-bluravatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
    folder: 'Withdrawal',
    createdBy: 'Antonio Ward',
    createdAt: new Date('2020-01-15T12:20:44.010Z'),
    updatedAt: new Date('2022-12-03T03:21:03.983Z'),
  },
];
