import { call, put, takeEvery } from 'redux-saga/effects';
import apiClient from '../../axios.config';
import data from '../../db.json';
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

const envPath = process.env.REACT_APP_API_BASE_URL === '/vercel-env';

export function* mainSaga() {
    yield takeEvery(FETCH_DASHBOARD_DATA_START, fetchDashboardDataSaga);
    yield takeEvery(FETCH_USER_CARDS, fetchUserCardsData);
    yield takeEvery(FETCH_PROFILE_DATA, handleFetchProfileData);
    yield takeEvery(MODIFY_PROFILE_DATA, handleModifyProfileData);
  }

function* fetchDashboardDataSaga() {
  try {
    const response = envPath ? data.dashboard : yield call(() => apiClient.get('/dashboard'));
    yield put(fetchDashboardDataSuccess(envPath ? response : response.data));
  } catch (error) {
    yield put(fetchDashboardDataFailure());
  }
}

function* fetchUserCardsData() {
  try {
    const response = envPath ? data.myCards : yield call(() => apiClient.get('/myCards'));
    yield put(fetchUserCardsSuccess(envPath ? response : response.data));
  } catch (error) {
    yield put(fetchUserCardsFailed());
  }
}

function* handleFetchProfileData() {
  try {
    const response = envPath ? data.userProfile : yield call(() => apiClient.get('/userProfile'));
    yield put(fetchProfileDataSuccess(envPath ? response : response.data));
  } catch (error) {
    yield put(fetchProfileDataFailed());
  }
}

function* handleModifyProfileData(action) {
  try {
    const response = apiClient.put('/userProfile', action.payload);
    if (envPath) data.userProfile = action.payload;
    yield put(modifyProfileDataSuccess(response.data));
    yield put({ type: FETCH_PROFILE_DATA });
  } catch (error) {
    yield put(modifyProfileDataFailed());
  }
}
