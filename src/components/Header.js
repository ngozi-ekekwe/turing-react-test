import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from '../routes';

class Header extends Component {

  componentDidMount() {
    this.props.getAllDepartments();
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
              {departments && departments.map((department, i) => {
                return (<ul className="header-items" key={`department-${i}`}>
                  <Link to="/"><a href="/">{department.name}</a></Link>
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
