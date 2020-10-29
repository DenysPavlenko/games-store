import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { hideCart, addItemToCart, removeItemFromCart, clearItemFromCart } from 'redux/cart/cart.actions';
import { selectCartItems, selectCartHidden, selectCartTotalCount } from 'redux/cart/cart.selectors';
// Components
import Modal from 'components/modal/modal';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
import CartItem from 'components/cart-item/cart-item';
import CartEmpty from 'components/cart-empty/cart-empty';
// Styles
import './cart.sass';

const Cart = ({ cartHidden, cartItems, hideCart, ...otherProps }) => {
  return (
    <Modal closeModal={hideCart} hidden={cartHidden}>
      <div className="cart">
        {cartItems.length === 0 ?
          <CartEmpty centered />
          :
          <CartContent cartItems={cartItems} hideCart={hideCart} {...otherProps} />
        }
      </div>
    </Modal>
  );
};

const CartContent = ({ cartItems, hideCart, addItemToCart, removeItemFromCart, clearItemFromCart, totalCount, history }) => {
  return (
    <>
      <Typography component="span" variant="h1" className="cart-heading text-dark">Your Cart</Typography>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} hideCart={hideCart} removeItem={removeItemFromCart} addItem={addItemToCart} clearItem={clearItemFromCart}></CartItem>
      ))}
      <div className="cart-footer">
        <div className="cart-footer-left">
          <Button className="cart-footer-left-button" btnBorderedLg onClick={hideCart}>Continue shopping</Button>
        </div>
        <div className="cart-footer-right">
          <div className="cart-footer-right-title">
            <Typography component="span" variant="h2" className="text-dark mb-0">Total:</Typography>
            <Typography component="span" variant="h2" className="text-dark mb-0">${totalCount}</Typography>
          </div>
          <Button btnLarge onClick={() => {
            hideCart();
            history.push('/checkout')
          }}>Go to checkout</Button>
        </div>
      </div>
    </>
  )
}

Cart.defaultProps = {
  hideCart: () => { },
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
};

Cart.propTypes = {
  cartHidden: PropTypes.bool,
  cartItems: PropTypes.array,
  hideCart: PropTypes.func,
  addItemToCart: PropTypes.func,
  removeItemFromCart: PropTypes.func,
  clearItemFromCart: PropTypes.func,
  totalCount: PropTypes.number
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));