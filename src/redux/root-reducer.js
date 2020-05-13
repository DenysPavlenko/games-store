import { combineReducers } from 'redux';
// Reducers
import gamesReducer from './games/games.reducer';
import categoriesReducer from './categories/categories.reducer';
import categoryReducer from './category/category.reducer';
import categoryDetailsReducer from './category-details/category-details.reducer';
import gameReducer from './game/game.reducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  categoryDetails: categoryDetailsReducer,
  game: gameReducer,
});

export default rootReducer;