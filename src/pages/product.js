import React, { Fragment, Component } from 'react';
import TopBar from '../components/TopBar';
import ProductHeader from '../components/ProductHeader';
import ProductReviews from '../components/ProductReviews';
import ProductHero from '../components/ProductHero';

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
      <TopBar type="inverse" />
      <ProductHeader  />
      <ProductHero product={product} slug={slug}/>
      {productReviews && <ProductReviews reviews={productReviews} />}
    </Fragment>
    )
  }
}

export default Product;