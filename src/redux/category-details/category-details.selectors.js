import { createSelector } from 'reselect';

const categoryDetailsSelector = state => state.categoryDetails;

export const selectCategoryDetails = createSelector(
  [categoryDetailsSelector],
  categoryDetails => categoryDetails
);
