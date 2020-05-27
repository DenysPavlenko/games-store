import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
// Components
import Typography from 'components/typography/typography.component';
// Styles
import './cart-item.styles.sass'
// Assets
import { ReactComponent as TrashIcon } from 'assets/images/icons/trash.svg';

const CartItem = ({ cartItem, hideCart, addItem, removeItem, clearItem, className, inverted }) => {
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
          <figure style={{ backgroundImage: `url(${image})` }}></figure>
        </Link>
      </div>
      <div className="cart-item-title">
        <Typography component="h3" className="text-dark">
          <Link to={`/product/${id}`} onClick={hideCart}>{name}</Link>
        </Typography>
        <Typography component="h5" className="text-dark">Price: ${price}</Typography>
        <div className="cart-item-control">
          <button className="cart-item-control-item h3" disabled={quantity === 1 && true} onClick={() => removeItem(cartItem)}>-</button>
          <button className="cart-item-control-item h3" onClick={() => addItem(cartItem)}>+</button>
          <button className="cart-item-control-item h3" onClick={() => clearItem(cartItem)}><TrashIcon /></button>
        </div>
      </div>
      <div className="cart-item-total">
        <Typography component="h5" className="text-dark">{quantity} {quantity === 1 ? `Copy` : 'Copies'} </Typography>
        <Typography component="h2" className="text-dark">${price * quantity}</Typography>
      </div>
    </div>
  );
};

export default CartItem;