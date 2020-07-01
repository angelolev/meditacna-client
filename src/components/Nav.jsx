import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/meditacna-hz.svg";

const Nav = () => (
  <nav className="nav">
    <div className="nav__left">
      <div className="nav__icon" id="nav__icon">
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
    <div className="nav__right">
      <div className="nav__phone">
        <a className="phone" href="tel:+5152427570">
          5152427570
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
