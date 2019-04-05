import React, { Component } from 'react';
import { Link } from '../routes';
import AuthModal from './Modal';

import RegisterForm from './Register';

import LoginForm from './LoginForm';
class TopBar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      form: null
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = (form) => {
    switch(form) {
      case 'register': {
        return this.setState({ show: true, form: <RegisterForm /> });
      }

      case 'login': {
        return this.setState({ show: true, form: <LoginForm /> });
      }

      default: {
        return this.setState({ show: false });
      }
    }
  }
  render() {
    const { show, form } = this.state
    const { type } = this.props;
    return (
      <div className={`top-bar ${type}`}>
        <AuthModal show={show} handleClose={this.handleClose} form={form}  />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="top-bar-auth">
                <p>Hi!
                    <span>
                    <button onClick={ () =>this.handleShow('register')}>sign in</button>
                  </span> or
                    <span>
                    <button onClick={() =>this.handleShow('login')}>login</button>
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
                    <img src="/static/black.png" />
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
  }
}

export default TopBar;