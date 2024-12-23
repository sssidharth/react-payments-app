export const FETCH_DASHBOARD_DATA_START = 'FETCH_DASHBOARD_DATA_START';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILURE = 'FETCH_DASHBOARD_DATA_FAILURE';

export const FETCH_USER_CARDS = 'FETCH_USER_CARDS';
export const FETCH_USER_CARDS_SUCCESS = 'FETCH_USER_CARDS_SUCCESS';
export const FETCH_USER_CARDS_FAILED = 'FETCH_USER_CARDS_FAILED';

export const FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA';
export const FETCH_PROFILE_DATA_SUCCESS = 'FETCH_PROFILE_DATA_SUCCESS';
export const FETCH_PROFILE_DATA_FAILED = 'FETCH_PROFILE_DATA_FAILED';

export const MODIFY_PROFILE_DATA = 'MODIFY_PROFILE_DATA';
export const MODIFY_PROFILE_DATA_SUCCESS = 'MODIFY_PROFILE_DATA_SUCCESS';
export const MODIFY_PROFILE_DATA_FAILED = 'MODIFY_PROFILE_DATAS_FAILED';

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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

export const fetchProfileData = () => ({
  type: FETCH_PROFILE_DATA,
});

export const fetchProfileDataSuccess = (data) => ({
  type: FETCH_PROFILE_DATA_SUCCESS,
  payload: data,
});

export const fetchProfileDataFailed = (error) => ({
  type: FETCH_PROFILE_DATA_SUCCESS,
  payload: error,
});

export const modifyProfileData = (data) => ({
  type: MODIFY_PROFILE_DATA,
  payload: data,
});

export const modifyProfileDataSuccess = (data) => ({
  type: MODIFY_PROFILE_DATA_SUCCESS,
  payload: data,
});

export const modifyProfileDataFailed = (error) => ({
  type: MODIFY_PROFILE_DATA_FAILED,
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

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
