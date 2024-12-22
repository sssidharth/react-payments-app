import {
    FETCH_DASHBOARD_DATA_START,
    FETCH_DASHBOARD_DATA_SUCCESS,
    FETCH_DASHBOARD_DATA_FAILURE,
  } from '../actions/dashboardActions';
  
  const initialState = {
    dashboardData: {},
    loading: false,
    error: null,
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
          myCards: action.payload.myCards,
          recentTransactions: action.payload.recentTransactions,
          weeklyActivityChart: action.payload.weeklyActivityChart,
          expenseStatistics: action.payload.expenseStatistics,
          quickTransfer: action.payload.quickTransfer,
          balanceHistoryChart: action.payload.balanceHistoryChart,
          }
        };
      case FETCH_DASHBOARD_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  