import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'redux/root-reducer';
import { middlewares } from 'redux/store';

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};

export const storeFactory = (initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(...middlewares));
