import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '../../routes';
import Loader from './Loader';

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  setCategory = (e) => {
    if (e.target.id === this.state.checked) {
      return this.setState({
        checked: false
      })
    }
    this.setState({
      checked: e.target.id
    })
    return this.props.setCategory(e.target.name)
  }

  render() {
    const { categories } = this.props;
    const { checked } = this.state;
    return (
      <Fragment>
        <p className="categories">categories</p>
        {categories && categories.length <= 0 && <Loader />}
        <div className="category-listing">
          {
            categories && categories.length > 0 && categories.map((category, i) => {
              return (
                <ul className="category-list" key={`category-${i}`}>
                  <li className="category-items"><input type="checkbox" name={category.category_id} onChange={this.setCategory} id={category.name} checked={checked === category.name ? true : false} /><label htmlFor={category.name} defaultChecked={false}>{category.name}</label>
                  </li>
                </ul>
              )
            })
          }
        </div>
      </Fragment>
    )
  }
}


function mapStateToProps(state, props) {
  return {
    departments: state.department.departments,
    searchResults: state.product.searchResults.rows
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setCategory: (category) => dispatch({ type: 'SET_CATEGORY', category }),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);