import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InputWrapper from './Input';
import { fields } from '../helpers/shipping';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      address_1: null,
      city: null,
      region: null,
      postal_code: null,
      country: null,
      shipping_region: null,
      email: null
    }
  }

  componentDidMount() {
    this.props.getAllShippingRegions()
    this.loadState()
  }

  updateAddress = () => {

  }

  loadState() {
    const { customer } = this.props;
    this.setState({
      address_1: customer.address_1,
      city: customer.city,
      name: customer.name,
      region: customer.region,
      postal_code: customer.postal_code,
      country: customer.country,
      email: customer.email
    })
  }

  onSelectChange = (e) => {
    this.props.getDeliveryOptions(e.target.value)
  }

  onShipmentIdChnage = (e) => {
    this.props.setShippingId(e.target.value)
  }

  render() {
    const { shipment, shipping_options } = this.props;
    return (
      <Fragment>
        <div className="row">
          {
            fields.map((field, i) => {
              return (
                <div className={field.classname}>
                  <label className="form-label">{field.label}</label>
                  <InputWrapper key={i}>
                    <input placeholder={field.placeHolder} type={field.type} name={field.name} defaultValue={this.state[field.name]} />
                  </InputWrapper>
                </div>
              )
            })
          }
        </div>
        <div className="row">
          <div className="col-6">
            <label className="form-label">Regions</label>
            <InputWrapper>
              <select className="custom-select" id="inputGroupSelect01" onChange={this.onSelectChange}>
                {shipment && shipment.map((shi) => {
                  return <option value={shi.shipping_region_id}>{shi.shipping_region}</option>
                })}
              </select>
            </InputWrapper>
          </div>
          <div className="col-6">
            <label className="form-label">Delivery Options</label>
            <InputWrapper>
              <select className="custom-select" id="inputGroupSelect01" onChange={this.onShipmentIdChnage}>
                {shipping_options && shipping_options.map((shi) => {
                  return <option value={shi.shipping_id}>{shi.shipping_type}</option>
                })}
              </select>
            </InputWrapper>
          </div>

          <button className="btn mt-4">UPDATE PROFILE</button>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    customer: state.customer.customer,
    shipment: state.shipment.shipping_regions,
    shipping_options: state.shipment.shipping

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllShippingRegions: () => dispatch({ type: 'GET_ALL_REGIONS' }),
    setShipmentId: (id) => dispatch({ type: 'SET_SHIPMENT_ID', id }),
    getDeliveryOptions: (id) => dispatch({type: 'GET_SHIPPING_ID', id}),
    setShippingId: (shipping_id) => dispatch({type: 'SET_SHIPPING_ID', shipping_id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
