import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './cart-empty.sass';
// Components
import Typography from 'components/typography/typography';
// Assets
import { ReactComponent as CartIcon } from 'assets/images/icons/cart.svg';

const CartEmpty = ({ className, inverted }) => {
  const classes = classNames({
    'cart-empty': true,
    'cart-empty-inverted': inverted,
    [className]: className,
  });
  return (
    <div className={classes}>
      <CartIcon />
      <Typography component="span" variant="h2" className="cart-empty-title mb-0">Your Cart is empty</Typography>
    </div>
  );
};

CartEmpty.propTypes = {
  inverted: PropTypes.bool,
};

export default CartEmpty;
