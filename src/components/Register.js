import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupFields } from '../helpers/auth';
import InputWrapper from './Input';
import Button from './Button';
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
        <div className="container">
            <div>
                {
                  signupFields.map((field) => {
                    return (
                      <InputWrapper>
                        <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                      </InputWrapper>
                    )
                  })
                }
                <div className="mt-4 txt-align">
                  <Button text="SIGN UP" onClick={this.onClick} />
                </div>
          </div>
        </div>
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