import CategoryActionTypes from './category.types';
// Services
import GamesService from 'services/games-serviece';
// Games service
const gamesService = new GamesService();

const categoryRequested = () => ({
  type: CategoryActionTypes.FETCH_CATEGORY_REQUEST
});
const categoryLoaded = data => ({
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
  payload: data
});
const categoryError = error => ({
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
  payload: error
});

export const fetchCategoryData = (categories, category) => dispatch => {
  let service;
  if (categories === 'genres') {
    service = gamesService.getAllGenres;
  } else if (categories === 'developers') {
    service = gamesService.getAllDevelopers;
  } else if (categories === 'platforms') {
    service = gamesService.getAllPlatforms;
  }

  dispatch(categoryRequested());
  service()
    .then((data) => data)
    .then((genres) => {
      return genres
        .find(genre => genre.rout === category).games
        .map(game => game.id)
    })
    .then((ids) => {
      return Promise.all(
        ids.map(async (id) => (await gamesService.getGameDetails(id)))
      )
    })
    .then((data) => dispatch(categoryLoaded(data)))
    .catch((error) => dispatch(categoryError(error)))
}
