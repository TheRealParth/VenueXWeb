import { eventTypes } from '../types';

const initialState = {
  list: []
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case eventTypes.EVENTS.SYNC:
      return {
        ...state,
        list: action.events
      };
    default:
      return state;
  }
};
