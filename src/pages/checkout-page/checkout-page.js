import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { hideCart, addItemToCart, removeItemFromCart, clearItemFromCart } from 'redux/cart/cart.actions';
import { selectCartItems, selectCartHidden, selectCartTotalCount } from 'redux/cart/cart.selectors';
// Components
import Container from 'components/container/container.component'
import CartItem from 'components/cart-item/cart-item.component'
import CheckoutTable from 'components/checkout-table/checkout-table.component'
// Styles
import './checkout-page.sass';

const CheckoutPage = ({ ...props }) => {
  const { cartItems } = props;
  return (
    <div className="checkout-page">
      <Container>
        {cartItems.length > 0 ?
          <CheckoutContent {...props} />
          :
          <CheckoutEmpty />
        }
      </Container>
    </div>
  );
};

const CheckoutContent = ({ cartItems, hideCart, removeItemFromCart, addItemToCart, clearItemFromCart, totalCount }) => (
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
)

const CheckoutEmpty = () => (
  <div className="checkout-page-emty">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, nulla ex. Distinctio omnis cupiditate, tempore ipsum rem laudantium possimus a corporis excepturi molestiae expedita assumenda voluptatibus, libero, repellendus vitae commodi!
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
  cartItems: selectCartItems,
  totalCount: selectCartTotalCount
})
const mapDispatchToProps = dispatch => {
  return {
    hideCart: () => dispatch(hideCart()),
    addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
    removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem)),
    clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
