import React from 'react';
import { Link } from '../routes';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="top-bar-auth">
              <p>Hi! 
                <span>
                <Link to="/"><a href="/">sign in</a></Link>
                </span> or  
                <span>
                  <Link to="/"><a href="/">Register</a></Link>
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
          <div className="col-4">3</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;