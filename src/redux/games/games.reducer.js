import GamesTypes from './games.types';

const INITIAL_STATE = {
  collection: [],
  loading: true,
  error: null,
}

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GamesTypes.FETCH_GAMES_REQUEST:
      return {
        collection: [],
        loading: true,
        error: null,
      }
    case GamesTypes.FETCH_GAMES_SUCCESS:
      return {
        collection: action.payload,
        loading: false,
        error: null,
      }
    case GamesTypes.FETCH_GAMES_FAILURE:
      return {
        collection: [],
        loading: false,
        error: true,
      }
    default:
      return state;
  }
}

export default gamesReducer;