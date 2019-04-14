import React from 'react';
import ProductQuantityBox from '../product/ProductQuantityBox';
import CartArttributes from './CartArttributes';
const imageDirectory = process.env.IMAGE_DIRECTORY;

const CartItem = ({
  item, increasseQuantityOnClick, decreasseQuantityOnClick,
  calculateItemTotal, removeItemFromCart, previous,
}) => {
  const attribute = item && item.attributes.split(",");
  const color = attribute[1]
  const size = attribute[0]
  return (
    <div className="cart__item">
      <div className="d-flex justify-content-between">
        <img src={`${imageDirectory}${item.product.thumbnail}`} />
        <div className="cart__item--details">
          <h3 className="mb-3">
            {item.product.name.toUpperCase()}
          </h3>
          <ProductQuantityBox
            previous={previous}
            quantity={item.quantity}
            increaseQuantity={increasseQuantityOnClick}
            reduceQuantity={decreasseQuantityOnClick}
            classname="cart"
          />
          {!previous && (
            <button className="remove__button" type="submit" onClick={removeItemFromCart}>
              Remove
            </button>
          )}
        </div>
        <CartArttributes title="SIZE" attribute ={size} type="size"/>
        <CartArttributes title="COLOR" attribute ={color} type="color"/>
        <CartArttributes title="PRICE" attribute ={item.product.price} type="price"/>
      </div>
    </div>
  );
}

export default CartItem;
