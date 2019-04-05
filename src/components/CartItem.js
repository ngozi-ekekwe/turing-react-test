import React from 'react';
// import ProductBottle from '../template/ProductBottle';
import ProductQuantityBox from './ProductQuantityBox';

const CartItem = ({
  item, increasseQuantityOnClick, decreasseQuantityOnClick,
  calculateItemTotal, removeItemFromCart, previous,
}) => (
  <div className="cart__item">
    <div className="d-flex">
      {/* <ProductBottle item={item} /> */}
      <div className="cart__item--details">
        <p>
          {item.name}
        </p>
        <h4 className="text-uppercase pb-3 pt-1">
          {item.functionalityText}
        </h4>

        <ProductQuantityBox
          previous={previous}
          quantity={item.quantity}
          increaseQuantity={increasseQuantityOnClick}
          reduceQuantity={decreasseQuantityOnClick}
          classname="cart"
        />
        {!previous && (
          <button className="btn remove__button" type="submit" onClick={removeItemFromCart}>
            Remove
          </button>
        )}
      </div>
    </div>
    <div className="cart__purchase">
      { item.checkOutChoice !== 'oneTime' && item.has_vip_pricing
        ? (
          <div>
            <div className="cart__purchase-discount-price">
              <s>
                {`$${parseFloat(item.regularPrice * item.quantity).toFixed(2)}`}
              </s>
            </div>
            <p className="cart__purchase-VIP-price">
              {`$${parseFloat(calculateItemTotal).toFixed(2)} VIP `}
            </p>
          </div>
        )
        : (
          <p className="cart__purchase-price">
            {`$${parseFloat(calculateItemTotal).toFixed(2)} `}
          </p>
        )
      }
      <p className="cart__purchase-type">
        {`${item.checkOutChoice === 'vip' ? 'VIP' : 'One Time'} Purchase`}
      </p>
    </div>
  </div>
);

export default CartItem;
