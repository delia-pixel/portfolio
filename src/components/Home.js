import React from "react";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="header" className={isMobile ? " header-top" : ""}>
      <div className="container">
        <h1>
          <a href="index.html">Emily Jones</a>
        </h1>
        <a href="index.html" className="mr-auto">
          <img src="../assets/img/logo.png" alt="" className="img-fluid" />
        </a>
        <h2>
          I'm a passionate <span>graphic designer</span> from New York
        </h2>

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
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/resume"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
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

        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
