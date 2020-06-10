import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
// Components
import Button from 'components/button/button.component';
import Chip from 'components/chip/chip.component';
import Typography from 'components/typography/typography.component';
// Styles
import './buy-product.styles.sass';
// Assets
import { ReactComponent as CartIcon } from 'assets/images/icons/cart.svg';

const BuyProduct = ({ price, name, className, onCartClick, onButtonClick, inCart }) => {
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
        {inCart ?
          <Chip>The product is in the cart</Chip>
          :
          <>
            <Typography component="h5" className="mb-0 text-muted buy-product-price">USD {price}</Typography>
            <div className="buy-product-button-group">
              <Button onClick={onButtonClick} btnLarge>Buy now</Button>
              <Button onClick={onCartClick} className="buy-product-cart"><CartIcon /></Button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

BuyProduct.defaultProps = {
  onCartClick: () => { },
  onButtonClick: () => { }
};

BuyProduct.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  inCart: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onCartClick: PropTypes.func,
  onButtonClick: PropTypes.func,
};

export default BuyProduct;
