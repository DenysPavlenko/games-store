import UserActionTypes from './user.types';

const INITIAL_SATE = {
  currentUser: null,
  loading: true,
  error: null,
}

const userReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        currentUser: null,
        loading: true,
        error: null
      }
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;
