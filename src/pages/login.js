import React, { Component, Fragment } from 'react';
import AuthenticationLayout from '../layouts/AuthLayout';
import InputWrapper from '../components/Input';
import Button from '../components/Button';
import { loginFields } from '../helpers/auth'


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
    const { loginUser } = this.props;
    return loginUser(this.state)
  }

  render() {
    return (
      <AuthenticationLayout>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h3>My Account Log In</h3>
              <form className="mt-3">
                {
                  loginFields.map((field) => {
                    return (
                      <InputWrapper>
                        <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                      </InputWrapper>
                    )
                  })
                }
                <div className="mt-4">
                  <Button text="LOG IN SECURELY " />
                </div>
              </form>
            </div>
            <div className="col-4">
              <h3>Continue with</h3>
            </div>
          </div>
        </div>
      </AuthenticationLayout>
    )
  }
}

export default Login;