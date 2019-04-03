import React from 'react';

const ProductReviews = ({ reviews }) => {
  const getFirstReview = reviews[0]
  return (
    <div className="product-reviews mt-4">
      <div className="container">
      <div className="product-wrapper">
        <div className="row">
          <div className="col-6">
            <h3>PRODUCT REVIEWS</h3>
            <div className="row">
              <div className="col-4">
                <p>STARS</p>
                <p>{getFirstReview && getFirstReview.name}</p>
              </div>
              <div className="col-8">
              {getFirstReview  && getFirstReview.review}
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;