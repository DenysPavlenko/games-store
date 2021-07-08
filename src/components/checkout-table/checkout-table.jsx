import React from 'react';
import PropTypes from 'prop-types';
// Components
import Typography from 'components/typography/typography';
import StripePayment from 'components/stripe-payment/stripe-payment';
// Styles
import './checkout-table.sass';

const CheckoutTable = ({ total }) => (
  <div className="checkout-table">
    <div className="checkout-table-total">
      <Typography component="span" variant="h2" className="text-light mb-0">
        Total:
      </Typography>
      <Typography component="span" variant="h2" className="text-light mb-0">
        ${total}
      </Typography>
    </div>
    <StripePayment />
  </div>
);

CheckoutTable.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CheckoutTable;
