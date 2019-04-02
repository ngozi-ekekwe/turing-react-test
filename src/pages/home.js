import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductLayout from '../layouts/ProductLayout';

class Home extends Component {

  componentDidMount() {
    this.props.getAllDepartments()
    this.props.getAllCategoies()
  }

  render() {
    const { categories } = this.props;
    return (
      <DefaultLayout>
        <ProductLayout categories={categories} />
      </DefaultLayout>
    )
  } 
}
 
function mapStateToProps(state, props) {
  return {
    departments: state.department.departments,
    categories: state.category.categories
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllDepartments: () => dispatch({ type: 'GET_ALL_DEPARTMENTS' }),
    getAllCategoies: () => dispatch({ type: 'GET_ALL_CATEGORIES' })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
