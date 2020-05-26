import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export const selectCategoryData = createSelector(
  [selectCategory],
  category => category
);
