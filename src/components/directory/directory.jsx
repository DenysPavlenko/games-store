import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { fetchCategoriesData } from '../../redux/categories/categories.actions';
import { selectCategories } from '../../redux/categories/categories.selectors';
// Components
import DirectoryCollection from 'components/directory-collection/directory-collection';
import Container from 'layout/container/container';
// Styles
import './directory.sass';

const Directory = ({ fetchCategoriesData, categories }) => {

  useEffect(() => {
    fetchCategoriesData('genres');
    fetchCategoriesData('developers');
    fetchCategoriesData('platforms');
  }, [fetchCategoriesData]);

  return (
    <div className="directory">
      <Container>
        {Object.keys(categories).map((category, idx) => (
          <DirectoryCollection key={idx} rootName={category} title={category} collection={categories[category].collection} isLoading={categories[category].loading} hasError={categories[category].error} />
        ))}
      </Container>
    </div>
  )
}

Directory.propTypes = {
  categories: PropTypes.object.isRequired,
  fetchCategoriesData: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategories
});

const mapDispatchToProps = dispatch => ({
  fetchCategoriesData: categories => dispatch(fetchCategoriesData(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
