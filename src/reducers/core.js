import { createAction, handleAction } from 'redux-actions';
import { getVal } from 'react-redux-firebase';


export const setVenueId = createAction('SET_VENUE_ID');
export const getVenueId = state => state.venueId;

export const login = createAction('LOGIN');
export const getUser = state => state.user;

const venueId = handleAction(
  setVenueId,
  (state, action) => action.payload,
  null
);

const user = handleAction(
  login,
  (state, action) => action.payload,
  null,
);


export const firebaseGet = (state, ...args) => getVal(state.firebase, ...args);


export default {
  venueId,
  user,
};
