import React from 'react'
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getTax, createOrder, getCartTotal, chargeOrder } from '../services/api';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div className="mb-2">
        <img src="/static/card.png" />
        </div>
        <StripeCheckout
        stripeKey="pk_test_NcwpaplBCuTL6I0THD44heRe"
        token={this.props.onToken}
        name="SHOPMATE"
        amount={this.props.amount * 100}
        description="BEST BUY"
        currency="USD"
      />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cart_id: state.cart.cart_id,
    customer_id: state.customer.customer.customer_id,
    shipment_id: state.shipment.shipping_id
  };
}

export default connect(mapStateToProps, null)(Checkout);
