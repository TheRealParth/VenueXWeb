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
  SELECT_SINGLE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST
} = userTypes;

const initialState = {
  list: [],
  anyChecked: false,
  allChecked: false,
  selectedCount: 0,
  sortKey: {
    fullName: null,
    email: null,
    created: null
  },
  creatingUser: false,
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
        list: action.users.map(user => ({ ...user, checked: false })),
        anyChecked: false,
        allChecked: false,
        selectedCount: 0
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
        selectedCount: state.list.length,
        list: state.list.map(user => ({ ...user, checked: true }))
      };
    case UNSELECT_ALL_USERS:
      return {
        ...state,
        allChecked: false,
        anyChecked: false,
        selectedCount: 0,
        list: state.list.map(user => ({ ...user, checked: false }))
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
        selectedCount: state.selectedCount - 1,
        list
      };
    }
    case CREATE_USER_REQUEST:
      return {
        ...state,
        creatingUser: true
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        creatingUser: false
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        creatingUser: false
      };
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
        selectedCount: state.selectedCount + 1,
        list
      };
    }
    default:
      return state;
  }
};
