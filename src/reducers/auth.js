import { authTypes, userTypes } from '../types';

const initialState = {
  loggingIn: false,
  loggedIn: false,
  user: null,
  error: false
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case userTypes.USER.SYNC:
      return {
        ...state,
        user: action.user
      };
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.error
      };
    case authTypes.REGISTER_SUCCESS:
      return {
        ...state,
        signingUp: false,
        user: action.user
      };
    case authTypes.REGISTER_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.error
      };
    case authTypes.LOGOUT:
      return {};
    default:
      return state;
  }
}
