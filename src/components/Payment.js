import React from 'react'
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getTax, createOrder, getCartTotal, chargeOrder } from '../services/api';

class Checkout extends React.Component {

  componentDidMount() {
    this.getCartTotal();
  }

  state = {
    cart_total: null
  }
  onToken = (token) => {
   // FETCH TAX INFO
   getTax().then((res) => {
     const tax_id = res[0].tax_id;
     const token_id = token.id;
     this.createOrder(token_id, tax_id)
   });
  };

  createOrder = (stripeToken, tax_id) => {
    const { cart_id, customer_id, shipping_id } = this.props;
    const token = localStorage.getItem('user-key');
    let data = {
      customer_id,
      shipping_id,
      cart_id,
      tax_id
    }
    createOrder(data).then((res) => {
      if(!res.error) {
        this.chargeOrder(stripeToken, res.order_id)
      }
    })
    
  }

  chargeOrder = (stripeToken, order_id) => {
    const {cart_total } = this.state;
    const data = {
      stripeToken,
      order_id,
      description: 'payment for order',
      amount: cart_total * 100,
    }
    chargeOrder(data).then((res) => {
      console.log(res, 'this is res')
    });
  }

  getCartTotal = async () => {
    const { cart_id } = this.props;
    const cart = await getCartTotal(cart_id);
    console.log(cart)
    this.setState({
      cart_total: Number(cart.total_amount)
    })
  }

  render() {
    let { cart_total } = this.state;
    // console.log(art_total)
    return (
      <StripeCheckout
        stripeKey="pk_test_NcwpaplBCuTL6I0THD44heRe"
        token={this.onToken}
        name="SHOPMATE"
        amount={this.state.cart_total * 100}
        description="BEST BUY"
        currency="USD"
      />
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

const mapDispatchToProps = (dispatch) => {
  return ({
    // getProductsByDepartment: (departmentId) => {
    //   return (dispatch({type: 'GET_PRODUCTS_BY_DEPARTMENT', departmentId}))
    // },
    // setProductPage: (page) => dispatch({type: 'SET_PAGE',  page}),
    // getCategoriesByDepartment: (departmentid) => dispatch({ type: 'GET_CATEGORIES_BY_DEPARTMENT', departmentid})
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
