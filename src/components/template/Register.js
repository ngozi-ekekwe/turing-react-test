import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupFields } from '../../helpers/auth';
import InputWrapper from './Input';
import Button from './Button';
import { createCustomer } from '../../services/api';
import Router from 'next/router';
import { createCustomerSuccess, createCustomerFailure } from '../../redux/actions/customers';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
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
    createCustomer(this.state).then((res) => {
      if(res.customer) {
        this.setState({ loading: false })
        localStorage.setItem('user-key', res.accessToken)
        dispatch(createCustomerSuccess(res.customer))
        window.location.href="/";
      }
      else {
        this.setState({ loading: false })
        return dispatch(createCustomerFailure(res))
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
            signupFields.map((field, i) => {
              return (
                <InputWrapper key={i}>
                  <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                </InputWrapper>
              )
            })
          }
          <div className="mt-4 txt-align">
            <Button text="SIGN UP" onClick={this.onClick} loading={loading && !error} />
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

export default connect(mapStateToProps, null)(Register);