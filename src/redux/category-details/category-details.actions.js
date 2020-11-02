import CategoryDetailsActionTypes from './category-details.types';
// Services
import GamesService from 'services/games-serviece';
// Games service
const gamesService = new GamesService();

const categoryDetailsRequested = () => ({
  type: CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_REQUEST
});
const categoryDetailsLoaded = data => ({
  type: CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_SUCCESS,
  payload: data
});
const categoryDetailsError = (error) => ({
  type: CategoryDetailsActionTypes.FETCH_CATEGORY_DETAILS_FAILURE,
  payload: error
});

export const fetchCategoryDetailsData = (categoryType, category) => (dispatch) => {
  dispatch(categoryDetailsRequested());
  gamesService.getCategoryDetails(categoryType, category)
    .then((data) => {
      dispatch(categoryDetailsLoaded(data))
    })
    .catch((error) => dispatch(categoryDetailsError(error)))
}
