import React ,{ Fragment}  from 'react';
import Loader from './Loader';

const Button = ({text, onClick, loading}) => {
  return (
    <Fragment>
      { !loading &&
        <button className="btn" onClick={onClick}>
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