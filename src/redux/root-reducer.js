import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducers
import gamesReducer from './games/games.reducer';
import categoriesReducer from './categories/categories.reducer';
import categoryReducer from './category/category.reducer';
import categoryDetailsReducer from './category-details/category-details.reducer';
import gameReducer from './game/game.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import userPurchaseHistoryReducer from './user-purchase-history/user-purchase-history.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  games: gamesReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  categoryDetails: categoryDetailsReducer,
  game: gameReducer,
  cart: cartReducer,
  user: userReducer,
  userPurchaseHistory: userPurchaseHistoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
