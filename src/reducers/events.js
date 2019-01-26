import { eventTypes } from '../types';
import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

const initialState = {
  list: [],
  sortKey: {
    date: null,
    client: null
  },
  addEmployee: { isOpen: false },
  orderBy: null
};

//Added
const eventsSelector = events => events.list;
const sortKeySelector = events => events.sortKey;
const orderBySelector = events => events.orderBy;

export const sortEventsSelector = createSelector(
  [eventsSelector, sortKeySelector, orderBySelector],
  orderBy
);

export const events = (state = initialState, action) => {
  switch (action.type) {
    case eventTypes.EVENTS.SYNC:
      return {
        ...state,
        list: action.events
      };
    case eventTypes.SET_EVENT_SORT_KEY:
      return {
        ...state,
        sortKey: action.sortKey,
        orderBy: action.orderBy
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
