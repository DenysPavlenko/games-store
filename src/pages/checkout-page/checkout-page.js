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
import CartEmpty from 'components/cart-empty/cart-empty.component';
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
          <CartEmpty inverted />
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
