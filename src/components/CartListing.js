import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoSSR from 'react-no-ssr';
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity, updateCartTotal, removeItemFromCart,
} from '../redux/actions/cart';
import CartItem from './CartItem';


class CartListing extends Component {
  
  increaseQuantity(item) {
    const { dispatch } = this.props;
    return dispatch(incrementCartItemQuantity(item));
  }

  reduceQuantity(item) {
    const { dispatch } = this.props;
    return dispatch(decrementCartItemQuantity(item));
  }

  removeItemFromCart(item) {
    const { dispatch } = this.props;
    return dispatch(removeItemFromCart(item));
  }

  calculateItemTotal(item) {
    return item.quantity * item.price;
  }

  calculateCartTotal(cart, previous = false) {
    const total = cart.reduce((totalValue, item) => totalValue + this.calculateItemTotal(item), 0);
    if (!previous) {
      const { dispatch } = this.props;
      dispatch(updateCartTotal(total));
    }
    return total;
  }

  loopOverCartItems(cart, previous = false) {
    return (
      cart.map((item) => (
        <CartItem
          key={`item-${item.name}`}
          previous={previous}
          item={item}
          increasseQuantityOnClick={() => !previous && this.increaseQuantity(item)}
          decreasseQuantityOnClick={() => !previous && this.reduceQuantity(item)}
          removeItemFromCart={() => !previous && this.removeItemFromCart(item)}
          calculateItemTotal={this.calculateItemTotal(item)}
        />
      ))
    );
  }

  renderCartItems(cart, previous = false) {
    if (cart.length > 0) {
      return (
        <div key="empty-cart">{this.loopOverCartItems(cart, previous)}</div>
      );
    }
    const { checkout } = this.props;
  }

  render() {
    let { cart } = this.props;
    const { previousCart, allowPreviousCart } = this.props;

    // Remap as previous cart when permitted
    let previous;
    if (allowPreviousCart && previousCart) {
      previous = true;
      cart = previousCart;
    }

    return (
      <NoSSR>
        <div>
          <p className="number-cart-items">{`You have ${cart.length} item${cart.length > 1 ? 's' : ''} in your cart`}</p>
          <div className="cart__list-wrapper">
            { cart && this.renderCartItems(cart, previous) }
          </div>
          <div className="cart__footer">
            <div className="cart-col">
              <p className="cart__footer--total-price">
                {/* {`Total $${parseFloat(this.calculateCartTotal(cart, previous)).toFixed(2)}`} */}
              </p>
            </div>
          </div>
        </div>
      </NoSSR>
    );
  }
}

const mapStateToProps = (state, props) => ({
  cart: state.cart.cartItems
});

export default connect(mapStateToProps, null)(CartListing);
