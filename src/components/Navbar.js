import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="header" className="header-top">
      <div className="container">
        <h1>
          <a href="/">Emily Jones</a>
        </h1>
        <nav
          id="navbar"
          className={isOpen ? " navbar navbar-mobile" : "navbar"}
        >
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/resume">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <i
            onClick={() => setIsOpen(!isOpen)}
            className={
              isOpen
                ? " bi bi-x mobile-nav-toggle"
                : "bi bi-list mobile-nav-toggle"
            }
          ></i>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
