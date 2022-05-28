import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

//! Style Import
import "./ComponentCSS/Navbar.css";

//! Page Imports
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Home from "../Pages/Home";

import * as FaIcons from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <Router>
      <nav>
        <FaIcons.FaBars
          className="hamburger"
          onClick={() => {
            !showNav ? setShowNav(true) : setShowNav(false);
          }}
        />
      </nav>
      {!showNav ? null : (
        <div className="nav-item-container">
          <Link
            className="nav-items"
            to="/"
            onClick={() => {
              setShowNav(false);
            }}
          >
            Home
          </Link>

          <Link
            className="nav-items"
            to="/About"
            onClick={() => {
              setShowNav(false);
            }}
          >
            About
          </Link>
          <Link
            className="nav-items"
            to="/Work"
            onClick={() => {
              setShowNav(false);
            }}
          >
            Work
          </Link>
          <Link
            className="nav-items"
            to="/Contact"
            onClick={() => {
              setShowNav(false);
            }}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              darkMode ? setDarkMode(false) : setDarkMode(true);
            }}
          >
            Dark Mode
          </button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
