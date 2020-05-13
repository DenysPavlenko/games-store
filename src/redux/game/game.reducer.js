import GameTypes from './game.types';

const INITIAL_STATE = {
  loading: true,
  error: null,
  data: null,
}

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameTypes.FETCH_GAME_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      }
    case GameTypes.FETCH_GAME_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      }
    case GameTypes.FETCH_GAME_FAILURE:
      return {
        loading: false,
        error: true,
        data: null,
      }
    default:
      return state;
  }
}

export default gamesReducer;