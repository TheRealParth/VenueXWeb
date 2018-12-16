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
const orderBySelector = users => users.orderBy;

export const sortUsersSelector = createSelector(
<<<<<<< HEAD
  [usersSelector, sortKeySelector, orderBySelector],
  orderBy
=======
  [usersSelector, sortKeySelector],
  (list, sortKey) => {
    console.log(list);
    console.log(sortKey);
    const orderByColumns = Object.keys(sortKey).filter(key => sortKey[key] !== null);
    orderBy(list, orderByColumns);
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
>>>>>>> c9ae4da4f38cd4d41367cbe7f9b93449f00a301a
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
