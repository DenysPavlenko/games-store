/* eslint-disable no-shadow */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
import Modal from 'components/modal/modal';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
import CartItem from 'components/cart-item/cart-item';
import CartEmpty from 'components/cart-empty/cart-empty';
// Styles
import './cart.sass';

export const Cart = ({
  cartHidden,
  cartItems,
  hideCart,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  totalCount,
  history,
}) => (
  <Modal closeModal={hideCart} hidden={cartHidden}>
    <div className="cart">
      {cartItems.length === 0 ? (
        <CartEmpty centered />
      ) : (
        <div className="cart-content">
          <Typography
            component="span"
            variant="h1"
            className="cart-heading text-dark"
          >
            Your Cart
          </Typography>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              hideCart={hideCart}
              removeItem={removeItemFromCart}
              addItem={addItemToCart}
              clearItem={clearItemFromCart}
            />
          ))}
          <div className="cart-footer">
            <div className="cart-footer-left">
              <Button
                className="cart-footer-left-button"
                btnBorderedLg
                onClick={hideCart}
              >
                Continue shopping
              </Button>
            </div>
            <div className="cart-footer-right">
              <div className="cart-footer-right-title">
                <Typography
                  component="span"
                  variant="h2"
                  className="text-dark mb-0"
                >
                  Total:
                </Typography>
                <Typography
                  component="span"
                  variant="h2"
                  className="text-dark mb-0"
                >
                  ${totalCount}
                </Typography>
              </div>
              <Button
                btnLarge
                onClick={() => {
                  hideCart();
                  history.push('/checkout');
                }}
              >
                Go to checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  </Modal>
);

Cart.propTypes = {
  cartHidden: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
  hideCart: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
