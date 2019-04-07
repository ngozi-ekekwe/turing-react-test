import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { connect } from 'react-redux';
import InputWrapper from '../components/Input';


class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  
  render() {
    const { orders} = this.props;
    return (
      <DefaultLayout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              

            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state, props) {
  
}

const mapDispatchToProps = (dispatch) => {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);