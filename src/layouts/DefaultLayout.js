import React, { Fragment } from 'react';
import Header from '../components/Header';
import TopBar from '../components/TopBar';

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