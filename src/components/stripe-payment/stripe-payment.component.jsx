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
// Styles
import './stripe-payment.styles.sass';

const stripePromise = loadStripe("pk_test_hISzKXXyR5riFGZeaXvHWeQU00QUWFivUZ");

class StripePayment extends React.Component {
  state = {
    showModal: false
  }
  isSuccess = () => {
    this.setState({ showModal: true });
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
        <Modal hidden={!this.state.showModal} closeModal={this.closeModal}>
          <div className="stripe-payment-modal-wrap">
            <Typography component="h3" variant="h2" className="text-dark text-center">Thank you for your order!</Typography>
            <Typography component="h6" className="text-dark text-center mb-0">We will send you a nitification within 5 days when it ships. <br />If you have any questions feel free to contact us</Typography>
          </div>
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
