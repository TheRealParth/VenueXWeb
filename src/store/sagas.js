import { takeLatest, take, put, fork, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types';
import { syncEvents, syncUsers, syncUser, syncVenues, syncConfig } from '../actions';
import rsf, { firebaseApp } from '../firebase';
import { AuthService } from '../services/';
import { httpUtils } from '../helpers';
import venueId from '../config/venueId';

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
export function* loginWatcher() {
  yield takeLatest(types.authTypes.LOGIN_REQUEST, loginFlow);
}

export function* loginFlow(action) {
  try {
    const { email, password } = action.user;

    const user = yield call(AuthService.login, email, password, venueId);
    yield call(httpUtils.signInWithCustomToken, user);
    yield call(syncUserWatcher);
    yield put({
      type: types.authTypes.LOGIN_SUCCESS,
      user
    });
    yield put({
      type: types.dashboardTypes.GET_DASHBOARD_REQUEST
    });
  } catch (error) {
    yield put({
      type: types.authTypes.LOGIN_FAILURE,
      error
    });
  }
}

export function* loginWithToken({ payload }) {
  try {
    const { user } = yield call(httpUtils.signInWithCustomToken, payload);
    yield put({
      type: types.authTypes.LOGIN_SUCCESS,
      user
    });
    yield put({
      type: types.dashboardTypes.GET_DASHBOARD_REQUEST
    });
    yield call(syncUserWatcher);
  } catch (error) {
    yield put({
      type: types.authTypes.LOGIN_FAILURE,
      error
    });
  }
}
export function* loginWithTokensWatcher() {
  yield takeLatest(types.userTypes.LOGIN_WITH_TOKEN, loginWithToken);
}
export function* syncUserWatcher() {
  yield takeLatest(types.authTypes.LOGIN_REQUEST, syncUserSaga);
}
export function* syncUserSaga() {
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { error, user } = yield take(channel);
    if (user) yield put(syncUser(user));

    // else yield put(syncError(error));
  }
}

export function* dashboardWatcher() {
  yield takeLatest(types.dashboardTypes.GET_DASHBOARD_REQUEST, loadDashboard);
}

export function* loadDashboard() {
  try {
    yield put({
      type: types.configTypes.GET_CONFIG_REQUEST
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

export function* syncBillingWatcher() {
  yield takeLatest(types.billingTypes.INCREMENT_MONTH);
}
export function* syncEventsWatcher() {
  yield takeLatest(types.eventTypes.GET_EVENTS_REQUEST, syncEventsForDashboard);
}

export function* syncEventsForDashboard() {
  yield fork(rsf.firestore.syncCollection, `venues/${venueId}/events`, {
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
export function* syncUpdateUsersPermissionsSaga({ payload }) {
  const { users, permissions } = payload;
  const db = firebaseApp.firestore();
  const batch = db.batch();
  const collRef = db.collection(`venues/${venueId}/users`);
  const userIds = users.map(user => user.id);
  yield fork(rsf.firestore.syncCollection, `venues/${venueId}/users`, {
    successActionCreator: 'PERMISSIONS_UPDATE_SUCCESS',
    transform: items => {
      items.forEach(item => {
        if (userIds.indexOf(item.id) == -1) return;
        const docRef = collRef.doc(item.id);
        batch.update(docRef, { permissions });
      });
      batch.commit().catch(err => console.error(err));
    }
  });
}
export function* syncDeleteUserSaga({ payload }) {
  const { users } = payload;
  const db = firebaseApp.firestore();
  const batch = db.batch();
  const collRef = db.collection(`venues/${venueId}/users`);
  const userIds = users.map(user => user.id);
  yield fork(rsf.firestore.syncCollection, `venues/${venueId}/users`, {
    successActionCreator: 'PERMISSIONS_UPDATE_SUCCESS',
    transform: items => {
      items.forEach(item => {
        if (userIds.indexOf(item.id) == -1) return;
        const docRef = collRef.doc(item.id);
        batch.delete(docRef);
      });
      batch.commit().catch(err => console.error(err));
    }
  });
}
export function* syncCreateEventSaga({ payload }) {
  yield fork(rsf.firestore.addDocument, `venues/${venueId}/events`, {
    //TODO
  });
}
export function* createUserSaga({ user }) {
  console.log(user)
  try {
    yield call(AuthService.createUser, { ...user, venueId });
    yield put({
      type: types.userTypes.CREATE_USER_SUCCESS,
      user
    });
  } catch (error) {
    yield put({
      type: types.userTypes.CREATE_USER_FAILURE,
      error
    });
  }
}
export function* syncUsersWatcher() {
  yield takeLatest(types.userTypes.GET_USERS_REQUEST, syncUsersForDashboard);
}

export function* syncUsersForDashboard() {
  yield fork(rsf.firestore.syncCollection, `venues/${venueId}/users`, {
    successActionCreator: syncUsers,
    transform: itemsTransformer
  });
}
export function* createEventRequestWatcher() {
  yield takeLatest(types.eventTypes.CREATE_EVENT_REQUEST, syncCreateEventSaga);
}
export function* syncConfigWatcher() {
  yield takeLatest(types.configTypes.GET_CONFIG_REQUEST, syncVenueConfig);
}
export function* updatePermissionsWatcher() {
  yield takeLatest(types.userTypes.USERS.PERMISSIONS_UPDATE, syncUpdateUsersPermissionsSaga);
}
export function* deleteUsersWatcher() {
  yield takeLatest(types.userTypes.USERS.DELETE_USERS, syncDeleteUserSaga);
}
export function* syncVenueConfig() {
  yield fork(rsf.database.sync, `venues/${venueId}`, {
    successActionCreator: syncConfig
  });
}
export function* createUserWatcher() {
  yield takeLatest(types.userTypes.CREATE_USER_REQUEST, createUserSaga);
}

export default function* root() {
  yield all([
    loginWatcher(),
    dashboardWatcher(),
    loginWithTokensWatcher(),
    syncEventsWatcher(),
    syncVenuesWatcher(),
    syncUsersWatcher(),
    syncUserWatcher(),
    syncConfigWatcher(),
    updatePermissionsWatcher(),
    deleteUsersWatcher(),
    createEventRequestWatcher(),
    createUserWatcher()
  ]);
}
