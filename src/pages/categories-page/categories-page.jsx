import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux actions
import { fetchCategoriesData } from 'redux/categories/categories.actions';
import { selectChosenCategory } from 'redux/categories/categories.selectors';
// Components
import Container from 'grid/container/container';
import Figure from 'components/figure/figure';
import Typography from 'components/typography/typography';
import Cards from 'components/cards/cards';
import Card from 'components/card/card';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import SliderPreview from 'components/slider-preview/slider-preview';
import Button from 'components/button/button';
// Styles
import './categories-page.sass';

export const CategoriesPage = ({ fetchCategoriesData, history, match: { params, url }, data: { loading, collection, error } }) => {
  const { categoriesRout } = params;

  const [rootDoesntExist, setRootDoesntExist] = React.useState(false);

  React.useEffect(() => {
    if (categoriesRout === 'developers' || categoriesRout === 'genres' || categoriesRout === 'platforms') {
      fetchCategoriesData(categoriesRout);
    } else {
      setRootDoesntExist(true);
    }
  }, [fetchCategoriesData, categoriesRout]);

  /* istanbul ignore else */
  if (rootDoesntExist) { return <Redirect to="/404" /> }

  return (
    <div className="categories-page">
      <Breadcrumbs routes={[params.categoriesRout]} />

      <SliderPreview isLoading={loading} hasError={error} className="categories-page-banner">
        <SliderPreview.Left>
          {collection.map(({ id, image, rout }) => (
            <Link to={`${url}/${rout}`} key={id} className="categories-page-banner-image">
              <Figure image={image} />
            </Link>
          ))}
        </SliderPreview.Left>
        <SliderPreview.Right>
          {collection.map(({ id, name, games, rout }) => (
            <div key={id} className="categories-page-banner-info">
              <Typography component="h2">{name}</Typography>
              <Typography component="h6">Most Popular games:</Typography>
              <div className="categories-page-banner-list">
                {games.map(({ id, slug, name }) => (
                  <Link key={id} className="categories-page-banner-list-item" to={`${url}/${slug}`}>
                    <Typography component="span" variant="p" className="categories-page-banner-list">{name}</Typography>
                  </Link>
                ))}
              </div>
              <Link className="categories-page-banner-button" to={`${url}/${rout}`}>
                <Button btnArrow>Learn more</Button>
              </Link>
            </div>
          ))}
        </SliderPreview.Right>
      </SliderPreview>

      <Container>
        <Typography component="h2" className="mb-5">All {params.categoriesRout}</Typography>
        <Cards isLoading={loading} hasError={error} placeholdersToShow={20}>
          {collection.map(({ id, rout, image, name, total }) => (
            <Card key={id} onClick={() => history.push(`${url}/${rout}`)} image={image}>
              <Typography component="h5">{name}</Typography>
              <Typography component="h6" className="mb-0">Total: {total} games</Typography>
            </Card>
          ))}
        </Cards>
      </Container>
    </div >
  );
};

CategoriesPage.propTypes = {
  data: PropTypes.object.isRequired,
  fetchCategoriesData: PropTypes.func.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: selectChosenCategory,
});

const mapDispatchToProps = {
  fetchCategoriesData
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
