import { createSelector } from 'reselect';

const selectCategoryDetails = state => state.categoryDetails;

export const selectCategoryDetailsData = createSelector(
  [selectCategoryDetails],
  categoryDetails => categoryDetails
);
