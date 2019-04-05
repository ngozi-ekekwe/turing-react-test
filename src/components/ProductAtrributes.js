import React, { Fragment } from 'react';

const ProductAtrributes = ({ colorAttributes, sizeAttributes, onSelectAttribute }) => {
  return (
    <Fragment>
      <div>
        <h3 className="mt-2 mb-4">COLOR</h3>
        <div className="attributes mb-4">
          {colorAttributes && colorAttributes.map((attribute) => {
            return (
              <button className={`color color-${attribute.attribute_value.toLowerCase()}`}onClick={()=> onSelectAttribute(attribute.attribute_value, 'color')} ></button>
            )
          })}
        </div>
      </div>
      <div>
      <h3 className="mt-2 mb-4">SIZE</h3>
        <div className="attributes mb-4">
          {sizeAttributes && sizeAttributes.map((attribute) => {
            return <button className={`size size-${attribute.attribute_value.toLowerCase()}`}
            onClick={()=> onSelectAttribute(attribute.attribute_value, 'size')}>

              {attribute.attribute_value}
            </button>
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductAtrributes;