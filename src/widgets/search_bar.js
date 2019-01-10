import React from "react";

const SearchBar = props => (
  <div>
    <input
      type="text"
      placeholder={props.page === "profile" ? "name" : "repos"}
    />
  </div>
);

export default SearchBar;
