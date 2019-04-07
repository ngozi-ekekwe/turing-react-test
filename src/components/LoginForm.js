import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InputWrapper from './Input';
import Button from './Button';
import { loginFields } from '../helpers/auth'
import { loginCustomer } from '../redux/actions/customers';
import Router from 'next/router';


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
    const { loginCustomer } = this.props;
    loginCustomer(this.state)
  }


  render() {
    const { error, customer} = this.props;
    const { loading } = this.state;
    return (
      <div className="container">
        {error && error.error &&<p className="has-error">{ error && error.error.message}</p>}
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
            <Button text="SIGN IN" onClick={this.onClick} loading={loading && !error } />
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

const mapDispatchToProps = (dispatch) => {
  return ({
    loginCustomer: (customer) => dispatch(loginCustomer(customer)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);