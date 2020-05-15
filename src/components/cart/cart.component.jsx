import React from 'react';
import { connect } from 'react-redux';
// Redux actions
import { hideCart, addItemToCart, removeItemFromCart, clearItemFromCart } from 'redux/cart/cart.actions';
// Components
import Modal from 'components/modal/modal.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
import CartItem from 'components/cart-item/cart-item.component';
// Styles
import './cart.styles.sass'
// Assets
import { ReactComponent as CartIcon } from 'assets/images/icons/cart.svg';

const Cart = ({ cart: { hidden, cartItems }, hideCart, ...otherProps }) => {
  return (
    <Modal closeModal={hideCart} hidden={hidden}>
      <div className="cart">
        {cartItems.length === 0 ?
          <CartEmpty />
          :
          <CartContent cartItems={cartItems} hideCart={hideCart} {...otherProps} />
        }
      </div>
    </Modal>
  );
};

const CartEmpty = () => (
  <div className="cart-empty">
    <CartIcon />
    <Typography component="span" variant="h2" className="text-dark mb-0">Your Cart is empty</Typography>
  </div>
)

const CartContent = ({ cartItems, hideCart, addItemToCart, removeItemFromCart, clearItemFromCart }) => {
  const totalCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
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
          <Button btnLarge>Go to checkout</Button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    hideCart: () => dispatch(hideCart()),
    addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
    removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem)),
    clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);