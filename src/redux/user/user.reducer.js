import UserActionTypes from './user.types';

const INITIAL_SATE = {
  currentUser: null,
  loading: true,
  error: false,
};

const userReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.CHECK_USER_SESSION_START:
      return {
        currentUser: null,
        loading: true,
        error: false
      }
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        currentUser: action.payload,
        loading: false,
        error: false
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        currentUser: null,
        loading: false,
        error: false
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        currentUser: null,
        loading: false,
        error: action.payload
      }
    case UserActionTypes.CHECK_USER_SESSION_END:
      return {
        currentUser: null,
        loading: false,
        error: false,
      }
    default:
      return state;
  }
}

export default userReducer;
