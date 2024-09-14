import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <form className="filter-form">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Todos</option>
        <option value="#Front-End">Front-End</option>
        <option value="#Back-End">Back-End</option>
        <option value="#Full-Stack">Full-Stack</option>
        <option value="#UX/UI">UX/UI</option>
      </select>
    </form>
  );
};

Filter.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Filter;
