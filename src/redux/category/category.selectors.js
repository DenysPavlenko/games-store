import { createSelector } from 'reselect';

const categorySelector = state => state.category;

export const selectCategory = createSelector(
  [categorySelector],
  category => category
);
