import React, { Component } from 'react';
import { connect } from 'react-redux'
// import '../styles/styles.scss';

class Home extends Component {

  componentDidMount() {
    this.props.getAllDepartments()
  }

  render() {
    return <p className='example'>Hello World!</p>
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
