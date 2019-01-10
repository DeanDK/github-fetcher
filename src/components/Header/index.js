import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" data-test="component-header">
      <Link to="/">
        <img
          src="/images/github_logo.png"
          alt="logo"
          height="60px"
          width="80px"
          className="header__logo"
        />
      </Link>
    </header>
  );
};

export default Header;
