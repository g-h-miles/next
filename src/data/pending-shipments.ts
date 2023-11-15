import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const pendingShipments = [
  {
    id: '80021',
    trackingNumber: '2836142156719869',
    recipient: {
      name: 'Guillermo McLaughlin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '384 Coby Light',
    date: '2018-11-19T08:26:34.288Z',
    cost: '740.00',
    payment: 'COD',
    status: 'Approved',
    invoiceStatus: 'Pending',
  },
  {
    id: '22219',
    trackingNumber: '9101855999470240',
    recipient: {
      name: 'Orville Kub',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '97562 Jacobs Pines',
    date: '2018-11-01T01:26:09.596Z',
    cost: '567.00',
    payment: 'Paypal',
    status: 'Out For Delivery',
    invoiceStatus: 'OverDue',
  },
  {
    id: '17734',
    trackingNumber: '5730109791363725',
    recipient: {
      name: 'Melanie Lehner',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '3049 Fanny Street',
    date: '2019-04-03T01:54:40.540Z',
    cost: '260.00',
    payment: 'Paypal',
    status: 'Approved',
    invoiceStatus: 'Paid',
  },
  {
    id: '31951',
    trackingNumber: '9020589695119416',
    recipient: {
      name: 'Diane Feest',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '68446 McDermott Run',
    date: '2019-06-24T12:38:51.290Z',
    cost: '759.00',
    payment: 'COD',
    status: 'Approved',
    invoiceStatus: 'Paid',
  },
  {
    id: '49669',
    trackingNumber: '4354944726670868',
    recipient: {
      name: 'Nellie Shields',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '8291 McLaughlin Groves',
    date: '2018-02-11T14:46:26.195Z',
    cost: '646.00',
    payment: 'Credit Card',
    status: 'Delivery Failed',
    invoiceStatus: 'Pending',
  },
  {
    id: '71871',
    trackingNumber: '9570666661812187',
    recipient: {
      name: 'Natasha Littel',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '4046 Jailyn Rest',
    date: '2018-08-19T04:43:53.577Z',
    cost: '113.00',
    payment: 'COD',
    status: 'Out For Delivery',
    invoiceStatus: 'Paid',
  },
  {
    id: '56727',
    trackingNumber: '7245042528066667',
    recipient: {
      name: 'Janis Daniel',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '6109 Seth Pines',
    date: '2018-01-26T11:25:12.493Z',
    cost: '166.00',
    payment: 'COD',
    status: 'Delivered',
    invoiceStatus: 'Pending',
  },
  {
    id: '35560',
    trackingNumber: '1344996327496556',
    recipient: {
      name: 'Garry Kris',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '404 Gutkowski Crescent',
    date: '2020-11-14T06:40:32.757Z',
    cost: '535.00',
    payment: 'COD',
    status: 'In Transit',
    invoiceStatus: 'Pending',
  },
  {
    id: '24767',
    trackingNumber: '2932871000336745',
    recipient: {
      name: 'Frankie Altenwerth',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '9074 Breitenberg View',
    date: '2022-09-20T23:38:03.223Z',
    cost: '175.00',
    payment: 'Paypal',
    status: 'In Transit',
    invoiceStatus: 'OverDue',
  },
  {
    id: '04515',
    trackingNumber: '2866736796234601',
    recipient: {
      name: 'Alyssa Howell',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '33286 Guadalupe Haven',
    date: '2020-09-14T20:33:49.901Z',
    cost: '364.00',
    payment: 'Paypal',
    status: 'Out For Delivery',
    invoiceStatus: 'Paid',
  },
  {
    id: '04052',
    trackingNumber: '6793116155096416',
    recipient: {
      name: 'Miss Emily Swaniawski-Kohler',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '434 Tremblay Pike',
    date: '2021-07-09T07:05:42.214Z',
    cost: '221.00',
    payment: 'COD',
    status: 'Delivered',
    invoiceStatus: 'Paid',
  },
  {
    id: '60869',
    trackingNumber: '7628333446545045',
    recipient: {
      name: 'Bryan Larkin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '13105 Reuben Extensions',
    date: '2021-11-01T22:29:30.584Z',
    cost: '991.00',
    payment: 'COD',
    status: 'Out For Delivery',
    invoiceStatus: 'Paid',
  },
  {
    id: '63484',
    trackingNumber: '6775091255474608',
    recipient: {
      name: 'Ms. Jodi Ferry',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '2695 Ruecker Loop',
    date: '2019-09-21T07:28:55.561Z',
    cost: '624.00',
    payment: 'COD',
    status: 'Delivery Failed',
    invoiceStatus: 'Paid',
  },
  {
    id: '07234',
    trackingNumber: '7000633712849244',
    recipient: {
      name: 'Bruce Kunde',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '99083 Sammy View',
    date: '2018-05-09T12:41:02.608Z',
    cost: '575.00',
    payment: 'Credit Card',
    status: 'In Transit',
    invoiceStatus: 'OverDue',
  },
  {
    id: '08496',
    trackingNumber: '9027492797713803',
    recipient: {
      name: 'Van Rath',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '812 Marjory Ridge',
    date: '2022-05-27T01:37:00.252Z',
    cost: '651.00',
    payment: 'COD',
    status: 'In Transit',
    invoiceStatus: 'Paid',
  },
  {
    id: '28306',
    trackingNumber: '1729936797792926',
    recipient: {
      name: 'Terrance Terry',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '257 Elijah Wall',
    date: '2023-07-06T03:44:02.688Z',
    cost: '981.00',
    payment: 'Credit Card',
    status: 'Approved',
    invoiceStatus: 'Pending',
  },
  {
    id: '98545',
    trackingNumber: '1136263014660257',
    recipient: {
      name: 'Nathan Luettgen V',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '46839 Mayert Forest',
    date: '2018-07-23T05:37:09.113Z',
    cost: '313.00',
    payment: 'COD',
    status: 'Approved',
    invoiceStatus: 'Pending',
  },
  {
    id: '01844',
    trackingNumber: '6958585054907520',
    recipient: {
      name: 'Kristen Thiel',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '2617 Orn Drives',
    date: '2021-06-08T15:30:53.251Z',
    cost: '475.00',
    payment: 'COD',
    status: 'Approved',
    invoiceStatus: 'Pending',
  },
  {
    id: '98134',
    trackingNumber: '1858874799025770',
    recipient: {
      name: 'Iris Wolf',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '754 Larue Cliff',
    date: '2021-05-02T21:20:47.193Z',
    cost: '623.00',
    payment: 'Paypal',
    status: 'Delivered',
    invoiceStatus: 'Paid',
  },
  {
    id: '89031',
    trackingNumber: '3718889181897589',
    recipient: {
      name: 'Dr. Rosa Olson',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '73783 Flatley Turnpike',
    date: '2020-01-23T05:44:31.642Z',
    cost: '466.00',
    payment: 'Credit Card',
    status: 'In Transit',
    invoiceStatus: 'Pending',
  },
  {
    id: '46337',
    trackingNumber: '5148530734362262',
    recipient: {
      name: 'Billie Hintz-Okuneva',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '9317 Mertz Neck',
    date: '2020-10-08T01:05:22.088Z',
    cost: '438.00',
    payment: 'Paypal',
    status: 'In Transit',
    invoiceStatus: 'Paid',
  },
  {
    id: '27240',
    trackingNumber: '5549474711684906',
    recipient: {
      name: 'Darin King',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '9610 Dariana Pine',
    date: '2019-11-25T20:35:15.484Z',
    cost: '252.00',
    payment: 'COD',
    status: 'Delivery Failed',
    invoiceStatus: 'Paid',
  },
  {
    id: '10126',
    trackingNumber: '6456021141019555',
    recipient: {
      name: 'Elias Watsica',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '2677 Waino Coves',
    date: '2023-03-29T07:41:44.780Z',
    cost: '463.00',
    payment: 'Paypal',
    status: 'Delivered',
    invoiceStatus: 'OverDue',
  },
  {
    id: '87546',
    trackingNumber: '3227450359352529',
    recipient: {
      name: 'Billie Bartell',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '889 Victoria Lock',
    date: '2022-09-11T21:22:59.917Z',
    cost: '647.00',
    payment: 'Credit Card',
    status: 'Delivery Failed',
    invoiceStatus: 'Pending',
  },
  {
    id: '50534',
    trackingNumber: '8953668019764301',
    recipient: {
      name: 'Erma Will',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '101 Gerard Shoal',
    date: '2022-10-03T01:41:28.492Z',
    cost: '306.00',
    payment: 'Paypal',
    status: 'Delivered',
    invoiceStatus: 'Pending',
  },
  {
    id: '76676',
    trackingNumber: '3167153519406302',
    recipient: {
      name: 'Mandy Corwin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '2897 Zora Circles',
    date: '2023-02-16T12:48:52.407Z',
    cost: '460.00',
    payment: 'Paypal',
    status: 'Delivered',
    invoiceStatus: 'Paid',
  },
  {
    id: '49955',
    trackingNumber: '8997608936179471',
    recipient: {
      name: 'Shannon Hoeger',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '1671 Marielle Lights',
    date: '2020-10-19T21:48:41.935Z',
    cost: '349.00',
    payment: 'Credit Card',
    status: 'Delivery Failed',
    invoiceStatus: 'Paid',
  },
  {
    id: '10607',
    trackingNumber: '5636351394327636',
    recipient: {
      name: 'Audrey Farrell',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '7243 Scotty Course',
    date: '2022-05-08T06:41:58.270Z',
    cost: '632.00',
    payment: 'Credit Card',
    status: 'Out For Delivery',
    invoiceStatus: 'OverDue',
  },
  {
    id: '04752',
    trackingNumber: '7912007977013719',
    recipient: {
      name: 'Mr. Jonathan Schuppe',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '2682 Tiara Forks',
    date: '2020-05-24T23:10:04.469Z',
    cost: '477.00',
    payment: 'COD',
    status: 'Approved',
    invoiceStatus: 'OverDue',
  },
  {
    id: '94048',
    trackingNumber: '4305901430442398',
    recipient: {
      name: 'Dr. Teri Fahey',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '121 Curt Alley',
    date: '2020-08-21T11:50:49.527Z',
    cost: '509.00',
    payment: 'COD',
    status: 'Delivery Failed',
    invoiceStatus: 'OverDue',
  },
  {
    id: '42305',
    trackingNumber: '6016245679617827',
    recipient: {
      name: 'Ms. Jean Schneider',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    destination: '65028 Cruickshank Fords',
    date: '2018-01-31T09:50:35.591Z',
    cost: '712.00',
    payment: 'Paypal',
    status: 'Out For Delivery',
    invoiceStatus: 'Paid',
  },
];
