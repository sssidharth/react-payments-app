import { call, put, takeEvery } from 'redux-saga/effects';
import apiClient from '../../axios.config';
import {
  FETCH_USER_CARDS,
  fetchUserCardsSuccess,
  fetchUserCardsFailed,

  FETCH_DASHBOARD_DATA_START,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,

  FETCH_PROFILE_DATA,
  fetchProfileDataSuccess,
  fetchProfileDataFailed,

  MODIFY_PROFILE_DATA,
  modifyProfileDataSuccess,
  modifyProfileDataFailed
} from '../actions/actions';

export function* mainSaga() {
    yield takeEvery(FETCH_DASHBOARD_DATA_START, fetchDashboardDataSaga);
    yield takeEvery(FETCH_USER_CARDS, fetchUserCardsData);
    yield takeEvery(FETCH_PROFILE_DATA, handleFetchProfileData);
    yield takeEvery(MODIFY_PROFILE_DATA, handleModifyProfileData);
  }

function* fetchDashboardDataSaga() {
  try {
    const response = yield call(() => apiClient.get('/dashboard'));
    yield put(fetchDashboardDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDashboardDataFailure());
  }
}

function* fetchUserCardsData() {
  try {
    const response = yield call(() => apiClient.get('/myCards'));
    yield put(fetchUserCardsSuccess(response.data));
  } catch (error) {
    yield put(fetchUserCardsFailed());
  }
}

function* handleFetchProfileData() {
  try {
    const response = yield call(() => apiClient.get('/userProfile'));
    yield put(fetchProfileDataSuccess(response.data));
  } catch (error) {
    yield put(fetchProfileDataFailed());
  }
}

function* handleModifyProfileData(action) {
  try {
    const response = yield call(() => apiClient.put('/userProfile', action.payload));
    yield put(modifyProfileDataSuccess(response.data));
    yield put({ type: FETCH_PROFILE_DATA });
  } catch (error) {
    yield put(modifyProfileDataFailed());
  }
}
