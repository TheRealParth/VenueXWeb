import { takeLatest, put, fork, spawn, call, all, takeEvery } from 'redux-saga/effects';
import * as types from '../types';
export function* loginWatcher() {
  yield takeLatest(types.authTypes.LOGIN_REQUEST, loginFlow);
}
export function* loginFlow(action) {
  try {
    // const { email, password } = action.user;
    // const user = yield call(AuthService.login, email, password);
    // yield put({ type: types.authTypes.LOGIN_SUCCESS, user });
    // yield put({ type: types.SET_TOKEN_INFO, user });
    // yield call(httpUtils.setUser, user);
    // yield call(httpUtils.handleFile);
    // yield call(registerScreens);
    // const iconsMap = yield call(httpUtils.setIcons);
    // yield call(loadHomepage, iconsMap);
    // yield spawn(userActions.currentUser);
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

export default function* root() {
  yield all([loginWatcher()]);
}
