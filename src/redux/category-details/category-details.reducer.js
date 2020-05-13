import CategoryDetailsTypes from './category-details.types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
}

const categoryDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryDetailsTypes.FETCH_CATEGORY_DETAILS_REQUEST:
      return {
        loading: true,
        error: false,
        data: null
      }
    case CategoryDetailsTypes.FETCH_CATEGORY_DETAILS_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload
      }
    case CategoryDetailsTypes.FETCH_CATEGORY_DETAILS_FAILURE:
      return {
        loading: false,
        error: true,
        data: null
      }
    default:
      return state;
  }
}

export default categoryDetailsReducer;