import { takeLatest, put, fork, spawn, call, all, takeEvery } from 'redux-saga/effects';
import * as types from '../types';
import { syncEvents } from '../actions';
import rsf from '../firebase';

export function* loginWatcher() {
  yield takeLatest(types.authTypes.LOGIN_REQUEST, loginFlow);
}
export function* loginFlow(action) {
  try {
    const { email, password } = action.user;
    console.log(email, password);
    yield put({
      type: types.eventTypes.GET_EVENTS_REQUEST
    });
    // const user = yield call(AuthService.login, email, password);
    // yield put({ type: types.authTypes.LOGIN_SUCCESS, user });
    // yield put({ type: types.SET_TOKEN_INFO, user });
    // yield call(httpUtils.setUser, user);
    // yield put({
    //   type: types.projectTypes.GET_DASHBOARD_REQUEST
    //});
  } catch (error) {
    yield put({
      type: types.authTypes.LOGIN_FAILURE,
      error: error
    });
  }
}

const eventsTransformer = events => {
  const res = [];
  events.forEach(event =>
    res.push({
      id: event.id,
      ...event.data()
    })
  );
  return res;
};

export function* syncEventsWatcher() {
  yield takeLatest(types.eventTypes.GET_EVENTS_REQUEST, syncEventsForDashboard);
}

export function* syncEventsForDashboard() {
  yield fork(rsf.firestore.syncCollection, 'events', {
    successActionCreator: syncEvents,
    transform: eventsTransformer
  });
}

export default function* root() {
  yield all([loginWatcher(), syncEventsWatcher()]);
}
