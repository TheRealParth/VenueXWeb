import { userTypes } from '../types';

export const syncUsers = users => ({
  type: userTypes.USERS.SYNC,
  users
});
