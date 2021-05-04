import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import Figure from 'components/figure/figure';
// Styles
import './cart-item.sass';
// Assets
import { ReactComponent as TrashIcon } from 'assets/images/icons/trash.svg';

const CartItem = ({ cartItem, hideCart, addItem, removeItem, clearItem, className, inverted, control }) => {
  const { id, image, name, price, quantity } = cartItem;
  const classes = classNames({
    'cart-item': true,
    'cart-item-inverted': inverted,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="cart-item-image">
        <Link to={`/product/${id}`} onClick={hideCart}>
          <Figure image={image} />
        </Link>
      </div>
      <div className="cart-item-content">
        <div className="cart-item-title">
          <Typography component="h3" className="text-dark">
            <Link to={`/product/${id}`} onClick={hideCart}>{name}</Link>
          </Typography>
          <Typography component="h5" className="text-dark">Price: ${price}</Typography>
          {control &&
            <div className="cart-item-control">
              <button className="cart-item-control-item h3" disabled={quantity === 1 && true} onClick={() => removeItem(cartItem)}>-</button>
              <button className="cart-item-control-item h3" onClick={() => addItem(cartItem)}>+</button>
              <button className="cart-item-control-item h3" onClick={() => clearItem(cartItem)}><TrashIcon /></button>
            </div>
          }
        </div>
        <div className="cart-item-total">
          <Typography component="h5" className="cart-item-total-title text-dark">{quantity} {quantity === 1 ? `Copy` : 'Copies'}</Typography>
          <Typography component="h2" className="text-dark">${price * quantity}</Typography>
        </div>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  hideCart: () => { },
  addItem: () => { },
  removeItem: () => { },
  clearItem: () => { },
  control: true,
  inverted: false
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  hideCart: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  clearItem: PropTypes.func,
  className: PropTypes.string,
  inverted: PropTypes.bool,
  control: PropTypes.bool,
};

export default CartItem;
