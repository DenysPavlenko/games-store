import { createSelector } from 'reselect';

const selectCategories = state => state.categories;
const selectChosenCategory = (state, { match }) => state.categories[match.params.categoriesRout];

export const selectCategoriesData = createSelector(
  [selectCategories],
  categories => categories
);

export const selectChosenCategoryData = createSelector(
  [selectChosenCategory],
  category => category
);
