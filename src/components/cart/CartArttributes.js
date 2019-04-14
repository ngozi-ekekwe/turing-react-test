import React from 'react';

const renderAttributes = (type, attribute) => {
  switch (type) {
    case 'color': {
      return (
        <button className={`color color-${attribute.toLowerCase()}`}></button>
      )
    }
    default: {
      return ( <h4 className="text-uppercase pb-3 pt-1">
        {attribute}
      </h4> )
    }
  }
}

const CartArttributes = ({ title, attribute, type }) => {
  return (
    <div className="pl-2">
      <p className="mb-3">{title}</p>
      {renderAttributes(type, attribute)}
    </div>
  );
};

export default CartArttributes;