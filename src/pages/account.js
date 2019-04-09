import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import OrdersTable from '../components/order/OrdersTable';
import { connect } from 'react-redux';
import InputWrapper from '../components/template/Input';
import { fields } from '../helpers/shipping';
import Profile from '../components/template/Profile';
import { updateCustomerAddress } from '../services/api';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    if (this.props.customer && this.props.customer.customer_id) {
      this.props.getAllOrders(this.props.customer.customer_id)
    }
  }

  updateProfile = (state) => {
    this.setState({
      loading: true
    })
    updateCustomerAddress(state).then((res) => {
      if(res.status === 200) {
        this.setState({
          loading: false
        })
      }
    })
  }

  render() {
    const { orders} = this.props;
    return (
      <DefaultLayout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
            <Profile updateProfile={this.updateProfile} loading={this.state.loading} />
            </div>
            <div className="col-6"><OrdersTable orders={orders} /></div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    orders: state.order.orders,
    customer: state.customer.customer
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllOrders: (customerId) => dispatch({ type: 'GET_ALL_CUSTOMER_ORDERS', customerId }),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);