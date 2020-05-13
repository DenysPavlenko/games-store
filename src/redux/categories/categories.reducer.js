import CategoriesTypes from './categories.types';

const INITIAL_STATE = {
  genres: { loading: true, error: false, collection: [] },
  developers: { loading: true, error: false, collection: [] },
  platforms: { loading: true, error: false, collection: [] },
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        [action.payload]: { loading: true, error: false, collection: [] }
      }
    case CategoriesTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        [action.payload.categories]: { loading: false, error: null, collection: action.payload.data },
      }
    case CategoriesTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        [action.payload]: { loading: false, error: true, collection: [] },
      }
    default:
      return state;
  }
}

export default categoriesReducer;