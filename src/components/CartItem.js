import React from 'react';
import ProductQuantityBox from './ProductQuantityBox';
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
        <div className="pl-2">
          <p className="mb-3">SIZE</p>
          <h4 className="text-uppercase pb-3 pt-1">
            {size}
          </h4>
        </div>
        <div className="pl-2">
          <p className="mb-3">COLOR</p>
          <button className={`color color-${color.toLowerCase()}`}></button>
        </div>

        <div className="pl-2">
          <p className="mb-3">PRICE</p>
          ${item.product.price}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
