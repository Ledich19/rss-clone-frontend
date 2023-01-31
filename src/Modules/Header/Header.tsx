import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav>
      <ul className="header__list">
        <Link rel="stylesheet" to={`/`} className="header__link">
          Home
        </Link>
        <Link rel="stylesheet" to={`/home`} className="header__link">
          home
        </Link>
        <Link rel="stylesheet" to={`/404`} className="header__link">
          404
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
