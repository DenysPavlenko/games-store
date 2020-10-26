import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
// Redux
import { clearCart } from 'redux/cart/cart.actions';
import { selectCartItems } from 'redux/cart/cart.selectors';
// Components
import CheckoutForm from 'components/checkout-form/checkout-form';
import Modal from 'components/modal/modal';
import Typography from 'components/typography/typography';
// Styles
import './stripe-payment.sass';

const stripePromise = loadStripe("pk_test_hISzKXXyR5riFGZeaXvHWeQU00QUWFivUZ");

class StripePayment extends React.Component {
  state = {
    showModal: false
  }

  static defaultProps = {
    clearCart: () => { }
  }

  static propTypes = {
    cartItems: PropTypes.array.isRequired,
    clearCart: PropTypes.func,
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
    const { showModal } = this.state;
    return (
      <Elements stripe={stripePromise} >
        <CheckoutForm isSuccess={this.isSuccess} />
        <Modal hidden={!showModal} closeModal={this.closeModal}>
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
