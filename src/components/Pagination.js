import React, { Fragment } from 'react';

const Pagination = ({ productCount, setPage }) => {
  let items = [];
  let pages = productCount && Math.floor(productCount/20)

  if(productCount%20 !== 0) {
    pages++
  }
  for (let number = 1; number <= pages; number++) {
    items.push(
      <li className="page-item"><a className="page-link" onClick={() => setPage(number)}>
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

export default Pagination;