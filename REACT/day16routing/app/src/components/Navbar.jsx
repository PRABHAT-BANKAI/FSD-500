import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", height: "70px", backgroundColor: "aqua" }}>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/features">
            Features
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
