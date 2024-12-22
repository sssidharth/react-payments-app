export const FETCH_DASHBOARD_DATA_START = 'FETCH_DASHBOARD_DATA_START';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILURE = 'FETCH_DASHBOARD_DATA_FAILURE';

export const FETCH_USER_CARDS = 'FETCH_USER_CARDS';
export const FETCH_USER_CARDS_SUCCESS = 'FETCH_USER_CARDS_SUCCESS';
export const FETCH_USER_CARDS_FAILED = 'FETCH_USER_CARDS_FAILED';

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

export const fetchUserCards = () => ({
  type: FETCH_USER_CARDS,
});

export const fetchUserCardsSuccess = (data) => ({
  type: FETCH_USER_CARDS_SUCCESS,
  payload: data,
});

export const fetchUserCardsFailed = (error) => ({
  type: FETCH_USER_CARDS_FAILED,
  payload: error,
});
