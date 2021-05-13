import React from 'react';
// Components
import Container from 'layout/container/container';
// Styles
import './product-page-placeholder.sass'

const ProductPagePlaceholder = () => {
  return (
    <div className="product-placeholder">
      <Container>
        <div className="product-placeholder-breadcrumbs"></div>

        <div className="product-placeholder-header"></div>

        <div className="product-placeholder-buy-product">
          <div className="product-placeholder-buy-product-title"></div>
          <div className="product-placeholder-buy-product-button"></div>
        </div>

        <div className="product-placeholder-description">
          <div className="product-placeholder-description-title"><span></span></div>
          <div className="product-placeholder-description-content"></div>
        </div>

        <div className="product-placeholder-description">
          <div className="product-placeholder-description-title"><span></span></div>
          <div className="product-placeholder-description-content"></div>
        </div>

        <div className="product-placeholder-description">
          <div className="product-placeholder-description-title"><span></span></div>
          <div className="product-placeholder-description-content"></div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPagePlaceholder;
