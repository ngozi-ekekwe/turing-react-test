import React ,{ Fragment}  from 'react';
import Loader from './Loader';

const Button = ({text, onClick, loading, disabled = false}) => {
  return (
    <Fragment>
      { !loading &&
        <button className="btn" onClick={onClick} disabled={disabled}>
        {text}
      </button>
      }
      {
        loading &&
        <Loader />
      }
    </Fragment>
    
    
  );
};

export default Button;