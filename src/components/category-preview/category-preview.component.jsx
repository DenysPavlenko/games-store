import React from 'react';
// Components
import ErrorIndicator from 'components/error-indicator/error-indicator.component';
import Plate from 'components/plate/plate.component';
import Typography from 'components/typography/typography.component';
import Container from 'components/container/container.component'
import PlatePlaceholder from 'components/plate/plate-placeholder/plate-placeholder';

// Styles
import './category-preview.styles.sass'

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
          <Typography dangerouslySetInnerHTML={{ __html: data.description }} component="p"></Typography>
        </Plate.Right>
      </Plate>
    </Container>
  )
};

export default CategoryPreview;