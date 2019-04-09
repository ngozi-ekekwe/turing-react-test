import React from 'react';
import { connect } from 'react-redux';
import CartListing from './CartListing';
import Button from '../template/Button';
import { Link } from '../../routes';

const CartWidget = ({
  toggleCartWidget,
  toggleCartWidgetHandler,
  customer
}) => {
  return (
    <div className={toggleCartWidget ? 'overlay enabled' : 'overlay'}>
      <div className="sidebar__overlay" onClick={toggleCartWidgetHandler} />
      <div id="menu-cart" className={toggleCartWidget ? 'sidebar open' : 'sidebar'}>
        <div className="cart-widget">
          <CartListing toggleCartWidgetHandler={toggleCartWidgetHandler} />
        </div>
  
        { customer.customer_id &&
        <div className="cart__cta txt-align">
          <Link to="/checkout">
            <Button
              text="CHECKOUT"
              onClick={() => true}
            >  
            </Button>
          </Link>
        </div>}
        { !customer.customer_id &&
          <div className="cart__cta txt-align">
          <Link to="/">
            <Button
              text="PLEASE LOGIN TO CHECKOUT"
              onClick={() => true}
            >  
            </Button>
          </Link>
        </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    cart: [],
  customer: state.customer.customer
  }
};

export default connect(mapStateToProps, null)(CartWidget);
