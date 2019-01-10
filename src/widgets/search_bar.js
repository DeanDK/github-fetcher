import React from "react";

const SearchBar = props => (
  <div>
    <input
      type="text"
      placeholder={props.page === "profile" ? "username + enter" : "repos"}
      onChange={e => props.handleName(e)}
      onKeyPress={e => props.dispatchgetProfileAction(e)}
    />
  </div>
);

export default SearchBar;
