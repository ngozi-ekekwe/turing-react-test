import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Pagination = ({ productCount, setPage, page }) => {
  let items = [];
  let pages = productCount && Math.floor(productCount/20)

  if(productCount%20 !== 0) {
    pages++
  }
  for (let number = 1; number <= pages; number++) {
    items.push(
      <li key={number} className={`page-item ${page === number ? 'active': ''}`}><a className="page-link" onClick={() => setPage(number)}>
        {number}
      </a></li>
    );
  }
  return (
    <Fragment>
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {items}
        </ul>
      </nav>
    </Fragment>
  );
};

function mapStateToProps(state, props) {
  return {
    page: state.product.page,
  };
}

export default connect(mapStateToProps, null)(Pagination);