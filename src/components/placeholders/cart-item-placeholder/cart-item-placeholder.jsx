import React from 'react';
// Styles
import './cart-item-placeholder.sass';

const CartItemPlaceholder = () => (
  <div className="cart-item-placeholder">
    <div className="cart-item-placeholder-image" />
    <div className="cart-item-placeholder-content">
      <div className="cart-item-placeholder-content-left">
        <div className="cart-item-placeholder-title" />
        <div className="cart-item-placeholder-price" />
        <div className="cart-item-placeholder-control">
          <div className="cart-item-placeholder-control-item" />
          <div className="cart-item-placeholder-control-item" />
          <div className="cart-item-placeholder-control-item" />
        </div>
      </div>
      <div className="cart-item-placeholder-total">
        <div className="cart-item-placeholder-total-title" />
        <div className="cart-item-placeholder-total-price" />
      </div>
    </div>
  </div>
);

export default CartItemPlaceholder;
