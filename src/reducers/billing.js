import { billingTypes } from '../types';
import { createSelector } from 'reselect';
import { sortBy } from 'lodash';

const initialState = {
  events: [],
  filteredEvents: [],
  currentMonth: null,
  sortKey: '',
  addEmployee: { isOpen: false }
};

export const billing = (state = initialState, action) => {
  switch (action.type) {
    case billingTypes.INCREMENT_MONTH:
      return {
        ...state,
        list: action.events
      };
    case billingTypes.DECREMENT_MONTH:
      return {
        ...state,
        sortKey: action.sortKey
      };
    default:
      return state;
  }
};
