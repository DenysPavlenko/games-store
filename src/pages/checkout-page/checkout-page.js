import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { hideCart, addItemToCart, removeItemFromCart, clearItemFromCart } from 'redux/cart/cart.actions';
import { selectCartItems, selectCartHidden, selectCartTotalCount } from 'redux/cart/cart.selectors';
// Components
import Container from 'components/container/container.component';
import CartItem from 'components/cart-item/cart-item.component';
import CheckoutTable from 'components/checkout-table/checkout-table.component';
// Styles
import './checkout-page.sass';

const CheckoutPage = ({ cartItems, hideCart, removeItemFromCart, addItemToCart, clearItemFromCart, totalCount }) => {
  return (
    <div className="checkout-page">
      <Container>
        <div className="checkout-page-wrap">
          <div className="checkout-page-cart">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} hideCart={hideCart} removeItem={removeItemFromCart} addItem={addItemToCart} clearItem={clearItemFromCart} inverted></CartItem>
            ))}
          </div>
          <div className="checkout-page-totals">
            <CheckoutTable total={totalCount} />
          </div>
        </div>
      </Container>
    </div>
  );
};

CheckoutPage.propTypes = {
  hideCart: () => { },
  removeItemFromCart: () => { },
  addItemToCart: () => { },
  clearItemFromCart: () => { },
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  hideCart: PropTypes.func,
  removeItemFromCart: PropTypes.func,
  addItemToCart: PropTypes.func,
  clearItemFromCart: PropTypes.func,
  totalCount: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
  cartItems: selectCartItems,
  totalCount: selectCartTotalCount
});

const mapDispatchToProps = dispatch => ({
  hideCart: () => dispatch(hideCart()),
  addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
  removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem)),
  clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
