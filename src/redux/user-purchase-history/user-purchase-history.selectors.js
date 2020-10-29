import { createSelector } from 'reselect';

const userPurchaseHistorySelector = state => state.userPurchaseHistory;

export const selectUserPurchaseHistory = createSelector(
  [userPurchaseHistorySelector],
  userPurchaseHistory => userPurchaseHistory
);
