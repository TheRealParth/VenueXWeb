import { venueTypes } from '../types';

const initialState = {
  list: []
};

export const venues = (state = initialState, action) => {
  switch (action.type) {
    case venueTypes.VENUES.SYNC:
      return {
        ...state,
        list: action.venues
      };
    default:
      return state;
  }
};
