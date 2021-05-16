import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ handleSearchInput, onSubmit, inputValue }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="character-name">Character Name</label>
    <input
      id="character-name"
      type="text"
      value={inputValue}
      onChange={handleSearchInput}
    />
    <button aria-label="find-quotes">Submit</button>
  </form>
);

Controls.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;