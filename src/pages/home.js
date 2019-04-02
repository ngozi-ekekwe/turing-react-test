import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layouts/DefaultLayout';

class Home extends Component {

  componentDidMount() {
    this.props.getAllDepartments()
  }

  render() {
    return (
      <DefaultLayout>
        <div></div>
      </DefaultLayout>
    )
  } 
}
 
function mapStateToProps(state, props) {
  return {
    departments: state.department.departments
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllDepartments: () => dispatch({ type: 'GET_ALL_DEPARTMENTS' })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
