import * as types from '../types';
export const authActions = {
  loginUserRequest
};
export function loginUserRequest(user) {
  return {
    type: types.authTypes.LOGIN_REQUEST,
    user
  };
}
