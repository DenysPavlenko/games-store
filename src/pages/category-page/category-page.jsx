import { connect } from 'react-redux';
import React from 'react';
// Redux actions
import { fetchCategoryData } from 'redux/category/category.actions';
import { fetchCategoryDetailsData } from 'redux/category-details/category-details.actions';
// Components
import Container from 'components/container/container.component';
import CategoryPreview from 'components/category-preview/category-preview.component';
import Typography from 'components/typography/typography.component';
import Cards from 'components/cards/cards.component';
import Card from 'components/card/card.component';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs.component';
// Styles
import './category-page.sass'

class CategoryPage extends React.Component {

  componentDidMount() {
    const { fetchCategoryData, fetchCategoryDetailsData, match: { params } } = this.props;
    fetchCategoryData(params.categoriesRout, params.categoryRout);
    fetchCategoryDetailsData(params.categoriesRout, params.categoryRout)
  }

  render() {
    const {
      category,
      categoryDetails,
      match: { params },
      history
    } = this.props;

    return (
      <div className="category-page">
        <Breadcrumbs routes={[params.categoriesRout, params.categoryRout]} />

        <div className="category-page-header">
          <CategoryPreview isLoading={categoryDetails.loading} hasError={categoryDetails.error} data={categoryDetails.data} />
        </div>

        <Container>
          <Cards isLoading={category.loading} hasError={category.error} placeholdersToShow={10}>
            {category.collection.map(({ id, image, name, rating, rout }) => (
              <Card key={id} onClick={() => history.push(`/product/${id}`)}>
                <Card.Image image={image} />
                <Card.Info>
                  <Typography component="h5">{name}</Typography>
                  <Typography component="h6" className="mb-0">Rating {rating}</Typography>
                </Card.Info>
              </Card>
            ))}
          </Cards>
        </Container>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    category: state.category,
    categoryDetails: state.categoryDetails,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryData: (categories, category) => dispatch(fetchCategoryData(categories, category)),
    fetchCategoryDetailsData: (categoryType, category) => dispatch(fetchCategoryDetailsData(categoryType, category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);