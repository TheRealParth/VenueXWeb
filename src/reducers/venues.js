import { venueTypes, configTypes } from '../types';

const initialState = {
  list: [],
  config: {}
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

export const config = (state = {}, action) => {
  switch (action.type) {
    case configTypes.CONFIG.SYNC:
      return {
        ...state,
        config: action.config
      };
    default:
      return state;
  }
};
