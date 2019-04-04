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

  logout = () => {
    const token = localStorage.removeItem('token');
  }

  render() {
    const { departments } = this.props;
    return (
      <div className="header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-7 d-flex align-items-center justify-content-between">
              <div className="">
                <div className="brand">
                  <Link to="/"><a href="/">SHOPMATE</a></Link>
                </div>
              </div>
              <div className=" header-sections">
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
            </div>
            <div className="col-4">
              <form>
                <input name="search" type="text" class="form-control" placeholder="Search" autocomplete="off" />
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
