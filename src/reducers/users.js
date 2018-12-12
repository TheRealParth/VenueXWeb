import { userTypes } from '../types';

const initialState = {
  list: []
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USERS.SYNC:
      return {
        ...state,
        list: action.users
      };
    default:
      return state;
  }
};
