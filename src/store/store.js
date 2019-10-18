import { createStore } from 'redux';

const INITIAL_STATE = {
  cards: [
    { name: 'NuBank', limitUsage: '3.983,22' },
    { name: 'Itaú', limitUsage: '1.211,22' },
  ]
};

function reducers(state = INITIAL_STATE, action) {
  return state;
}

export const store = createStore(reducers, INITIAL_STATE);