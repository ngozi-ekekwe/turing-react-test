import React, { Fragment } from 'react';

const ProductAtrributes = ({ colorAttributes, sizeAttributes, onSelectAttribute, activeColor, activeSize }) => {
  return (
    <Fragment>
      <div>
        <h3 className="mt-2 mb-4">COLOR</h3>
        <div className="attributes mb-4">
          {colorAttributes && colorAttributes.map((attribute, i) => {
            return (
              <button key={`attribute-${i}`} className={`color color-${attribute.attribute_value.toLowerCase()} ${activeColor === attribute.attribute_value? 'active': ''}`}onClick={()=> onSelectAttribute(attribute.attribute_value, 'color')} ></button>
            )
          })}
        </div>
      </div>
      <div>
      <h3 className="mt-2 mb-4">SIZE</h3>
        <div className="attributes mb-4">
          {sizeAttributes && sizeAttributes.map((attribute, i) => {
            return <button key={`attribute-${i}`} className={`size size-${attribute.attribute_value.toLowerCase()} ${activeSize === attribute.attribute_value ? 'active': ''}`}
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