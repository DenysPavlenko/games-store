import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// Redux
import { clearCart } from 'redux/cart/cart.actions';
import { selectCartItems } from 'redux/cart/cart.selectors';
// Components
import CheckoutForm from 'components/checkout-form/checkout-form.component';
import Modal from 'components/modal/modal.component';
import Typography from 'components/typography/typography.component';

const stripePromise = loadStripe("pk_test_hISzKXXyR5riFGZeaXvHWeQU00QUWFivUZ");

class StripePayment extends React.Component {
  state = {
    showModal: false
  }
  isSuccess = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    const { cartItems, clearCart } = this.props;
    clearCart(cartItems);
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Elements stripe={stripePromise} >
        <CheckoutForm isSuccess={this.isSuccess} />
        <Modal className="stripe-modal" hidden={!this.state.showModal} closeModal={this.closeModal}>
          <Typography component="h3" variant="h2" className="text-dark text-center mb-0">Thank you – your order is confirmed</Typography>
        </Modal>
      </Elements>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  clearCart: (cartItem) => dispatch(clearCart(cartItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StripePayment);
