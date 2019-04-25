import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Link } from '../../routes';
import AuthModal from './Modal';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Dropdown } from 'react-bootstrap';

import RegisterForm from './Register';

import LoginForm from './LoginForm';
import CartWidget from '../cart/CartWidget';
import { ToastContainer, toast } from "react-toastify";
import { logoutCustomer } from '../../redux/actions/customers';

class TopBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      form: null,
      title: null,
      type: null,
      toggleCartWidget: props.toggleCartWidget || false,
    };
  }

  toggleCartWidgetHandler = () => {
    const { toggleCartWidget } = this.state;

    clearAllBodyScrollLocks();
    if (!toggleCartWidget) {
      const element = document.querySelector('#menu-cart');
      disableBodyScroll(element);
    }

    this.setState((prevState) => (
      {
        toggleCartWidget: !prevState.toggleCartWidget,
        toggleSidebar: false,
      }
    ));
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  logout = () => {
    localStorage.clear();
    window.location.href= "/";
  }

  handleShow = (form) => {
    switch (form) {
      case 'register': {
        return this.setState({ show: true, form: <RegisterForm />, title: "Sign Up", type: null });
      }

      case 'login': {
        return this.setState({ show: true, form: <LoginForm />, title: "Login", type: null });
      }

      case 'openCart': {
        return this.setState({ show: true, form: 'hello', title: null, type: 'cart' })
      }

      default: {
        return this.setState({ show: false });
      }
    }
  }
  render() {
    const { show, form, title, type, toggleCartWidget } = this.state
    const { cart, customer } = this.props;
    return (
      <div className={`top-bar ${type}`}>
        <ToastContainer />
        <AuthModal show={show} handleClose={this.handleClose} form={form} title={title} />
        <CartWidget
          toggleCartWidgetHandler={this.toggleCartWidgetHandler}
          toggleCartWidget={toggleCartWidget}
        />
        <div className="container">
          <div className="row">
            <div className="col-4">
              {!customer.customer_id && <div className="top-bar-auth">
                <p>Hi!
                    <span>
                    <button className="top-bar-auth-btn" onClick={() => this.handleShow('register')}>sign up</button>
                  </span> or
                    <span>
                    <button className="top-bar-auth-btn" onClick={() => this.handleShow('login')}>login</button>
                  </span>
                </p>
              </div>}
              {
                customer.customer_id &&
                <div className="dropdown-custom-button">
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Hello! {customer.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="txt-align">
                      <button className="dropdown-button" onClick={() =>Router.push('/account')}>My Account</button>
                    </div>
                    <div className="txt-align">
                    <button className="dropdown-button" onClick={this.logout}>Logout</button>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
              }
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
                  <div className="d-flex shopping-cart" onClick={this.toggleCartWidgetHandler}>
                    <img src="/static/black.png" />
                    <div className="cart-badge">{cart}</div>
                  </div>
                  <p className="pl-3">Your bag: $00.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart.cartItems.length,
    customer: state.customer.customer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutCustomer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
