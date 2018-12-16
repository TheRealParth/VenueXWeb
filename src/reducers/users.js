import { userTypes } from '../types';
import { sortBy, reverse } from 'lodash';
import { createSelector } from 'reselect';

const initialState = {
  list: [],
  sortKey: {
    fullName: null,
    email: null,
    created: null
  }
};

const usersSelector = users => users.list;
const sortKeySelector = users => users.sortKey;

export const sortUsersSelector = createSelector(
  [usersSelector, sortKeySelector],
  (list, sortKey) => {
    console.log(list);
    console.log(sortKey);
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
        sortKey: {
          ...state.sortKey,
          [action.sortKey]: { order: action.value }
        }
      };
    default:
      return state;
  }
};
