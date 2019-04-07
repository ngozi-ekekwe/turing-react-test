import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import OrdersTable from '../components/OrdersTable';
import InputWrapper from '../components/Input';
import { fields } from '../helpers/shipping';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultLayout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              {
                fields.map((field, i) => {
                  return (
                    <InputWrapper key={i}>
                      <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                    </InputWrapper>
                  )
                })
              }
            </div>
            <div className="col-6"><OrdersTable /></div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Account;