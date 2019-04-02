import React from 'react';
import NoSSR from 'react-no-ssr';
import { ShoppingCart } from '../icons';

const ShoppingCartIcon = ({ toggleCartWidgetHandler, cart=[] }) => (
  <div className="header__shopping-cart">
    <NoSSR>
      {cart && (
        <span className="shopping-cart__number-of-items">
          {cart.length}
        </span>
      )}
    </NoSSR>
    <button
      type="button"
      className="shopping-cart__icon"
      onClick={toggleCartWidgetHandler}
    >
      <ShoppingCart />
    </button>
  </div>
);

export default ShoppingCartIcon;
