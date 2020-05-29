import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripePayment = ({ price, children }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_hISzKXXyR5riFGZeaXvHWeQU00QUWFivUZ';
  const onToken = token => {
    console.log('token:', token);
    alert('Payment Successfull');
  }

  return (
    <div>
      <StripeCheckout
        name="Games store"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amout={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
      >
        {children}
      </StripeCheckout>
    </div>
  );
};

export default StripePayment;
