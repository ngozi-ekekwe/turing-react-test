import React from 'react';
import Button from '../components/Button';
const imageDirectory = process.env.IMAGE_DIRECTORY

const ProductCard = ({ product }) => {
  return (
    <div className="col-3 product-card">
      <div className="thumbnail">
        <img src={`${imageDirectory}${product.thumbnail}`} />
      </div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <div className="txt-align mt-4">
        <Button text="Buy now" />
      </div>
    </div>
  );
};

export default ProductCard;