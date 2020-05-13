import CategoryDetailsTypes from './category-details.types';
// Services
import GamesService from 'services/games-serviece';
// Games service
const gamesService = new GamesService();

const categoryDetailsRequested = () => {
  return {
    type: CategoryDetailsTypes.FETCH_CATEGORY_DETAILS_REQUEST
  };
};
const categoryDetailsLoaded = (data) => {
  return {
    type: CategoryDetailsTypes.FETCH_CATEGORY_DETAILS_SUCCESS,
    payload: data
  };
};
const categoryDetailsError = () => {
  return {
    type: CategoryDetailsTypes.FETCH_CATEGORY_DETAILS_FAILURE
  };
};

export const fetchCategoryDetailsData = (categoryType, category) => (dispatch) => {
  dispatch(categoryDetailsRequested());
  gamesService.getCategoryDetails(categoryType, category)
    .then((data) => {
      dispatch(categoryDetailsLoaded(data))
    })
    .catch(() => { dispatch(categoryDetailsError()) })
}
