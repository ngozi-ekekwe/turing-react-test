import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InputWrapper from './Input';
import { fields } from '../../helpers/shipping';

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
      shipping_region_id: null,
      email: null,
      mob_phone: null
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
      email: customer.email,
      mob_phone: customer.mob_phone
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelectChange = (e) => {
    const { regions } = this.props;
    const region = regions.filter((region) => {
      return region.shipping_region_id.toString() === e.target.value
    })
    this.setState({
      region: region[0].shipping_region,
      shipping_region_id: e.target.value
    })
    this.props.getDeliveryOptions(e.target.value)
  }

  onShipmentIdChange = (e) => {
    console.log(e)
    this.props.setShippingId(e.target.value)
    // this.setState({})
  }

  updateProfile = () => {
    this.props.updateCustomerProfile(this.state)
  }

  render() {
    const { regions, shipping_options } = this.props;
    console.log(this.state)
    return (
      <Fragment>
        <div className="row">
          {
            fields.map((field, i) => {
              return (
                <div className={field.classname}>
                  <label className="form-label">{field.label}</label>
                  <InputWrapper key={i}>
                    <input placeholder={field.placeHolder} type={field.type} name={field.name} defaultValue={this.state[field.name]} onChange={this.onChange} />
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
                {regions && regions.map((shi) => {
                  return <option value={shi.shipping_region_id}>{shi.shipping_region}</option>
                })}
              </select>
            </InputWrapper>
          </div>
          <div className="col-6">
            <label className="form-label">Delivery Options</label>
            {/* <InputWrapper>
              <select className="custom-select" id="inputGroupSelect01" onChange={this.onShipmentIdChange}>
                {shipping_options && shipping_options.map((shi) => {
                  return <option  value={shi.shipping_id}>{shi.shipping_type}</option>
                })}
              </select>
            </InputWrapper> */}
          </div>

          <button className="btn mt-4" onClick={this.updateProfile}>UPDATE PROFILE</button>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    customer: state.customer.customer,
    regions: state.shipment.shipping_regions,
    shipping_options: state.shipment.shipping

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllShippingRegions: () => dispatch({ type: 'GET_ALL_REGIONS' }),
    setShipmentId: (id) => dispatch({ type: 'SET_SHIPMENT_ID', id }),
    getDeliveryOptions: (id) => dispatch({type: 'GET_SHIPPING_ID', id}),
    setShippingId: (shipping_id) => dispatch({type: 'SET_SHIPPING_ID', shipping_id}),
    updateCustomerProfile: (customer) => dispatch({type: 'UPDATE_CUSTOMER_PROFILE', customer})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
