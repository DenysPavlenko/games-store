import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [
  thunkMiddleware
];
// if(process.env.NODE_ENV === 'development'){
// 	middlewares.push();
// }

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export { store };