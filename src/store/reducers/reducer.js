import {
  FETCH_DASHBOARD_DATA_START,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE,
  FETCH_USER_CARDS,
  FETCH_USER_CARDS_SUCCESS,
  FETCH_USER_CARDS_FAILED,
} from "../actions/actions";

const initialState = {
  // Dashboard
  dashboardData: {},
  loadingDashboard: false,
  errorDashboard: null,

  // Cards
  myCards: [],
  cardsLoading: false,
  cardsError: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboardData: {
          recentTransactions: action.payload.recentTransactions,
          weeklyActivityChart: action.payload.weeklyActivityChart,
          expenseStatistics: action.payload.expenseStatistics,
          quickTransfer: action.payload.quickTransfer,
          balanceHistoryChart: action.payload.balanceHistoryChart,
        },
      };
    case FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Failed to fetch data',
      };
    case FETCH_USER_CARDS:
      return {
        ...state,
        cardsLoading: true,
        cardsError: null,
      };
    case FETCH_USER_CARDS_SUCCESS:
      return {
        ...state,
        cardsLoading: false,
        myCards: action.payload
      };
    case FETCH_USER_CARDS_FAILED:
      return {
        ...state,
        cardsLoading: false,
        cardsError: 'Failed to Fetch the Cards data',
      };
    default:
      return state;
  }
};

export default dashboardReducer;
