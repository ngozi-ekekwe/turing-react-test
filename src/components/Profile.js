import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  componentDidMount() {
    this.props.getAllShippingRegions()
  }

  updateAddress = () => {

  }

  render() {
    console.log(this.props.shipment, 'I got called')
    const { shipment } = this.props;
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
        <InputWrapper>
          <select className="custom-select" id="inputGroupSelect01">
          {shipment && shipment.map((shi) => {
            return <option value={shi.shipping_region_id}>{shi.shipping_region}</option>
          })}
          </select>
        </InputWrapper>

        <button className="btn">UPDATE PROFILE</button>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    customer: state.customer.customer,
    shipment: state.shipment.shipping_regions

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllShippingRegions: () => dispatch({type: 'GET_ALL_REGIONS'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
