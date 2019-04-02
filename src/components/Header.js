import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from '../routes';

class Header extends Component {

  componentDidMount() {
    this.props.getAllDepartments();
  }

  onDepartmentChange = (departmentId) => {
    return this.props.onDepartmentChange(departmentId)
  }

  render() {
    const { departments } = this.props;
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="brand">
                <Link to="/"><a href="/">SHOPMATE</a></Link>
              </div>
            </div>
            <div className="col-4 header-sections">
              <ul className="header-items">
                <li>
                  <button onClick={() => this.onDepartmentChange()}>All</button>
                </li>
              </ul>
              {departments && departments.map((department, i) => {
                return (<ul className="header-items" key={`department-${i}`}>
                  <li>
                    <button onClick={() => this.onDepartmentChange(department.department_id)}>{department.name}</button>
                  </li>
                </ul>)
              })}
            </div>
            <div className="col-4">
              <form className="search-wrapper">
                <input placeholder="..search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    departments: state.department.departments
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllDepartments: () => dispatch({ type: 'GET_ALL_DEPARTMENTS' }),
    onDepartmentChange: (departmentId) => {
      return dispatch({ type: 'SET_CURRENT_DEPARTMENT', departmentId })
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
