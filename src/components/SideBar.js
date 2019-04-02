import React, { Fragment } from 'react';

const SideBar = ({ categories }) => {
  return (
    <Fragment>
      <p className="categories">categories</p>
      <div className="category-listing">
        {
          categories && categories.length > 0 && categories.map((category, i) => {
            return (
              <ul className="category-list" key={`category-${i}`}>
                <li className="category-items"><input type="checkbox" /><p>{category.name}</p></li>
              </ul>
            )
          })
        }
      </div>
    </Fragment>
  );
};

export default SideBar;