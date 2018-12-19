import { userTypes } from '../types';

export const syncUsers = users => ({
  type: userTypes.USERS.SYNC,
  users
});

export const syncUser = user => ({
  type: userTypes.USER.SYNC,
  user
});

export const loginWithTokenRequest = payload => ({
  type: userTypes.LOGIN_WITH_TOKEN,
  payload
});

export const getUsersRequest = () => {
  return {
    type: userTypes.GET_USERS_REQUEST
  };
};

export const setUsersSortKey = (sortKey, value) => {
  return {
    type: userTypes.SET_SORT_KEY,
    sortKey,
    value
  };
};
