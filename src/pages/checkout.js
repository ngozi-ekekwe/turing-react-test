import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { connect } from 'react-redux';
import InputWrapper from '../components/template/Input';
import CartListing from '../components/cart/CartListing';
import Profile from '../components/template/Profile';
import { generateShoppingCartUniqueID, addItemToCart } from '../services/api';
import Payment from '../components/Payment'; 


class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    }
  }

  componentDidMount() {
  }

  addItem = (item, cart_id) => {
    for(let i =0; i< item.quantity; i++) {
      let data = {
        cart_id: cart_id,
        product_id: item.id,
        attributes: item.attributes,
      }
      addItemToCart(data).then((res) => {
        console.log(res, 'this is res')
      })
    }
  }

  addToCart = () => {
    const { cart } = this.props;
    generateShoppingCartUniqueID().then((res) => {
      const cart_id = res.cart_id
      this.props.saveUniqueId(cart_id);
      cart.forEach((item) => {
        this.addItem(item, cart_id)
        })
    });
  }

  renderForm() {
    const { currentStep } = this.state;
    switch(currentStep) {
      // case 1: {
      //   return (<div>
      //     <CartListing />
      //     <button className="btn mt-3" onClick={this.addToCart}>BEGIN CHECKOUT</button>
      //   </div>)
      // }

      // case 2 : {
      //   return <Profile />
      // }

      case 1: {
        return <Payment />
      }

      case 4: {
        return 'success'
      }
    }
  }

  moveToNextStep = () => {
    this.setState({
      currentStep: this.state.currentStep + 1
    })
  }

  
  render() {
    const { orders} = this.props;
    return (
      <DefaultLayout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-7">
              {this.renderForm()}
              <div>
                {/* <button className="btn mt-3" onClick={this.moveToNextStep}>CONTINUE</button> */}
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart.cartItems,
    cart_id: state.cart.cart_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUniqueId: (id) => dispatch({type: 'SAVE_UNIQUE_CART_ID', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);