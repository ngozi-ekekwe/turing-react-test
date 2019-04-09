import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InputWrapper from './Input';
import Button from './Button';
import { loginFields } from '../../helpers/auth'
import { loginCustomerSuccess, loginCustomerFailure } from '../../redux/actions/customers';
import Router from 'next/router';
import { loginCustomer } from '../../services/api';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      loading: false,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick = () => {
    this.setState({ loading: true })
    const { dispatch } = this.props;
    loginCustomer(this.state).then((res) => {
      if(res.user) {
        localStorage.setItem('user-key', res.accessToken)
        dispatch(loginCustomerSuccess(res.user))
        Router.push('/')
      }
      else {
        this.setState({ loading: false })
        return dispatch(loginCustomerFailure(res))
      }
    })
  }

  render() {
    const { error, customer } = this.props;
    const { loading } = this.state;
    return (
      <div className="container">
        {error && error.error && <p className="has-error">{error && error.error.message}</p>}
        <div>
          {
            loginFields.map((field, i) => {
              return (
                <InputWrapper key={i}>
                  <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                </InputWrapper>
              )
            })
          }
          <div className="mt-4 txt-align">
            <Button text="SIGN IN" onClick={this.onClick} loading={loading} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    customer: state.customer.customer,
    error: state.customer.error
  }
}

export default connect(mapStateToProps, null)(Login);