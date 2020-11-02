import GameActionTypes from './game.types';
// Services
import GamesService from 'services/games-serviece';
// Games service
const gamesService = new GamesService();

const gamesRequested = () => ({
  type: GameActionTypes.FETCH_GAME_REQUEST
});
const gamesLoaded = data => ({
  type: GameActionTypes.FETCH_GAME_SUCCESS,
  payload: data
});
const gamesError = (error) => ({
  type: GameActionTypes.FETCH_GAME_FAILURE,
  payload: error
});

export const fetchGameDetails = (gameId) => (dispatch) => {
  dispatch(gamesRequested());
  gamesService.getGameDetails(gameId)
    .then((data) => dispatch(gamesLoaded(data)))
    .catch((error) => dispatch(gamesError(error)))
}
