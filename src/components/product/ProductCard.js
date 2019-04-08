import React from 'react';
import Button from '../template/Button';
import { Link } from '../../routes'
const imageDirectory = process.env.IMAGE_DIRECTORY

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.product_id}`}>
      <a href={`/product/${product.product_id}`} className="col-3 product-card">
        <div className="thumbnail" style={{backgroundImage: `url(${imageDirectory}${product.thumbnail})`}}>
        </div>
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
        <div className="txt-align mt-4">
          <Button text="Buy now" />
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;