import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Redux actions
import { hideCart, addItemToCart, removeItemFromCart, clearItemFromCart } from 'redux/cart/cart.actions';
// Components
import Typography from 'components/typography/typography.component';
// Styles
import './cart.styles.sass'
// Assets
import { ReactComponent as CartIcon } from 'assets/images/icons/cart.svg';
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';

const Cart = ({ cart: { hidden, cartItems }, hideCart, addItemToCart, removeItemFromCart, clearItemFromCart }) => {
  return (
    <div className={`cart ${hidden ? 'cart-hidden' : ''}`}>
      <div onClick={hideCart} className="cart-overlay"></div>
      <div className="cart-wrapper">
        <div onClick={hideCart} className="cart-close"><CloseIcon /></div>
        {cartItems.length === 0 ?
          <div className="cart-empty">
            <CartIcon />
            <Typography component="h1" className="text-dark mb-0">Your Cart is empty</Typography>
          </div>
          :
          <CartItems hideCart={hideCart} cartItems={cartItems} removeItem={removeItemFromCart} addItem={addItemToCart} clearItem={clearItemFromCart} />
        }
      </div>
    </div >
  );
};

const CartItems = ({ cartItems, hideCart, removeItem, addItem, clearItem }) => (
  <>
    {cartItems.map((cartItem) => {
      const { id, image, name, price, quantity } = cartItem;
      return (
        <div className="cart-item" key={id}>
          <div className="cart-item-image">
            <Link to={`/product/${id}`} onClick={hideCart}>
              <figure style={{ backgroundImage: `url(${image})` }}></figure>
            </Link>
          </div>
          <div className="cart-item-title">
            <Link to={`/product/${id}`} onClick={hideCart}>
              <Typography component="h2" className="text-dark">{name}</Typography>
            </Link>
            <Typography component="h5" className="text-dark">Price: ${price}</Typography>
            <div className="cart-item-control">
              <button className="cart-item-control-item h3" disabled={quantity === 1 && true} onClick={() => removeItem(cartItem)}>-</button>
              <button className="cart-item-control-item h3" onClick={() => addItem(cartItem)}>+</button>
              <button className="cart-item-control-item h3" onClick={() => clearItem(cartItem)}><CloseIcon /></button>
            </div>
          </div>
          <div className="cart-item-price">
            <Typography component="h5" className="text-dark">{quantity} {quantity === 1 ? `Copy` : 'Copies'} </Typography>
            <Typography component="h2" className="text-dark">${price * quantity}</Typography>
          </div>
        </div>
      )
    })}
  </>
)

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