import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const priorities = {
  Low: 'Low',
  High: 'High',
  Medium: 'Medium',
};
export const statuses = {
  'In Progress': 'In Progress',
  Completed: 'Completed',
  Open: 'Open',
  Closed: 'Closed',
};

export type PriorityType = keyof typeof priorities;
export type StatusType = keyof typeof statuses;

type Person = {
  name: string;
  avatar: string;
};

export type TicketType = {
  id: string;
  issue: string;
  author: Person;
  agent: Person;
  priority: PriorityType;
  status: StatusType;
  createdAt: Date;
  dueDate: Date;
};

export const ticketsData = [
  {
    id: '8aff82fb-f209-484f-a5bb-e08b8b651018',
    issue:
      "You can't hack the card without hacking the cross-platform SAS program!",
    author: {
      name: 'Joann Mertz',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Henry Bauch',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Open',
    createdAt: '2020-08-14T00:06:05.848Z',
    dueDate: '2019-02-05T23:01:13.080Z',
  },
  {
    id: 'b2190bfa-f864-4d60-9b15-db7b9186d095',
    issue:
      "synthesizing the bus won't do anything, we need to override the back-end ASCII matrix!",
    author: {
      name: 'Marcus Ledner-Weimann',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Mr. Tony Brakus',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Open',
    createdAt: '2020-02-29T03:18:49.475Z',
    dueDate: '2023-03-08T10:39:59.982Z',
  },
  {
    id: 'a79afd2f-955c-4511-bcf0-c11a92512868',
    issue:
      'The RSS application is down, hack the neural alarm so we can synthesize the EXE bus!',
    author: {
      name: 'Felicia Lang',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Wanda Wiegand DVM',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Open',
    createdAt: '2021-01-26T03:52:46.262Z',
    dueDate: '2019-02-25T07:21:02.349Z',
  },
  {
    id: '681c4086-ffe1-4356-b174-381c47a20ca4',
    issue:
      'Try to reboot the TCP bandwidth, maybe it will hack the auxiliary card!',
    author: {
      name: 'Ashley Cronin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Sidney Schulist PhD',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Completed',
    createdAt: '2018-08-10T07:31:59.335Z',
    dueDate: '2022-09-24T16:31:16.633Z',
  },
  {
    id: '60d225cb-7422-4911-a2d8-83193dfb6f39',
    issue:
      'The COM bandwidth is down, copy the 1080p alarm so we can back up the DRAM protocol!',
    author: {
      name: 'Dr. Jeffery Hackett',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Gretchen Lemke',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Completed',
    createdAt: '2021-07-09T01:10:58.276Z',
    dueDate: '2020-12-22T04:07:32.624Z',
  },
  {
    id: 'd8a2f18c-38bb-4e79-b9c9-43469524adae',
    issue:
      'If we bypass the firewall, we can get to the SAS interface through the solid state ADP driver!',
    author: {
      name: 'Margarita Ratke',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Dr. Elijah Konopelski',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Closed',
    createdAt: '2022-09-28T04:31:23.552Z',
    dueDate: '2019-12-13T02:42:42.377Z',
  },
  {
    id: '2e2e6d51-9a9e-4c1b-bb3e-addeb49e677b',
    issue:
      "You can't index the alarm without quantifying the auxiliary UDP sensor!",
    author: {
      name: 'Lynne Borer',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Curtis Barrows',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Open',
    createdAt: '2019-09-07T15:15:11.674Z',
    dueDate: '2018-12-06T21:26:57.706Z',
  },
  {
    id: '3a0b6d0a-f1a3-4605-9a2b-4d93e8472240',
    issue:
      "You can't reboot the application without quantifying the digital VGA hard drive!",
    author: {
      name: 'Yvette Zemlak-Douglas',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Dr. Viola Graham',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Completed',
    createdAt: '2018-02-25T17:23:25.337Z',
    dueDate: '2023-02-13T17:51:16.453Z',
  },
  {
    id: '6ba0ea79-0666-4ecf-9ae1-ee2c285becb2',
    issue:
      'Use the optical CLI matrix, then you can input the digital bandwidth!',
    author: {
      name: 'Patricia Kassulke-Gerlach',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Pat Bartell',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Closed',
    createdAt: '2018-07-27T17:17:46.576Z',
    dueDate: '2019-01-09T08:25:36.545Z',
  },
  {
    id: '6c9564cd-ea05-4072-b51f-0655c580870f',
    issue:
      'Try to hack the API array, maybe it will calculate the virtual capacitor!',
    author: {
      name: 'Jessie Blanda',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Leonard Mitchell',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Closed',
    createdAt: '2019-10-03T09:45:44.680Z',
    dueDate: '2019-08-16T06:52:38.358Z',
  },
  {
    id: '854014a6-ea49-47a3-a2f2-b6c3d7d9e628',
    issue: 'We need to index the solid state CLI firewall!',
    author: {
      name: 'Yvette Cormier',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Ervin Ferry',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Open',
    createdAt: '2019-11-07T23:04:48.062Z',
    dueDate: '2021-07-06T09:31:20.221Z',
  },
  {
    id: 'd3756133-4728-4f9a-b60c-6471c77ddfc3',
    issue:
      'Use the online HDD program, then you can reboot the back-end hard drive!',
    author: {
      name: 'Ross McGlynn',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Miss Antoinette Hilll',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Closed',
    createdAt: '2023-03-29T15:07:40.775Z',
    dueDate: '2018-04-20T04:37:17.787Z',
  },
  {
    id: 'e668bbef-da33-452c-a132-21dcf5624fbf',
    issue: 'We need to reboot the haptic HEX array!',
    author: {
      name: 'Pearl Emard',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Israel Nitzsche',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Closed',
    createdAt: '2020-05-24T03:44:18.018Z',
    dueDate: '2022-07-30T12:58:20.766Z',
  },
  {
    id: 'c8bf7e3c-bed2-44f9-8acc-79393fd39a81',
    issue:
      'The UDP capacitor is down, input the back-end interface so we can synthesize the API system!',
    author: {
      name: 'Felipe Rosenbaum',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Dr. Jon Kovacek',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Closed',
    createdAt: '2020-09-29T20:42:38.673Z',
    dueDate: '2020-08-24T09:04:32.083Z',
  },
  {
    id: '41139dc4-ab7b-473b-bde7-c72f3af066c9',
    issue:
      "You can't quantify the matrix without navigating the online SCSI program!",
    author: {
      name: 'Lydia Ryan',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Ellen Collins',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Closed',
    createdAt: '2018-05-22T11:48:21.804Z',
    dueDate: '2019-10-18T06:25:07.542Z',
  },
  {
    id: '8f2bec9b-bbe4-40f8-8b2a-290d59fc270c',
    issue:
      "I'll compress the primary OCR card, that should matrix the SSD circuit!",
    author: {
      name: 'Russell Miller Jr.',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Ismael Zboncak',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Closed',
    createdAt: '2019-05-21T14:11:47.417Z',
    dueDate: '2022-01-19T02:19:43.950Z',
  },
  {
    id: '9727f876-a421-412b-8bb2-3ebe3c8d9918',
    issue: 'We need to generate the optical API bandwidth!',
    author: {
      name: 'Clara Sipes IV',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: "Felicia O'Conner",
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Open',
    createdAt: '2023-05-07T03:33:07.596Z',
    dueDate: '2021-05-11T07:01:43.374Z',
  },
  {
    id: 'e0e582d2-9f2f-424e-b7f0-443d056046cc',
    issue:
      'Try to navigate the RSS feed, maybe it will quantify the back-end firewall!',
    author: {
      name: 'Irma Cronin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Brett Boyer',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'In Progress',
    createdAt: '2019-09-23T21:06:27.659Z',
    dueDate: '2022-05-30T03:44:23.297Z',
  },
  {
    id: '768838ce-661a-4adc-8d7d-23739fccafba',
    issue:
      "I'll index the virtual UDP circuit, that should circuit the DNS transmitter!",
    author: {
      name: 'Allen Heller',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Randolph Marquardt DDS',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Completed',
    createdAt: '2023-05-02T04:03:28.059Z',
    dueDate: '2018-05-10T15:49:41.623Z',
  },
  {
    id: '52fc650e-31ca-4e4f-b1e6-6f0f64d86cc4',
    issue:
      'The CLI program is down, reboot the back-end feed so we can transmit the SSL sensor!',
    author: {
      name: 'Carol Weimann',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Monica Strosin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'In Progress',
    createdAt: '2018-03-20T16:06:32.000Z',
    dueDate: '2020-06-18T06:07:02.428Z',
  },
  {
    id: 'd88cfa0c-d8fd-4317-a600-45d3b7b85e2b',
    issue: 'We need to quantify the 1080p ASCII bus!',
    author: {
      name: 'Santos Cormier',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Erik Donnelly II',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'In Progress',
    createdAt: '2018-07-26T07:03:07.801Z',
    dueDate: '2022-11-16T23:45:22.297Z',
  },
  {
    id: '956c48ff-d3ff-4324-87d7-8a861ca35444',
    issue:
      'Use the solid state PNG matrix, then you can program the bluetooth card!',
    author: {
      name: 'Francisco Kirlin',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Lori Zemlak',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Completed',
    createdAt: '2020-08-22T14:03:05.540Z',
    dueDate: '2019-05-26T04:22:03.584Z',
  },
  {
    id: '2c58c423-71fb-445e-b108-74e8fd215290',
    issue: 'We need to input the auxiliary SCSI monitor!',
    author: {
      name: 'Randolph Cole',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Lorene Zulauf',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'In Progress',
    createdAt: '2022-05-01T05:55:17.468Z',
    dueDate: '2021-07-04T01:53:40.178Z',
  },
  {
    id: '7bb96fe0-7a12-4113-9408-acc56f2a89ee',
    issue:
      "I'll bypass the multi-byte RAM hard drive, that should hard drive the API system!",
    author: {
      name: 'Bernadette Abshire DDS',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Patrick Kohler IV',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Closed',
    createdAt: '2022-04-06T02:38:06.874Z',
    dueDate: '2019-02-05T22:31:43.064Z',
  },
  {
    id: 'f8c782f5-72b8-4d70-aa79-5922fffdc98b',
    issue:
      'The XML firewall is down, input the auxiliary interface so we can input the CLI sensor!',
    author: {
      name: 'Cesar Bartoletti',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Marlon Stoltenberg',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'Open',
    createdAt: '2018-11-09T16:42:53.280Z',
    dueDate: '2018-01-09T21:05:33.076Z',
  },
  {
    id: '90461dcc-bd08-49ed-83b0-8918a46b04ea',
    issue:
      'If we override the firewall, we can get to the RSS sensor through the mobile PNG protocol!',
    author: {
      name: 'Leslie Dicki PhD',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Marcella Fadel',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'In Progress',
    createdAt: '2019-12-31T18:38:05.315Z',
    dueDate: '2022-03-21T13:25:12.551Z',
  },
  {
    id: '7c5ff16c-7903-45ef-af13-e783ebc70ca2',
    issue: 'We need to navigate the bluetooth TCP capacitor!',
    author: {
      name: 'Jane Green',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Terrell Beahan',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Closed',
    createdAt: '2020-03-28T01:41:51.349Z',
    dueDate: '2022-10-26T01:30:27.611Z',
  },
  {
    id: 'ae8d79ca-b8c9-4c42-b887-bd76f1212222',
    issue:
      "connecting the pixel won't do anything, we need to quantify the primary THX matrix!",
    author: {
      name: 'Gladys Mante',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Kenneth Blanda',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Completed',
    createdAt: '2023-04-19T05:18:38.064Z',
    dueDate: '2018-01-05T20:36:36.692Z',
  },
  {
    id: 'b81bbf8c-89ae-4e84-bc3f-0d0dc9d73183',
    issue:
      "You can't generate the card without programming the 1080p JBOD driver!",
    author: {
      name: 'Cecelia Bernhard',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Eduardo Shanahan',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Open',
    createdAt: '2023-04-22T19:59:32.682Z',
    dueDate: '2019-08-07T16:25:30.606Z',
  },
  {
    id: 'b0cde944-fc50-4dcb-8238-9e6944077f26',
    issue: 'We need to connect the open-source JBOD alarm!',
    author: {
      name: 'Becky Greenholt',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Pat Kunze IV',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'Open',
    createdAt: '2018-09-26T15:43:04.879Z',
    dueDate: '2022-12-09T22:35:18.221Z',
  },
  {
    id: '30d76faa-10eb-4157-9c42-33f2b0ce4b70',
    issue:
      "I'll index the auxiliary SCSI pixel, that should microchip the ADP interface!",
    author: {
      name: 'Alberto Spinka',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Alicia Terry-DuBuque',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Completed',
    createdAt: '2020-08-24T02:16:35.714Z',
    dueDate: '2022-08-14T03:07:49.820Z',
  },
  {
    id: '990c4df8-9514-42e3-813a-f345e4f6a6b9',
    issue:
      'If we connect the hard drive, we can get to the SSL alarm through the auxiliary UDP panel!',
    author: {
      name: 'Celia Kuvalis',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Joy Cassin Jr.',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'In Progress',
    createdAt: '2022-08-02T10:06:47.161Z',
    dueDate: '2021-06-05T18:33:33.952Z',
  },
  {
    id: '278a84ee-a9d4-4c55-9bfe-4216674a9b5e',
    issue:
      'Try to copy the SQL feed, maybe it will generate the back-end interface!',
    author: {
      name: 'Earnest Reinger',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Dexter Mertz',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Completed',
    createdAt: '2020-12-20T18:26:24.885Z',
    dueDate: '2023-05-12T02:55:35.106Z',
  },
  {
    id: 'ec1476c5-a53b-4a1a-aa4c-87c3888fccdc',
    issue:
      'If we parse the driver, we can get to the XML bandwidth through the digital HTTP array!',
    author: {
      name: 'Percy Rice',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Albert Lind',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Low',
    status: 'In Progress',
    createdAt: '2021-11-24T00:31:02.217Z',
    dueDate: '2019-05-04T03:29:06.046Z',
  },
  {
    id: '188a1151-e00a-4a9e-b335-8177a5f0c5b7',
    issue: 'We need to quantify the wireless RSS hard drive!',
    author: {
      name: 'Seth Boehm',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Sarah Braun PhD',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'High',
    status: 'Closed',
    createdAt: '2019-04-18T06:05:59.585Z',
    dueDate: '2022-04-17T10:19:05.508Z',
  },
  {
    id: 'a6006f03-bf4d-4333-86a5-61c6306fcb06',
    issue:
      "programming the microchip won't do anything, we need to transmit the cross-platform TCP protocol!",
    author: {
      name: 'Lance Macejkovic',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    agent: {
      name: 'Diana Skiles',
      avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
        avatarIds
      )}.webp`,
    },
    priority: 'Medium',
    status: 'In Progress',
    createdAt: '2019-08-20T20:37:43.578Z',
    dueDate: '2018-01-03T14:14:40.708Z',
  },
];
