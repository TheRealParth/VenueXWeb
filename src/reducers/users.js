import { userTypes } from '../types';
import { orderBy } from 'lodash';
import { createSelector } from 'reselect';
import { some } from 'lodash';
const {
  USERS,
  SET_SORT_KEY,
  SELECT_ALL_USERS,
  UNSELECT_ALL_USERS,
  UNSELECT_SINGLE_USER,
  SELECT_SINGLE_USER
} = userTypes;

const initialState = {
  list: [],
  anyChecked: false,
  allChecked: false,
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
    case USERS.SYNC:
      return {
        ...state,
        list: action.users.map(user => ({ ...user, checked: false }))
      };
    case SET_SORT_KEY:
      return {
        ...state,
        sortKey: action.sortKey,
        orderBy: action.value
      };
    case SELECT_ALL_USERS:
      return {
        ...state,
        allChecked: true,
        anyChecked: true,
        list: state.list.map(user => ({ ...user, checked: true }))
      };
    case UNSELECT_ALL_USERS:
      return {
        ...state,
        allChecked: false,
        anyChecked: false,
        list: state.list.map(user => ({
          ...user,
          checked: false
        }))
      };
    case UNSELECT_SINGLE_USER: {
      const list = state.list.map(user => {
        if (user.id === action.userId) {
          return { ...user, checked: false };
        }
        return user;
      });
      return {
        ...state,
        anyChecked: some(list, 'checked'),
        allChecked: !some(list, ['checked', false]),
        list
      };
    }
    case SELECT_SINGLE_USER: {
      const list = state.list.map(user => {
        if (user.id === action.userId) {
          return { ...user, checked: true };
        }
        return user;
      });
      return {
        ...state,
        anyChecked: some(list, 'checked'),
        allChecked: !some(list, ['checked', false]),
        list
      };
    }
    default:
      return state;
  }
};
