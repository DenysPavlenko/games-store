import CategoryActionTypes from './category.types';

const INITIAL_STATE = {
  loading: true,
  collection: [],
  error: false,
  errorDetails: null
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY_REQUEST:
      return {
        loading: true,
        collection: [],
        error: false,
        errorDetails: null
      }
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        loading: false,
        collection: action.payload,
        error: false,
        errorDetails: null
      }
    case CategoryActionTypes.FETCH_CATEGORY_FAILURE:
      return {
        loading: false,
        collection: [],
        error: true,
        errorDetails: action.payload,
      }
    default:
      return state;
  }
}

export default categoryReducer;