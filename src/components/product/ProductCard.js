import React from 'react';
import Button from '../template/Button';
import { Link } from '../../routes'
const imageDirectory = process.env.IMAGE_DIRECTORY

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.product_id}`}>
      <a href={`/product/${product.product_id}`} className="col-lg-3 product-card">
        <div className="thumbnail" style={{ backgroundImage: `url(${imageDirectory}${product.thumbnail})` }}>
        </div>
        <p className="product-name">{product.name}</p>
        <div className="d-flex align-items-center justify-content-center">
          <p className={`product-price ${product.discounted_price !== "0.00" ? 'strike' : ''}`}>${product.price}</p>
          {product.discounted_price !== "0.00" && <p className="product-price discount pl-3">${product.discounted_price}</p>}
        </div>
        <div className="txt-align mt-2 buy-now-button">
          <button className="btn">Buy now</button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;