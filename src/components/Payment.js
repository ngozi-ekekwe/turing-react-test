import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = (token) => {
   // FETCH TAX INFO
   

  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_NcwpaplBCuTL6I0THD44heRe"
        token={this.onToken}
        name="SHOPMATE"
        description="BEST BUY"
        currency="USD"
      />
    )
  }
}