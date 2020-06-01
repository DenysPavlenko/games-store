import React from 'react';
import classNames from 'classnames';
// Styles
import './cart-empty.styles.sass'
// Components
import Typography from 'components/typography/typography.component';
// Assets
import { ReactComponent as CartIcon } from 'assets/images/icons/cart.svg';

const CartEmpty = ({ className, inverted }) => {
  const classes = classNames({
    'cart-empty': true,
    'cart-empty-inverted': inverted,
    [className]: className,
  })
  return (
    <div className={classes}>
      <CartIcon />
      <Typography component="span" variant="h2" className="cart-empty-title mb-0">Your Cart is empty</Typography>
    </div>
  );
};

export default CartEmpty;