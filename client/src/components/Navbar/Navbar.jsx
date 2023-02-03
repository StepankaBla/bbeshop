import React from "react";
import { useRef } from "react";
import { FaBars, FaSearch, FaStore, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav_container">
      <div className="logo-container">
        <img src="/img/logo2.png" alt="" height="100" />
        <div className="icon-container">
          <Link className=" icon" to="/">
            <FaStore />
          </Link>
          <Link className=" icon" to="/">
            <FaSearch />
          </Link>
        </div>
      </div>
      <header>
        <nav ref={navRef}>
          <motion.span whileHover={{ scale: 1.1 }}>
            <Link className="link" to="/products/1">
              painting
            </Link>
          </motion.span>

          <Link className="link" to="/products/2">
            jewelry
          </Link>
          <Link className="link" to="/">
            home
          </Link>
          <Link className="link" to="/about">
            about
          </Link>
          <Link className="link" to="/">
            contact
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
