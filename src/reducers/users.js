import { userTypes } from '../types';
import { orderBy } from 'lodash';
import { createSelector } from 'reselect';

const initialState = {
  list: [],
  sortKey: {
    fullName: null,
    email: null,
    created: null
  },
  orderBy: null
};

const usersSelector = users => users.list;
const sortKeySelector = users => users.sortKey;
const orderBySelector = users => users.orderBy;

export const sortUsersSelector = createSelector(
  [usersSelector, sortKeySelector, orderBySelector],
  orderBy
);

export const users = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USERS.SYNC:
      return {
        ...state,
        list: action.users
      };
    case userTypes.SET_SORT_KEY:
      return {
        ...state,
        sortKey: action.sortKey,
        orderBy: action.value
      };
    default:
      return state;
  }
};
