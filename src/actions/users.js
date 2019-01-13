import { userTypes } from '../types';
const {
  USERS,
  USER,
  LOGIN_WITH_TOKEN,
  GET_USERS_REQUEST,
  SET_SORT_KEY,
  SELECT_ALL_USERS,
  UNSELECT_ALL_USERS,
  SELECT_SINGLE_USER,
  UNSELECT_SINGLE_USER
} = userTypes;

export const syncUsers = users => ({
  type: USERS.SYNC,
  users
});

export const syncUser = user => ({
  type: USER.SYNC,
  user
});

export const updateUsersPermissions = payload => ({
  type: USERS.PERMISSIONS_UPDATE,
  payload
});

export const loginWithTokenRequest = payload => ({
  type: LOGIN_WITH_TOKEN,
  payload
});

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST
  };
};

export const setUsersSortKey = (sortKey, value) => {
  return {
    type: SET_SORT_KEY,
    sortKey,
    value
  };
};

export const selectAllUsers = () => {
  return {
    type: SELECT_ALL_USERS
  };
};

export const unSelectAllUsers = () => {
  return {
    type: UNSELECT_ALL_USERS
  };
};

export const selectSingleUser = userId => {
  return {
    type: SELECT_SINGLE_USER,
    userId
  };
};

export const unSelectSingleUser = userId => {
  return {
    type: UNSELECT_SINGLE_USER,
    userId
  };
};
