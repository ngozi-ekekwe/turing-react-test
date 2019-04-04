import React from 'react';
import { Link } from '../routes';
import ShoppingCartIcon from './ShoppingCart';

const TopBar = ({ type}) => {
  return (
    <div className={`top-bar ${type}`}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="top-bar-auth">
              <p>Hi! 
                <span>
                <Link to="/login"><a href="/">sign in</a></Link>
                </span> or  
                <span>
                  <Link to="/register"><a href="/">Register</a></Link>
                </span> 
              </p>
            </div>
          </div>
          <div className="col-4">
            <ul className="">
              <Link to="/"><a href="/">Daily Deals</a></Link>
              <Link to="/"><a href="/">Sell</a></Link>
              <Link to="/"><a href="/">Help & Contact</a></Link>
            </ul>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8 d-flex align-center">
                <div className="d-flex">
                  <img src="/static/black.png"/>
                  <div className="cart-badge">0</div>
                </div>
                <p className="pl-3">Your bag: $16.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;