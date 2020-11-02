import GamesActionTypes from './games.types';

const INITIAL_STATE = {
  loading: true,
  collection: [],
  error: false,
  errorDetails: null,
}

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GamesActionTypes.FETCH_GAMES_REQUEST:
      return {
        loading: true,
        collection: [],
        error: false,
        errorDetails: null,
      }
    case GamesActionTypes.FETCH_GAMES_SUCCESS:
      return {
        loading: false,
        collection: action.payload,
        error: false,
        errorDetails: null,
      }
    case GamesActionTypes.FETCH_GAMES_FAILURE:
      return {
        collection: [],
        loading: false,
        error: true,
        errorDetails: action.payload,
      }
    default:
      return state;
  }
}

export default gamesReducer;