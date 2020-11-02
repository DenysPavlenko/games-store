import CategoriesActionTypes from './categories.types';

const INITIAL_STATE = {
  genres: { loading: true, collection: [], error: false, errorDetails: null },
  developers: { loading: true, collection: [], error: false, errorDetails: null },
  platforms: { loading: true, collection: [], error: false, errorDetails: null },
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        [action.payload.categories]: { loading: true, collection: [], error: false, errorDetails: null }
      }
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        [action.payload.categories]: { loading: false, collection: action.payload.data, error: false, errorDetails: null },
      }
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        [action.payload.categories]: { loading: false, collection: [], error: true, errorDetails: action.payload.error },
      }
    default:
      return state;
  }
}

export default categoriesReducer;
