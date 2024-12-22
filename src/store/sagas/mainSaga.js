import { call, put, takeEvery } from 'redux-saga/effects';
import apiClient from '../../Api/axios.config';
import {
  FETCH_DASHBOARD_DATA_START,
  FETCH_USER_CARDS,
  fetchUserCardsSuccess,
  fetchUserCardsFailed,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
} from '../actions/actions';

export function* mainSaga() {
    yield takeEvery(FETCH_DASHBOARD_DATA_START, fetchDashboardDataSaga);
    yield takeEvery(FETCH_USER_CARDS, fetchUserCardsData);
  }

function* fetchDashboardDataSaga() {
  try {
    const response = yield call(() => apiClient.get('/dashboard'));
    yield put(fetchDashboardDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDashboardDataFailure(error.message));
  }
}

function* fetchUserCardsData() {
  try {
    const response = yield call(() => apiClient.get('/myCards'));
    yield put(fetchUserCardsSuccess(response.data));
  } catch (error) {
    yield put(fetchUserCardsFailed(error.message));
  }
}
