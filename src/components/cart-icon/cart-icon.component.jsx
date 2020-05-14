import React from 'react';
import { connect } from 'react-redux';
// Redux actions
import { showCart } from 'redux/cart/cart.actions';
// Assets
import { ReactComponent as Cart } from 'assets/images/icons/cart.svg';
// Styles
import "./cart-icon.styles.sass";

const CartIcon = ({ showCart, cart: { cartItems } }) => {
  const cartItemsCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  return (
    <div className="cart-icon" onClick={showCart}>
      <div className="cart-icon-wrapper">
        <Cart />
        {cartItemsCount !== 0 && <div className="cart-icon-count">{cartItemsCount}</div>
        }
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    showCart: () => dispatch(showCart()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
