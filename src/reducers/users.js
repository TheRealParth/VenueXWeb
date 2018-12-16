import { userTypes } from '../types';
import { sortBy, reverse } from 'lodash';
import { createSelector } from 'reselect';

const initialState = {
  list: [],
  sortKey: { created: 1 }
};

const usersSelector = users => users.list;
const sortKeySelector = users => users.sortKey;

export const sortUsersSelector = createSelector(
  [usersSelector, sortKeySelector],
  (list, sortKey) => {
    return sortBy(list, sortKey);
  }
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
        sortKey: action.sortKey
      };
    default:
      return state;
  }
};
