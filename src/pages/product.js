import React, { Fragment} from 'react';
import TopBar from '../components/TopBar';
import ProductHeader from '../components/ProductHeader';
import ProductHero from '../components/ProductHero';
const product = () => {
  return (
    <Fragment>
      <TopBar type="inverse" />
      <ProductHeader  />
      <ProductHero />
    </Fragment>
  );
};

export default product;