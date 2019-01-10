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
      <nav className="header__navigation-links">
        <div className="header__navigation-links-link-home">
          <Link to="/">Profiles</Link>
        </div>
        <div className="header__navigation-links-link-add">
          <Link to="/repos">Repositories</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
