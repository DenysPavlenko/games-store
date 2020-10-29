import UserPurchaseHistoryActionTypes from './user-purchase-history.types';

const INITIAL_SATE = {
  data: null,
  loading: true,
  error: null
}

const userReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case UserPurchaseHistoryActionTypes.FETCH_USER_PURCHASE_HISTORY_REQUEST:
      return {
        loading: true,
        error: false,
        data: null
      }
    case UserPurchaseHistoryActionTypes.FETCH_USER_PURCHASE_HISTORY_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      }
    case UserPurchaseHistoryActionTypes.FETCH_USER_PURCHASE_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: null
      }
    default:
      return state;
  }
}

export default userReducer;
