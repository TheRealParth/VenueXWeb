import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../store/history';
// import stuff from './stuffReducer';

export default history =>
  combineReducers({
    router: connectRouter(history)
  });
