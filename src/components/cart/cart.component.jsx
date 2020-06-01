import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { hideCart, addItemToCart, removeItemFromCart, clearItemFromCart } from 'redux/cart/cart.actions';
import { selectCartItems, selectCartHidden, selectCartTotalCount } from 'redux/cart/cart.selectors';
// Components
import Modal from 'components/modal/modal.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
import CartItem from 'components/cart-item/cart-item.component';
import CartEmpty from 'components/cart-empty/cart-empty.component';
// Styles
import './cart.styles.sass'

const Cart = ({ cartHidden, cartItems, hideCart, ...otherProps }) => {
  return (
    <Modal closeModal={hideCart} hidden={cartHidden}>
      <div className="cart">
        {cartItems.length === 0 ?
          <CartEmpty centered/>
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
