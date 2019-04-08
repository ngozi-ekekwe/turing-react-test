import React, { Component } from 'react';

class ProductQuantityBox extends Component {

  render() {
    const { quantity , reduceQuantity, increaseQuantity} = this.props
    return (
      <div className="product__quantity-box">
        <button className="product__quantity-counter" type="button" onClick={reduceQuantity}>
          -
      </button>
        <span className="product__cart-items-count">
          {quantity}
      </span>
        <button className="product__quantity-counter" type="button" onClick={increaseQuantity}>
          +
      </button>
      </div>
    )
  }
}
export default ProductQuantityBox;
