import React from 'react';
import classNames from 'classnames'
// Components
import Button from 'components/button/button.component';
import Typography from 'components/typography/typography.component';
// Styles
import './buy-product.styles.sass'
// Assets
import { ReactComponent as CartIcon } from 'assets/images/icons/cart.svg';

const BuyProduct = ({ price, name, className, onCartClick }) => {
  const classes = classNames({
    'buy-product': true,
    [className]: className
  });
  return (
    <div className={classes}>
      <div className="buy-product-left">
        <Typography component="h2" variant="h1" className="mb-0">{name}</Typography>
      </div>
      <div className="buy-product-right">
        <Typography component="h5" className="mb-0 text-muted buy-product-price">USD {price}</Typography>
        <div className="buy-product-button-group">
          <Button btnLarge>Buy now</Button>
          <Button onClick={onCartClick} className="buy-product-cart"><CartIcon /></Button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;