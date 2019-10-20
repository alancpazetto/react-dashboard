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
  customerQueue: [
    { 
      user: { avatar: 'https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg', name: 'Hans Landa' },
      minimumSeats: 5,
      createdAt: new Date('2019-10-19 17:10:50'),
    },
    { 
      user: { avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50', name: 'Emmanuelle Mimieux' },
      minimumSeats: 2,
      createdAt: new Date('2019-10-19 17:05:50'),
    },
  ],
  cards: [
    { name: 'NuBank', limitUsage: '3.983,22' },
    { name: 'Itaú', limitUsage: '1.211,22' },
  ]
};

function reducers(state = INITIAL_STATE, action) {
  return state;
}

export const store = createStore(reducers, INITIAL_STATE);