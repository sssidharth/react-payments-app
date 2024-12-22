import { call, put, takeEvery } from 'redux-saga/effects';
import apiClient from '../../Api/axios.config';
import {
  FETCH_DASHBOARD_DATA_START,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailure,
} from '../actions/dashboardActions';

export function* watchDashboardSaga() {
    yield takeEvery(FETCH_DASHBOARD_DATA_START, fetchDashboardDataSaga);
  }

function* fetchDashboardDataSaga() {
  try {
    const response = yield call(() => apiClient.get('/dashboard'));
    yield put(fetchDashboardDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDashboardDataFailure(error.message));
  }
}
