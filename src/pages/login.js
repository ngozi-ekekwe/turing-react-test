import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AuthenticationLayout from '../layouts/AuthLayout';
import InputWrapper from '../components/Input';
import Button from '../components/Button';
import { loginFields } from '../helpers/auth'
import { loginCustomer } from '../redux/actions/customers';


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
    return loginCustomer(this.state)
  }

  render() {
    return (
      <AuthenticationLayout>
        <div className="container">
          <div className="row justify-content-center txt-align">
            <div className="col-6">
              <h3 className="mb-4">My Account Log In</h3>
                {
                  loginFields.map((field) => {
                    return (
                      <InputWrapper>
                        <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                      </InputWrapper>
                    )
                  })
                }
                <div className="mt-4 txt-align">
                  <Button text="LOG IN SECURELY" onClick={this.onClick} />
                </div>
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
    loginCustomer: (customer) => dispatch(loginCustomer(customer)),
  });
}

export default connect(null, mapDispatchToProps)(Login);