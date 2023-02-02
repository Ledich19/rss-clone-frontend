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
        <Link rel="stylesheet" to={`/game`} className="header__link">
          game
        </Link>
        <Link rel="stylesheet" to={`/tutorial`} className="header__link">
        guide
        </Link>
        <Link rel="stylesheet" to={`/404`} className="header__link">
          404
        </Link>
      </ul>
    </nav>
  );
};

export default Header;




