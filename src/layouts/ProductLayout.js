import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';

class ProductLayout extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <SideBar categories={categories} />
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductLayout;