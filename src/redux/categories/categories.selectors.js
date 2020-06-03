import { createSelector } from 'reselect';

const categoriesSelector = state => state.categories;
const chosenCategorySelect = (state, { match }) => state.categories[match.params.categoriesRout];

export const selectCategories = createSelector(
  [categoriesSelector],
  categories => categories
);

export const selectChosenCategory = createSelector(
  [chosenCategorySelect],
  category => category
);
