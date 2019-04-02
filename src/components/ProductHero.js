import React from 'react';
import Button from './Button';
import ProductQuantityBox from './ProductQuantityBox';
const imageDirectory = process.env.IMAGE_DIRECTORY

const ProductHero = ({ product }) => {
  return (
    <div className="product-hero">
      <div className="container">
        <div className="product-wrapper">
          <div className="row">
            <div className="col-6">
              <img src={`${imageDirectory}${product.thumbnail}`} />
            </div>
            <div className="col-6">
              <h1 className="name">{product.name}</h1>
              <div className="d-flex">
                <p className="price">${product.price}</p>
                <p className="price discount">${product.discounted_price}</p>
              </div>

              <h3 className="mt-3 mb-3">PRODUCT DETAILS</h3>
              <p className="product-description mb-3">{product.description}</p>
              <ProductQuantityBox />
              <div className="mt-5">
              <Button text="ADD TO CART" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;