import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from '../../routes';

class ProductHeader extends Component {

  componentDidMount() {
    this.props.getAllDepartments();
  }

  render() {
    const { departments } = this.props;
    return (
      <div className="header product">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="brand">
                <Link to="/"><a href="/">SHOPMATE</a></Link>
              </div>
            </div>
            <div className="col-4 header-sections">
              
            </div>
            <div className="col-4">
              
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductHeader);
