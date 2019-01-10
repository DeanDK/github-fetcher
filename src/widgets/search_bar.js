import React from "react";

const SearchBar = props => (
  <div className="search_bar">
    <input
      type="text"
      placeholder="username + enter"
      onChange={e => props.handleName(e)}
      onKeyPress={e => props.dispatchgetProfileAction(e)}
    />
  </div>
);

export default SearchBar;
