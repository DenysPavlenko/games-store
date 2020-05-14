import GamesActionTypes from './games.types';
// Services
import GamesService from 'services/games-serviece';
// Games service
const gamesService = new GamesService();

const gamesRequested = () => ({
  type: GamesActionTypes.FETCH_GAMES_REQUEST
});
const gamesLoaded = data => ({
  type: GamesActionTypes.FETCH_GAMES_SUCCESS,
  payload: data
});
const gamesError = error => ({
  type: GamesActionTypes.FETCH_GAMES_FAILURE,
  payload: error
});

export const fetchGamesData = () => (dispatch) => {
  dispatch(gamesRequested());
  gamesService.getAllGames()
    .then((data) => { dispatch(gamesLoaded(data)) })
    .catch((err) => { dispatch(gamesError(err)) })
}
