import React from 'react';
// Components
import Container from 'grid/container/container';
// Styles
import './product-page-placeholder.sass';

const ProductPagePlaceholder = () => (
  <div className="product-placeholder">
    <Container>
      <div className="product-placeholder-breadcrumbs" />

      <div className="product-placeholder-header" />

      <div className="product-placeholder-buy-product">
        <div className="product-placeholder-buy-product-title" />
        <div className="product-placeholder-buy-product-button" />
      </div>

      <div className="product-placeholder-description">
        <div className="product-placeholder-description-title">
          <span />
        </div>
        <div className="product-placeholder-description-content" />
      </div>

      <div className="product-placeholder-description">
        <div className="product-placeholder-description-title">
          <span />
        </div>
        <div className="product-placeholder-description-content" />
      </div>

      <div className="product-placeholder-description">
        <div className="product-placeholder-description-title">
          <span />
        </div>
        <div className="product-placeholder-description-content" />
      </div>
    </Container>
  </div>
);

export default ProductPagePlaceholder;
