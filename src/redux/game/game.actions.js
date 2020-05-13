import GameTypes from './game.types';
// Services
import GamesService from 'services/games-serviece';
// Games service
const gamesService = new GamesService();

const gamesRequested = () => {
  return {
    type: GameTypes.FETCH_GAME_REQUEST
  };
};
const gamesLoaded = (data) => {
  return {
    type: GameTypes.FETCH_GAME_SUCCESS,
    payload: data
  };
};
const gamesError = () => {
  return {
    type: GameTypes.FETCH_GAME_FAILURE,
  };
};

export const fetchGameDetails = (gameId) => (dispatch) => {
  dispatch(gamesRequested());
  gamesService.getGameDetails(gameId)
    .then((data) => { dispatch(gamesLoaded(data)) })
    .catch(() => { dispatch(gamesError()) })
}
