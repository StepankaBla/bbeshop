import React from "react";
import { useRef } from "react";
import { FaBars, FaSearch, FaShopify, FaStore, FaTimes } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="logo-container">
        <img src="/img/logo2.png" alt="" height="100" />
      </div>
      <div className="icons-container"></div>
      <header>
        <div className="icon-container">
          <Link className=" icon" to="/">
            <FaStore />
          </Link>
          <Link className=" icon" to="/">
            <FaSearch />
          </Link>
        </div>
        <nav ref={navRef}>
          <Link className="link" to="/products/1">
            painting
          </Link>
          <Link className="link" to="/products/2">
            jewelry
          </Link>
          <Link className="link" to="/">
            home
          </Link>
          <Link className="link" to="/">
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
    </>
  );
};

export default Navbar;
