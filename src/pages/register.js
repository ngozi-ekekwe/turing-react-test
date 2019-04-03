import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthenticationLayout from '../layouts/AuthLayout';
import { signupFields } from '../helpers/auth';
import InputWrapper from '../components/Input';
import Button from '../components/Button';
import { createCustomer } from '../redux/actions/customers';

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
    const { createCustomer } = this.props;
    return createCustomer(this.state)
  }
  render() {
    return (
      <AuthenticationLayout>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h3 className="mb-4">Create an Account</h3>
                {
                  signupFields.map((field) => {
                    return (
                      <InputWrapper>
                        <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                      </InputWrapper>
                    )
                  })
                }
                <div className="mt-4">
                  <Button text="CREATE ACCOUNT" onClick={this.onClick} />
                </div>
            </div>
            <div className="col-4">
              <h3>Register with</h3>
            </div>
          </div>
        </div>
      </AuthenticationLayout>
    )
  }
}

function mapStateToProps(state, props) {

}

const mapDispatchToProps = (dispatch) => {
  return ({
    createCustomer: (customer) => dispatch(createCustomer(customer)),
  });
}

export default connect(null, mapDispatchToProps)(Register);