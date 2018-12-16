import * as types from '../types';

export function loginUserRequest(user) {
  return {
    type: types.authTypes.LOGIN_REQUEST,
    user
  };
}

export function otherFunc() {}
