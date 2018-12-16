import { userTypes } from '../types';

export const syncUsers = users => ({
  type: userTypes.USERS.SYNC,
  users
});

export const getUsersRequest = () => {
  return {
    type: userTypes.GET_USERS_REQUEST
  };
};
