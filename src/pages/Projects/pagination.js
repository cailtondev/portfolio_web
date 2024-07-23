import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = ({ totalPages, currentPage, paginate }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-end">
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          >
            <Link
              to={'#'}
              className="page-link"
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
