import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from '../routes';

class Header extends Component {

  componentDidMount() {
    this.props.getAllDepartments();
  }

  render() {
    const { departments } = this.props;
    console.log(departments)
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="brand">
                <Link to="/">SHOPMATE</Link>
              </div>
            </div>
            <div className="col-4 header-sections">
              {departments && departments.map((department) => {
                return (<ul className="header-items">
                  <Link>{department.name}</Link>
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
    getAllDepartments: () => dispatch({ type: 'GET_ALL_DEPARTMENTS' })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
