import UserPurchaseHistoryActionTypes from './user-purchase-history.types';
// Firebase
import { getUserPurchaseHistory } from 'services/firebase/firebase.utils';

const userPurchaseHistoryRequested = () => ({
  type: UserPurchaseHistoryActionTypes.FETCH_USER_PURCHASE_HISTORY_REQUEST
});
const userPurchaseHistoryLoaded = data => ({
  type: UserPurchaseHistoryActionTypes.FETCH_USER_PURCHASE_HISTORY_SUCCESS,
  payload: data
});
const userPurchaseHistoryError = () => ({
  type: UserPurchaseHistoryActionTypes.FETCH_USER_PURCHASE_HISTORY_FAILURE,
});

export const fetchUserPurchaseHistory = (id) => async (dispatch) => {
  try {
    dispatch(userPurchaseHistoryRequested());
    const data = await getUserPurchaseHistory(id);
    dispatch(userPurchaseHistoryLoaded(data));
  }
  catch (error) {
    dispatch(userPurchaseHistoryError(error.message));
  }
};
