import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link nav" to="/products/1">
              painting
            </Link>
          </div>
          <div className="item">
            <Link className="link nav" to="/products/2">
              jewelry
            </Link>
          </div>
          <div className="item">
            <Link className="link nav" to="/">
              home
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link logo" to="/">
            <img src="/img/logo.png" alt="" height="100" />
          </Link>
        </div>
        <div className="right">
          
          <div className="item">
            <Link className="link nav" to="/">
              about
            </Link>
          </div>
          <div className="item">
            <Link className="link nav" to="/">
              contact
            </Link>
          </div>
          <div className="icons">
            <div className="cartIcon">
              <div className="icon"><SearchIcon /></div>
              <div className="icon"><PersonIcon /></div>
              <div className="icon"><ShoppingCartIcon /></div>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
