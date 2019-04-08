import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductLayout from '../layouts/ProductLayout';
import LandingPage from '../components/template/LandingPage'
import { getAllCategories } from '../selectors/categories';
import { getAllProducts } from '../selectors/products';
import Loader from '../components/template/Loader';

class Department extends Component {

  static async getInitialProps({ req, query, params}) {
    const { slug } = query;
    return { slug };
  }

  setPage = (page) => {
    this.props.setProductPage(page)
  }

  render() {
    const { slug, getProductsByDepartment, getCategoriesByDepartment, products, categories } = this.props;
    const count = products.count && products.count.count ? products.count.count : products.count
    getProductsByDepartment(slug);
    getCategoriesByDepartment(slug);
    return (
      <DefaultLayout>
        <LandingPage slug={slug} />
        {products.length <= 0 && <Loader />}
        <ProductLayout 
          categories={categories} 
          products={products.rows} 
          productCount={count}
          setPage={this.setPage}
          />
      </DefaultLayout>
    )
  } 
}
 
function mapStateToProps(state, props) {
  return {
    categories: state.category.categories,
    products: getAllProducts(state, props)
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getProductsByDepartment: (departmentId) => {
      return (dispatch({type: 'GET_PRODUCTS_BY_DEPARTMENT', departmentId}))
    },
    setProductPage: (page) => dispatch({type: 'SET_PAGE',  page}),
    getCategoriesByDepartment: (departmentid) => dispatch({ type: 'GET_CATEGORIES_BY_DEPARTMENT', departmentid})
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);
