/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import willgroLogo from "../../assets/image/willgro.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/userSlice";

import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const user = useSelector((state) => state.user.value);
  // console.log(user);
  const dispatch = useDispatch();

  const openToggle = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const handleLogout = (event) => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__container--left">
          <a href="/" className="header__navigation-imglink">
            <img src={willgroLogo} alt="logo" className="header__logo" />
          </a>
        </div>
        <div className="header__container--right">
          <nav className={`header__navigation ${isOpen ? "open" : ""}`}>
            <div className="header__navigation--inner">
              <ul className="header__navigation--list">
                <li className="header__navigation--item">
                  <a href="/" className="header__navigation--link">
                    Home
                  </a>
                </li>
                <li className="header__navigation--item">
                  <a href="/product" className="header__navigation--link">
                    Products
                  </a>
                </li>
                <li className="header__navigation--item">
                  {user && Object.keys(user).length > 0 ? (
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                      className="header__navigation--link"
                    >
                      Logout
                    </a>
                  ) : (
                    <a href="/login" className="header__navigation--link">
                      Login
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </nav>
          <div
            className={`header__navigation--toggle-btn ${
              isActive ? "active" : ""
            }`}
            onClick={openToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
