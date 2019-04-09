import React, { Fragment, Component } from 'react';
import TopBar from '../components/template/TopBar';
import ProductHeader from '../components/product/ProductHeader';
import ProductReviews from '../components/product/ProductReviews';
import ProductHero from '../components/product/ProductHero';
import Header from '../components/template/Header';

import { getProductById, getProductReviews } from '../services/api';

class Product extends Component {
  static async getInitialProps({ req, query, params}) {
    const { slug } = query;
    const product =  await getProductById(slug)
    const productReviews = await getProductReviews(slug)
    return { slug, product, productReviews };
  }
  render() {
    const { product, productReviews, slug } = this.props;

    return (
      <Fragment>
      <TopBar />
      <Header />
      <ProductHero product={product} slug={slug}/>
    </Fragment>
    )
  }
}

export default Product;