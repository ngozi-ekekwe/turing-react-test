import React from 'react';

const Button = ({text, onClick}) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;