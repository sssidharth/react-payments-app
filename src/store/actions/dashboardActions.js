export const FETCH_DASHBOARD_DATA_START = 'FETCH_DASHBOARD_DATA_START';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILURE = 'FETCH_DASHBOARD_DATA_FAILURE';

export const fetchDashboardDataStart = () => ({
  type: FETCH_DASHBOARD_DATA_START,
});

export const fetchDashboardDataSuccess = (data) => ({
  type: FETCH_DASHBOARD_DATA_SUCCESS,
  payload: data,
});

export const fetchDashboardDataFailure = (error) => ({
  type: FETCH_DASHBOARD_DATA_FAILURE,
  payload: error,
});
