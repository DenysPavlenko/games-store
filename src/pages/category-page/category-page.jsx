/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { fetchCategoryData } from 'redux/category/category.actions';
import { fetchCategoryDetailsData } from 'redux/category-details/category-details.actions';
import { selectCategory } from 'redux/category/category.selectors';
import { selectCategoryDetails } from 'redux/category-details/category-details.selectors';
// Components
import Container from 'grid/container/container';
import CategoryPreview from 'components/category-preview/category-preview';
import Typography from 'components/typography/typography';
import Cards from 'components/cards/cards';
import Card from 'components/card/card';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
// Styles
import './category-page.sass';

export class CategoryPage extends Component {
  componentDidMount() {
    const {
      fetchCategoryData,
      fetchCategoryDetailsData,
      match: { params },
    } = this.props;
    fetchCategoryData(params.categoriesRout, params.categoryRout);
    fetchCategoryDetailsData(params.categoriesRout, params.categoryRout);
  }

  render() {
    const {
      category,
      categoryDetails,
      match: { params },
      history,
    } = this.props;

    if (
      categoryDetails.errorDetails &&
      categoryDetails.errorDetails.message === '404'
    ) {
      return <Redirect to="/404" />;
    }
    if (category.errorDetails && category.errorDetails.message === '404') {
      return <Redirect to="/404" />;
    }

    return (
      <div className="category-page">
        <Breadcrumbs routes={[params.categoriesRout, params.categoryRout]} />

        <div className="category-page-header">
          <CategoryPreview
            isLoading={categoryDetails.loading}
            hasError={categoryDetails.error}
            data={categoryDetails.data}
          />
        </div>
        <Container>
          <Cards
            isLoading={category.loading}
            hasError={category.error}
            placeholdersToShow={10}
          >
            {category.collection.map(({ id, image, name, rating }) => (
              <Card
                key={id}
                onClick={() => history.push(`/product/${id}`)}
                image={image}
              >
                <Typography component="h5">{name}</Typography>
                <Typography component="h6" className="mb-0">
                  Rating {rating}
                </Typography>
              </Card>
            ))}
          </Cards>
        </Container>
      </div>
    );
  }
}

CategoryPage.propTypes = {
  category: PropTypes.object.isRequired,
  categoryDetails: PropTypes.object.isRequired,
  fetchCategoryData: PropTypes.func.isRequired,
  fetchCategoryDetailsData: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  category: selectCategory,
  categoryDetails: selectCategoryDetails,
});

const mapDispatchToProps = {
  fetchCategoryData,
  fetchCategoryDetailsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
