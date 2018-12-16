import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import * as types from '../types';
import { syncEvents, syncUsers, syncVenues, syncConfig } from '../actions';
import rsf from '../firebase';
import { AuthService } from '../services/';
import { httpUtils } from '../helpers';
export function* loginWatcher() {
  yield takeLatest(types.authTypes.LOGIN_REQUEST, loginFlow);
}

export function* loginFlow(action) {
  try {
    const { email, password } = action.user;
    console.log(email, password);
    const venueId = 'demo';
    const user = yield call(AuthService.login, email, password, venueId);
    yield call(httpUtils.signInWithCustomToken, user);
    yield call(httpUtils.setUser, user);
    yield put({
      type: types.dashboardTypes.GET_DASHBOARD_REQUEST
    });
  } catch (error) {
    yield put({
      type: types.authTypes.LOGIN_FAILURE,
      error: error
    });
  }
}

const itemsTransformer = items => {
  const res = [];
  items.forEach(item =>
    res.push({
      id: item.id,
      ...item.data()
    })
  );
  return res;
};

export function* dashboardWatcher() {
  yield takeLatest(types.dashboardTypes.GET_DASHBOARD_REQUEST, loadDashboard);
}

export function* loadDashboard() {
  try {
    yield put({
      type: types.venueTypes.GET_CONFIG_REQUEST
    });
    yield put({
      type: types.eventTypes.GET_EVENTS_REQUEST
    });
    yield put({
      type: types.venueTypes.GET_VENUES_REQUEST
    });
    yield put({
      type: types.userTypes.GET_USERS_REQUEST
    });
  } catch (error) {
    yield put({
      type: types.dashboardTypes.GET_DASHBOARD_FAILURE
    });
  }
}
export function* syncEventsWatcher() {
  yield takeLatest(types.eventTypes.GET_EVENTS_REQUEST, syncEventsForDashboard);
}

export function* syncEventsForDashboard() {
  yield fork(rsf.firestore.syncCollection, 'venues/demo/events', {
    successActionCreator: syncEvents,
    transform: itemsTransformer
  });
}

export function* syncVenuesWatcher() {
  yield takeLatest(types.venueTypes.GET_VENUES_REQUEST, syncVenuesForDashboard);
}

export function* syncVenuesForDashboard() {
  yield fork(rsf.firestore.syncCollection, 'venues', {
    successActionCreator: syncVenues,
    transform: itemsTransformer
  });
}

export function* syncUsersWatcher() {
  yield takeLatest(types.userTypes.GET_USERS_REQUEST, syncUsersForDashboard);
}

export function* syncUsersForDashboard() {
  yield fork(rsf.firestore.syncCollection, 'venues/demo/users', {
    successActionCreator: syncUsers,
    transform: itemsTransformer
  });
}

export function* syncConfigWatcher() {
  yield takeLatest(types.configTypes.GET_CONFIG_REQUEST, syncVenueConfig);
}

export function* syncVenueConfig() {
  yield fork(rsf.firestore.syncCollection, 'venues/demo/config', {
    successActionCreator: syncConfig,
    transform: itemsTransformer
  });
}

export default function* root() {
  yield all([
    loginWatcher(),
    dashboardWatcher(),
    syncEventsWatcher(),
    syncVenuesWatcher(),
    syncUsersWatcher(),
    syncVenuesWatcher()
  ]);
}
