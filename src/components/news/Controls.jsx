import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ handleSearchInput, onSubmit, inputValue }) => (
  <form onSubmit={onSubmit} aria-label="form-input">
    <label htmlFor="article-search">Search Articles</label>
    <input
      aria-label="input-box"
      type="text"
      value={inputValue}
      onChange={handleSearchInput}
    />
    <button aria-label="find-articles">Submit</button>
  </form>
);

Controls.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;