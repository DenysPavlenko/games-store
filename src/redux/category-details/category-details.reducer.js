import CategoryDetailsActionTypes from './category-details.types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
}

const categoryDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_REQUEST:
      return {
        loading: true,
        error: false,
        data: null
      }
    case CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload
      }
    case CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_FAILURE:
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