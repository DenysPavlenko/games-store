import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Helpers
import validateInput from 'helpers/validate-input';
// Redux
import { selectUser } from 'redux/user/user.selectors';
// Components
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import Input from 'components/input/input';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
// Styles
import './checkout-form.sass';

const initialState = {
  name: '',
  email: '',
  address: '',
  nameInvalid: false,
  emailInvalid: false,
  addressInvalid: false,
  cardInvalid: false,
  terms: false,
  formErrors: false,
  isLoading: false
};

class CheckoutForm extends Component {
  state = {
    ...initialState,
  }

  static defaultProps = {
    isSuccess: () => { }
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    isSuccess: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { user: { currentUser } } = this.props;
    if (currentUser) {
      this.setState({
        name: currentUser.displayName,
        email: currentUser.email
      });
    }
  }
  componentDidUpdate(prevProps) {
    const { user: { currentUser } } = this.props;
    if (prevProps.user.currentUser !== currentUser && currentUser) {
      this.setState({
        name: currentUser.displayName,
        email: currentUser.email
      });
    }
    else if (prevProps.user.currentUser !== currentUser && !currentUser) {
      this.setState({
        name: '',
        email: ''
      });
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { stripe, elements, isSuccess } = this.props;
    const { name, email, address, terms } = this.state;
    const validatedInputs = {
      nameInvalid: !validateInput('text', name),
      emailInvalid: !validateInput('email', email),
      addressInvalid: !validateInput('text', address),
      formErrors: !validateInput('text', name) || !validateInput('email', email) || !validateInput('text', address)
    }

    this.setState({
      ...validatedInputs
    });

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    this.setState({ cardInvalid: !cardElement._complete });
    if (!cardElement._complete || validatedInputs.formErrors || !terms) {
      return;
    }
    this.setState({ isLoading: true });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: { name, email, address }
    });

    if (error) {
      this.setState({ isLoading: false })
      console.log('[Error]', error);
    } else {
      this.setState({ ...initialState });
      cardElement.clear();
      isSuccess();
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  handleInput = event => {
    const { name, type, value } = event.target;
    const { formErrors } = this.state;
    this.setState({
      [name]: value,
      [`${name}Invalid`]: formErrors && !validateInput(type, value),
    })
  }

  handleCheck = event => {
    this.setState({ terms: event.target.checked })
  }

  render() {
    const { stripe } = this.props;
    const { isLoading, name, email, address, nameInvalid, emailInvalid, addressInvalid, cardInvalid, terms } = this.state;
    const cardElementOpts = {
      style: {
        base: {
          fontSize: '14px',
          color: '#ffffff',
          '::placeholder': {
            color: '#6a6a6a',
          },
        },
        invalid: {
          color: '#c31011',
          iconColor: '#c31011',
        },
      },
    };

    return (
      <form className="checkout-form" onSubmit={this.handleSubmit} noValidate>
        <Input type="text" name="name" value={name} onChange={this.handleInput} invalid={nameInvalid} className="checkout-form-input" placeholder="Name" />
        <Input type="email" name="email" value={email} onChange={this.handleInput} invalid={emailInvalid} className="checkout-form-input" placeholder="Email" />
        <Input type="text" name="address" value={address} onChange={this.handleInput} invalid={addressInvalid} className="checkout-form-input" placeholder="Address" />
        <div className={`checkout-form-input checkout-form-card ${cardInvalid && 'checkout-form-card-invalid'}`}>
          <CardElement options={cardElementOpts} onChange={event => {
            this.setState({ cardInvalid: event.error });
          }} />
        </div>
        <Typography component="span" variant="p" className="text-muted">Test card: <span className="text-danger">4242424242424242, 1231, 111, 1111</span></Typography>
        <div className="checkout-form-terms">
          <Input className="checkout-form-terms-input" type="checkbox" checked={terms} name="terms" id="terms" onChange={this.handleCheck} />
          <label htmlFor="terms">
            <Typography component="span" variant="p" className="text-light mb-0">I have read and agree to the website <a href="http://example.com" className="text-accent">terms and conditions</a></Typography>
          </label>
        </div>
        <Button type="submit" isDisabled={!stripe || !terms} isLoading={isLoading}>Place order</Button>
      </form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)((props) => (
  <ElementsConsumer>
    {({ elements, stripe }) => (
      <CheckoutForm {...props} elements={elements} stripe={stripe} />
    )}
  </ElementsConsumer>
));