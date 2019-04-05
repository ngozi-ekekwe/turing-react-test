import React from 'react';
import { connect } from 'react-redux';
import CartListing from './CartListing';
import Button from './Button';
import { Link } from '../routes';

const CartWidget = ({
  toggleCartWidget,
  toggleCartWidgetHandler,
}) => (
  <div className={toggleCartWidget ? 'overlay enabled' : 'overlay'}>
    <div className="sidebar__overlay" onClick={toggleCartWidgetHandler} />
    <div id="menu-cart" className={toggleCartWidget ? 'sidebar open' : 'sidebar'}>
      <div className="cart-widget">
        <CartListing toggleCartWidgetHandler={toggleCartWidgetHandler} />
      </div>

      <div className="cart__cta">
        {/* <Link to="/checkout">
          <Button
            text="CHECKOUT"
            onClick={() => true}
          >  
          </Button>
        </Link> */}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  cart: [],
});

export default connect(mapStateToProps, null)(CartWidget);
