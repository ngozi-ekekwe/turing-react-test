import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

class ProductLayout extends Component {
  render() {
    const { categories, products, productCount, setPage } = this.props;
    return (
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-2 mt-2">
              <SideBar categories={categories} />
            </div>
            <div className="col-10">
              <Pagination productCount={productCount} setPage={setPage} />
              <div className="row space-evenly">
                {
                  products && products.length > 0 && products.map((product, i) => {
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