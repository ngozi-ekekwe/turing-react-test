import React, { Fragment } from 'react';

const ProductAtrributes = ({ colorAttributes, sizeAttributes, onClick }) => {
  return (
    <Fragment>
      <div>
        <div className="attributes mb-4">
          {colorAttributes && colorAttributes.map((attribute) => {
            return (
              <button className={`color color-${attribute.attribute_value.toLowerCase()}`}onClick={onClick} ></button>
            )
          })}
        </div>
      </div>
      <div>
        <div className="attributes mb-4">
          {sizeAttributes && sizeAttributes.map((attribute) => {
            return <button className={`size size-${attribute.attribute_value.toLowerCase()}`}>

              {attribute.attribute_value}
            </button>
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductAtrributes;