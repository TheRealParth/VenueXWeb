import { authTypes } from '../types';

let user = null;

const initialState = user
  ? { loggingIn: false, error: false, loggedIn: true, user }
  : {
      loggingIn: false,
      loggedIn: false,
      user: null,
      error: false
    };

export function auth(state = initialState, action) {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case authTypes.LOGIN_SUCCESS:
      return {
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
