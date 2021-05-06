import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer';
// import logger from 'redux-logger';

export const middlewares = [
  thunkMiddleware
];
if(process.env.NODE_ENV === 'development'){
	// middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
