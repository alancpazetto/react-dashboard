import { createStore } from 'redux';

const INITIAL_STATE = {
  insideCustomers: [
    { avatar: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Russell Rusty' },
    { avatar: 'https://randomuser.me/api/portraits/women/65.jpg', name: 'Tess Warner' },
    { avatar: 'https://randomuser.me/api/portraits/men/30.jpg', name: 'Adalyn Archer' },
    { avatar: 'https://randomuser.me/api/portraits/women/15.jpg', name: 'Laney Bryant' },
    { avatar: 'https://randomuser.me/api/portraits/women/80.jpg', name: 'Ean Mahoney' },
    { avatar: 'https://randomuser.me/api/portraits/men/34.jpg', name: 'Branden Melton' },
    { avatar: 'https://randomuser.me/api/portraits/women/63.jpg', name: 'Dashawn Grimes' },
    { avatar: 'https://randomuser.me/api/portraits/men/33.jpg', name: 'Ivy Booker' },
    { avatar: 'https://randomuser.me/api/portraits/men/13.jpg', name: 'Stacy Larson' },
    { avatar: 'https://randomuser.me/api/portraits/women/84.jpg', name: 'Bryson Stark' },
  ],
  customerQueue: [],
  cards: [
    { name: 'NuBank', limitUsage: '3.983,22' },
    { name: 'Itaú', limitUsage: '1.211,22' },
  ]
};

function reducers(state = INITIAL_STATE, action) {
  return state;
}

export const store = createStore(reducers, INITIAL_STATE);