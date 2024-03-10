/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import willgroLogo from "../../assets/image/willgro.jpg";

import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openToggle = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__container--left">
          <img src={willgroLogo} alt="logo" className="header__logo" />
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
                  <a href="/products" className="header__navigation--link">
                    Products
                  </a>
                </li>
                <li className="header__navigation--item">
                  <a href="/contact" className="header__navigation--link">
                    Contact
                  </a>
                </li>
                <li className="header__navigation--item">
                  <a href="login" className="header__navigation--link">
                    Login
                  </a>
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
