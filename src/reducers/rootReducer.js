import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { alert } from './alert';
import { auth } from './auth';
import { events } from './events';
import { users } from './users';
import { venues } from './venues';
import { reducer as formReducer } from 'redux-form';

export default history =>
  combineReducers({
    form: formReducer,
    router: connectRouter(history),
    alert,
    auth,
    events,
    users,
    venues
  });
