import CategoryDetailsActionTypes from './category-details.types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const categoryDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_REQUEST:
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null
      }
    case CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null
      }
    case CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_FAILURE:
      return {
        loading: false,
        data: null,
        error: true,
        errorDetails: action.payload
      }
    default:
      return state;
  }
}

export default categoryDetailsReducer;