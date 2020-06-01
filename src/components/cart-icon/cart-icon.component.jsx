import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { showCart } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';
// Assets
import { ReactComponent as Cart } from 'assets/images/icons/cart.svg';
// Styles
import "./cart-icon.styles.sass";

const CartIcon = ({ showCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={showCart}>
      <div className="cart-icon-wrapper">
        <Cart />
        {itemCount !== 0 && <div className="cart-icon-count">{itemCount}</div>}
      </div>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
  showCart: () => dispatch(showCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
