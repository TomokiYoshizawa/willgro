/* eslint-disable no-unused-vars */
import React from "react";

import willgroLogo from "../../assets/logos/logo.png";
import arrow from "../../assets/logos/arrow.png";

import "./Footer.scss";

function Footer() {
  const clickHome = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer__img-box">
        <img src={willgroLogo} alt="logo" className="footer__img" />
        <img
          src={arrow}
          alt="arrow"
          className="footer__img"
          onClick={clickHome}
        />
      </div>
      <div className="footer__desc-box">
        <p className="footer__desc">Tomoki Yoshizawa</p>
      </div>
    </div>
  );
}

export default Footer;
