import React from 'react';

const ProductQuantityBox = ({
  reduceQuantity, increaseQuantity, quantity, classname
}) => (
  <div className={`product__quantity-box ${classname}`}>
      <button className={`btn product__quantity-counter ${classname}`} type="button" onClick={reduceQuantity}>
        -
      </button>
      <span className={`product__cart-items-count ${classname}`}>
        5
      </span>
      <button className={`btn product__quantity-counter ${classname}`} type="button" onClick={increaseQuantity}>
        +
      </button>
  </div>
);

export default ProductQuantityBox;
