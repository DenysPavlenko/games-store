import CategoriesTypes from './categories.types';
// Services
import GamesService from 'services/games-serviece';
// Games service
const gamesService = new GamesService();

const categoriesRequested = (categories) => {
  return {
    type: CategoriesTypes.FETCH_CATEGORIES_REQUEST,
    payload: categories
  };
};
const categoriesLoaded = (data) => {
  return {
    type: CategoriesTypes.FETCH_CATEGORIES_SUCCESS,
    payload: data
  };
};
const categoriesError = (categories) => {
  return {
    type: CategoriesTypes.FETCH_CATEGORIES_FAILURE,
    payload: categories
  };
};

export const fetchCategoriesData = (categories) => (dispatch) => {
  let service;
  if (categories === 'genres') {
    service = gamesService.getAllGenres;
  } else if (categories === 'developers') {
    service = gamesService.getAllDevelopers;
  } else if (categories === 'platforms') {
    service = gamesService.getAllPlatforms;
  }

  dispatch(categoriesRequested(categories));
  service()
    .then((data) => { dispatch(categoriesLoaded({ categories, data })) })
    .catch((error) => { dispatch(categoriesError(categories)) })
}
