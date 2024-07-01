import { SERVICE_URL } from 'config';
import api from '../api';

const notificationData = [
  {
    id: 2,
    img: '/img/profile/profile-1.webp',
    title: 'profile-2',
    detail: 'New Leave request submitted',
    link: '#/',
  },
  {
    id: 2,
    img: '/img/profile/profile-2.webp',
    title: 'profile-2',
    detail: 'New Leave request received',
    link: '#/',
  },
  {
    id: 6,
    img: '/img/profile/profile-6.webp',
    title: 'profile-6',
    detail: 'Employee just sent a new Leave Request',
    link: '#/',
  },
];
api.onGet(`${SERVICE_URL}/notifications`).reply(200, notificationData);
