import React, { Fragment } from 'react';
import Header from '../components/template/Header';
import TopBar from '../components/template/TopBar';

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <TopBar />
      <Header />
      {children}
    </Fragment>
  );
};

export default DefaultLayout;