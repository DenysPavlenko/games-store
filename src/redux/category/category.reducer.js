import CategoryActionTypes from './category.types';

const INITIAL_STATE = {
  loading: true,
  collection: [],
  error: false,
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY_REQUEST:
      return {
        loading: true,
        error: false,
        collection: []
      }
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        loading: false,
        error: false,
        collection: action.payload
      }
    case CategoryActionTypes.FETCH_CATEGORY_FAILURE:
      return {
        loading: false,
        error: true,
        collection: []
      }
    default:
      return state;
  }
}

export default categoryReducer;