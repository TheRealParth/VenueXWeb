import { userTypes } from '../types';
import { orderBy } from 'lodash';
import { moment } from 'moment';
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
    const orderByColumn = Object.keys(sortKey).filter(key => sortKey[key] !== null);

    switch (Object.keys(sortKey)) {
      case 'created':
        orderBy(
          list,
          record => {
            return new moment(record.date);
          },
          sortKey['created']
        );
        break;

      default:
        const orderedList = orderBy(
          list,
          item => {
            return item.fullName;
          },
          sortKey[`${Object.keys(sortKey)[0]}`]
        );
        return orderedList;
    }
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
