import React from 'react';
import PropTypes from 'prop-types';
// Components
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Plate from 'components/plate/plate';
import Typography from 'components/typography/typography';
import Container from 'components/container/container';
import PlatePlaceholder from 'components/plate/plate-placeholder/plate-placeholder';
// Styles
import './category-preview.sass';

const CategoryPreview = ({ data, isLoading, hasError }) => {

  if (hasError) { return <Container><ErrorIndicator /></Container> }
  if (isLoading) { return <Container><PlatePlaceholder /></Container> }

  return (
    <Container>
      <Plate className="category-preview">
        <Plate.Left>
          <figure className="category-preview-image" style={{ backgroundImage: `url(${data.image})` }}></figure>
        </Plate.Left>
        <Plate.Right className="category-preview-info">
          <Typography component="h4">{data.name} games</Typography>
          <Typography component="p">{data.description.match(/<p>(.*?)<\/p>/)[1]}</Typography>
        </Plate.Right>
      </Plate>
    </Container>
  )
};

CategoryPreview.defaultProps = {
  isLoading: false,
  hasError: false,
};

CategoryPreview.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default CategoryPreview;
