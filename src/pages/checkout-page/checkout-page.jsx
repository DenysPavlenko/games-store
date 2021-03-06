/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import {
  hideCart,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from 'redux/cart/cart.actions';
import {
  selectCartItems,
  selectCartHidden,
  selectCartTotalCount,
} from 'redux/cart/cart.selectors';
// Components
import Container from 'grid/container/container';
import CartItem from 'components/cart-item/cart-item';
import CheckoutTable from 'components/checkout-table/checkout-table';
// Styles
import './checkout-page.sass';

export const CheckoutPage = ({
  cartItems,
  hideCart,
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
  totalCount,
}) => {
  if (!cartItems.length) {
    return <Redirect to="/" />;
  }

  return (
    <div className="checkout-page">
      <Container>
        <div className="checkout-page-wrap">
          <div className="checkout-page-cart">
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                hideCart={hideCart}
                removeItem={removeItemFromCart}
                addItem={addItemToCart}
                clearItem={clearItemFromCart}
                inverted
              />
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

CheckoutPage.defaultProps = {
  hideCart: () => {},
  removeItemFromCart: () => {},
  addItemToCart: () => {},
  clearItemFromCart: () => {},
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  hideCart: PropTypes.func,
  removeItemFromCart: PropTypes.func,
  addItemToCart: PropTypes.func,
  clearItemFromCart: PropTypes.func,
  totalCount: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
  cartItems: selectCartItems,
  totalCount: selectCartTotalCount,
});

const mapDispatchToProps = {
  hideCart,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
