import React, { Fragment } from 'react';
import ProductHeader from '../components/ProductHeader';
import TopBar from '../components/TopBar';

const AuthenticationLayout = ({ children }) => {
  return (
    <Fragment>
      <ProductHeader />
      {children}
    </Fragment>
  );
};

export default AuthenticationLayout;