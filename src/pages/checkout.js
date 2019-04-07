import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { connect } from 'react-redux';
import InputWrapper from '../components/Input';
import CartListing from '../components/CartListing';
import Profile from '../components/Profile';


class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    }
  }

  componentDidMount() {
  }

  renderForm() {
    const { currentStep } = this.state;
    switch(currentStep) {
      case 1: {
        return <Profile />
      }

      case 2 : {
        return <CartListing />
      }

      case 3: {
        return 'payment'
      }

      case 4: {
        return 'success'
      }
    }
  }

  moveToNextStep = () => {
    this.setState({
      currentStep: this.state.currentStep + 1
    })
  }

  
  render() {
    const { orders} = this.props;
    return (
      <DefaultLayout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              {this.renderForm()}
              <div>
                <button className="btn mt-3" onClick={this.moveToNextStep}>CONTINUE</button>
              </div>
            </div>
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