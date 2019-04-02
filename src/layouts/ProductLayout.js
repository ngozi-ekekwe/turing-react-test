import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import ProductCard from '../components/ProductCard';

class ProductLayout extends Component {
  render() {
    const { categories, products } = this.props;
    console.log(products.rows)
    return (
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <SideBar categories={categories} />
            </div>
            <div className="col-9">
              <div className="row space-evenly">
                {
                  products.count > 1 && products.rows.map((product, i) => {
                    return <ProductCard product={product} key={`product-${i}`} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductLayout;