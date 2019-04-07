import React, { Component } from 'react';
import InputWrapper from './Input';
import { fields } from '../helpers/shipping';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address_1: null,
      city: null,
      region: null,
      postal_code: null,
      country: null,
      shipping_region: null
    }
  }

  updateAddress = () => {

  }

  render() {
    return (
      <div>
      {
        fields.map((field, i) => {
          return (
            <InputWrapper key={i}>
              <input placeholder={field.placeHolder} type={field.type} name={field.name} />
            </InputWrapper>
          )
        })
      }
      <button className="btn">UPDATE PROFILE</button>
    </div>
    )
  }
}

export default Profile;