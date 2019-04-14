import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { connect } from 'react-redux';
import InputWrapper from '../components/template/Input';
import CartListing from '../components/cart/CartListing';
import Profile from '../components/template/Profile';
import { generateShoppingCartUniqueID, addItemToCart, getCartItems, updateCustomerAddress, getTax, createOrder, getCartTotal, chargeOrder } from '../services/api';
import Payment from '../components/Payment';
import Button from '../components/template/Button';
import Router from 'next/router';
import CartItemTable from '../components/cart/CartTable';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      loading: false,
      cartItems: [],
      cart_total: null
    }
  }

  componentDidMount() {
    this.getCartTotal();
  }

  updateProfile = (state) => {
    this.setState({
      loading: true
    })
    updateCustomerAddress(state).then((res) => {
      if(res.status === 200) {
        this.setState({
          loading: false,
          currentStep: 3
        })
      }
    })
  }

  addItem = (item, cart_id) => {
    for (let i = 0; i < item.quantity; i++) {
      let data = {
        cart_id: cart_id,
        product_id: item.id,
        attributes: item.attributes,
      }
      addItemToCart(data).then((res) => {
        if (res) {
          this.setState({
            currentStep: 2,
            loading: false
          })
        }
      })
    }
  }

  addToCart = () => {
    const { cart } = this.props;
    this.setState({
      loading: true
    })
    generateShoppingCartUniqueID().then((res) => {
      const cart_id = res.cart_id
      this.props.saveUniqueId(cart_id);
      cart.forEach((item) => {
        this.addItem(item, cart_id)
      })
    });
  }

  onToken = (token) => {
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
       if(!res.failure_code) {
         this.props.clearCart()
         this.setState({
            currentStep: 4,
         })
       }
     });
   }
 
   getCartTotal = async () => {
     const { cart_id } = this.props;
     const cart = await getCartTotal(cart_id);
     this.setState({
       cart_total: Number(cart.total_amount)
     })
   }
 

  renderForm() {
    const { currentStep, loading } = this.state;
    switch (currentStep) {
      case 1: {
        return (<div>
          <CartListing />
          <div className=" col-3 btn mt-3" >
            <Button text="BEGIN CHECKOUT" onClick={this.addToCart} loading={loading} />
          </div>
        </div>)
      }

      case 2: {
        return (
          <div>
            <Profile updateProfile={this.updateProfile} loading={this.state.loading} />
          </div>
        )
      }

      case 3: {
        return <Payment onToken={this.onToken} amount={this.state.cart_total} />
      }


      case 4: {
        return (
          <div>
            <div><img src="/static/rocket.png" /></div>
            <div>
              <h2>SUCCESS</h2>
              <p>Your items will be delivered shortly!</p>
              <button className="mt-4 btn" onClick={() => Router.push('/')}>BACK TO SHOP</button>
            </div>
          </div>
        )
      }
    }
  }


  render() {
    if (this.props.cart_id) {
      getCartItems(this.props.cart_id).then((res) => {
        this.setState({
          cartItems: res
        })
      })
    }
    const { orders } = this.props;
    return (
      <DefaultLayout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              {this.renderForm()}
            </div>
            {this.state.cartItems.length > 1 && <div className="col-6">
              <h3 className="mb-2">CONFIRMED CART ITEMS</h3>
              <CartItemTable cartItems={this.state.cartItems} />
            </div>}
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart.cartItems,
    cart_id: state.cart.cart_id,
    customer_id: state.customer.customer.customer_id,
    shipment_id: state.shipment.shipping_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUniqueId: (id) => dispatch({ type: 'SAVE_UNIQUE_CART_ID', id }),
    clearCart: () => dispatch({ type: 'CLEAR_CART_ITEMS'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);