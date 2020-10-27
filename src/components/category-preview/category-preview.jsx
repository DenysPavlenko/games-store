import React from 'react';
import PropTypes from 'prop-types';
// Components
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Plate from 'components/plate/plate';
import Figure from 'components/figure/figure';
import Typography from 'components/typography/typography';
import Container from 'layout/container/container';
import PlatePlaceholder from 'components/plate/plate-placeholder/plate-placeholder';

const CategoryPreview = ({ data, isLoading, hasError }) => {

  if (hasError) { return <Container><ErrorIndicator /></Container> }
  if (isLoading) { return <Container><PlatePlaceholder /></Container> }

  return (
    <Container>
      <Plate>
        <Plate.Left>
          <Figure image={data.image}></Figure>
        </Plate.Left>
        <Plate.Right>
          <Typography component="h4">{data.name} games</Typography>
          <Typography component="p" className="mb-0">{data.description.match(/<p>(.*?)<\/p>/)[1]}</Typography>
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
