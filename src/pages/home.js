import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductLayout from '../layouts/ProductLayout';
import LandingPage from '../components/template/LandingPage'
import { getAllCategories } from '../selectors/categories';
import { getAllProducts } from '../selectors/products';
import Loader from '../components/template/Loader';

export class Home extends Component {

  componentDidMount() {
    this.props.getAllDepartments()
    this.props.getAllCategoies()
    this.props.getAllProducts()
  }

  componentWillMount() {
    this.props.resetFilter()
  }

  setPage = (page) => {
    this.props.setProductPage(page)
  }

  render() {
    const { categories, products } = this.props;
    const count = products.count && products.count.count ? products.count.count : products.count
    return (
      <DefaultLayout>
        <LandingPage />
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
    departments: state.department.departments,
    categories: getAllCategories(state, props),
    products: getAllProducts(state, props)
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllDepartments: () => dispatch({ type: 'GET_ALL_DEPARTMENTS' }),
    getAllCategoies: () => dispatch({ type: 'GET_ALL_CATEGORIES' }),
    getAllProducts: () => dispatch({ type: 'GET_ALL_PRODUCTS' }),
    setProductPage: (page) => dispatch({type: 'SET_PAGE',  page}),
    resetFilter: () => dispatch({type: 'RESET_FILTER'})
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
