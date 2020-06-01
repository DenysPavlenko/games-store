import React from 'react';
// Components
import Typography from 'components/typography/typography.component';
import StripePayment from 'components/stripe-payment/stripe-payment.component';
// Styles
import './checkout-table.styles.sass';

const CheckoutTable = ({ total }) => {
  return (
    <div className="checkout-table">
      <div className="checkout-table-total">
        <Typography component="span" variant="h2" className="text-light mb-0">Total:</Typography>
        <Typography component="span" variant="h2" className="text-light mb-0">${total}</Typography>
      </div>
      <StripePayment />
    </div >
  );
};

export default CheckoutTable;
