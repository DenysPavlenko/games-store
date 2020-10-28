import React from 'react';
// Styles
import './cart-item-placeholder.sass';

const CartItemPlaceholder = () => {
  return (
    <div className="cart-item-placeholder">
      <div className="cart-item-placeholder-image"></div>
      <div className="cart-item-placeholder-content">
        <div className="cart-item-placeholder-content-left">
          <div className="cart-item-placeholder-title"></div>
          <div className="cart-item-placeholder-price"></div>
          <div className="cart-item-placeholder-control">
            <button className="cart-item-placeholder-control-item"></button>
            <button className="cart-item-placeholder-control-item"></button>
            <button className="cart-item-placeholder-control-item"></button>
          </div>
        </div>
        <div className="cart-item-placeholder-total">
          <div className="cart-item-placeholder-total-title"></div>
          <div className="cart-item-placeholder-total-price"></div>
        </div>
      </div>
    </div>
  );
};

export default CartItemPlaceholder;
