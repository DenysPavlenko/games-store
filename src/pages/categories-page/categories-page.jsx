import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux actions
import { fetchCategoriesData } from '../../redux/categories/categories.actions';
import { selectChosenCategory } from '../../redux/categories/categories.selectors';
// Components
import Container from 'components/container/container.component';
import Typography from 'components/typography/typography.component';
import Cards from 'components/cards/cards.component';
import Card from 'components/card/card.component';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs.component';
// Styles
import './categories-page.sass'

class CategoriesPage extends React.Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.categoriesRout !== prevProps.match.params.categoriesRout) {
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

        <Container>
          <Typography component="h2" className="mb-5">All {params.categoriesRout}</Typography>
          <Cards isLoading={loading} hasError={error} placeholdersToShow={20}>
            {collection.map(({ id, rout, image, name, total }) => (
              <Card key={id} onClick={() => history.push(`${url}/${rout}`)} >
                <Card.Image image={image} />
                <Card.Info>
                  <Typography component="h5">{name}</Typography>
                  <Typography component="h6" className="mb-0">Total: {total} games</Typography>
                </Card.Info>
              </Card>
            ))}
          </Cards>
        </Container >
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
