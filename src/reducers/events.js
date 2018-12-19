import { eventTypes } from '../types';
import { createSelector } from 'reselect';
import { sortBy } from 'lodash';

const initialState = {
  list: [],
  sortKey: '',
  addEmployee: { isOpen: false }
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case eventTypes.EVENTS.SYNC:
      return {
        ...state,
        list: action.events
      };
    case eventTypes.SET_SORT_KEY:
      return {
        ...state,
        sortKey: action.sortKey
      };
    case eventTypes.SET_ADD_EMPLOYEE_OPEN:
      return {
        ...state,
        addEmployee: {
          isOpen: false
          //theoppopsite
        }
      };
    case eventTypes.default:
      return state;
    default:
      return state;
  }
};
