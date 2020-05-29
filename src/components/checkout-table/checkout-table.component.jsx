import React from 'react';
// Components
import Typography from 'components/typography/typography.component'
import Button from 'components/button/button.component'
import StripePayment from 'components/stripe-payment/stripe-payment.component'
// Styles
import './checkout-table.styles.sass';

class CheckoutTable extends React.Component {
  state = {
    checked: false
  }
  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    const { checked } = this.state;
    const { total } = this.props;
    return (
      <div className="checkout-table">
        <div className="checkout-table-total">
          <Typography component="span" variant="h2" className="text-light mb-0">Total:</Typography>
          <Typography component="span" variant="h2" className="text-light mb-0">${total}</Typography>
        </div>

        <Typography component="p" className="checkout-table-policy text-light">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</Typography>

        <div className="checkout-table-terms">
          <input type="checkbox" id="terms" name="terms" onChange={this.handleCheck} />
          <label htmlFor="terms">
            <Typography component="span" variant="p" className="text-light mb-0">I have read and agree to the website <a href="http://example.com" className="text-accent">terms and conditions</a></Typography>
          </label>
        </div>

        <Typography component="p" className="checkout-table-policy text-light"></Typography>

        <StripePayment price={total}>
          <Button isDisabled={!checked} disabled={!checked}>Place order</Button>
        </StripePayment>
      </div >
    );
  }
};

export default CheckoutTable;
