import GameActionTypes from './game.types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: false,
  errorDetails: null,
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameActionTypes.FETCH_GAME_REQUEST:
      return {
        loading: true,
        data: null,
        error: false,
        errorDetails: null,
      }
    case GameActionTypes.FETCH_GAME_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorDetails: null,
      }
    case GameActionTypes.FETCH_GAME_FAILURE:
      return {
        loading: false,
        data: null,
        error: true,
        errorDetails: action.payload,
      }
    default:
      return state;
  }
}

export default gamesReducer;
