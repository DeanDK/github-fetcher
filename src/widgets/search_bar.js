import React from "react";
import PropTypes from "prop-types";

const SearchBar = props => (
  <div className="search_bar" data-test="component-searchbar">
    <input
      type="text"
      placeholder="username + enter"
      onChange={e => props.handleName(e)}
      onKeyPress={e => props.dispatchgetProfileAction(e)}
    />
  </div>
);

SearchBar.propTypes = {
  dispatchgetProfileAction: PropTypes.func.isRequired
};

export default SearchBar;
