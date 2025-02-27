import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  let cart = useSelector((state) => state.cart.items);
  let favorites = useSelector((state) => state.favorite.item);
  let Navigate = useNavigate();
  function logout() {
    window.localStorage.removeItem("email");
    Navigate(`/`);
  }
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container">
        <Link to={"/"} className="navbar-brand" href="index.html">
          <img src="/imges/asset 0.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mian"
          aria-controls="mian"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="mian">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/"}
                className="nav-link"
                aria-current="page"
                href="#home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/about"}
                className="nav-link"
                href="#about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/prodcut"}
                className="nav-link"
                href="#products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/contact"}
                className="nav-link"
                href="#Contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="incos">
            <NavLink activeclassname="active" to={"/favorite"}>
              <span>{favorites.length}</span>
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>
            <NavLink activeclassname="active" to={"/cart"}>
              <span>{cart.length}</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>

            {window.localStorage.getItem("email") ? (
              <NavLink className={"user"} activeclassname="active" onClick={() => logout()}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </NavLink>
            ) : (
              <NavLink className={"user"} activeclassname="active" to={"/login"}>
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
