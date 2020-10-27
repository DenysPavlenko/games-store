import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux actions
import { fetchCategoriesData } from '../../redux/categories/categories.actions';
import { selectChosenCategory } from '../../redux/categories/categories.selectors';
// Components
import Container from 'layout/container/container';
import Figure from 'components/figure/figure';
import Typography from 'components/typography/typography';
import Cards from 'components/cards/cards';
import Card from 'components/card/card';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import Banner from 'components/slider-preview/slider-preview';
import Button from 'components/button/button';
// Styles
import './categories-page.sass'

class CategoriesPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchCategoriesData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params } } = this.props;
    if (params.categoriesRout !== prevProps.match.params.categoriesRout) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { data, fetchCategoriesData, match } = this.props;
    if (data.loading || (!data.loading && data.error)) {
      fetchCategoriesData(match.params.categoriesRout);
    }
  }

  render() {
    const {
      data: { loading, error, collection },
      match: { params, url },
      history
    } = this.props;

    return (
      <div className="categories-page">
        <Breadcrumbs routes={[params.categoriesRout]} />

        <Banner isLoading={loading} hasErorr={error} className="categories-page-banner">
          <Banner.Left>
            {collection.map(({ id, image, rout }) => (
              <Link to={`${url}/${rout}`} key={id} className="categories-page-banner-image">
                <Figure image={image} />
              </Link>
            ))}
          </Banner.Left>
          <Banner.Right>
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
          </Banner.Right>
        </Banner>

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
  }
};

const mapStateToProps = createStructuredSelector({
  data: selectChosenCategory
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesData: categories => dispatch(fetchCategoriesData(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
