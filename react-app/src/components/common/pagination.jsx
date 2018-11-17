import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          {pages.map(page => {
            return (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  onClick={() => onPageChange(page)}
                  href="#1"
                  className="page-link"
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
