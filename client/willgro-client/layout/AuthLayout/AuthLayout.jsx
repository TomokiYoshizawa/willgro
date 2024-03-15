import React from "react";
import { Outlet } from "react-router-dom";
import willgroLogo from "../../src/assets/image/willgro.jpg";

import "./AuthLayout.scss";

function AuthLayout() {
  return (
    <div className="auth">
      <div className="auth__wrapper">
        <img className="auth__img" src={willgroLogo} alt="img" />
        <div className="auth__desc-box">
          <h4 className="auth__desc">
            Welcome to the WillGro. We will help you to grow your plants!
          </h4>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default AuthLayout;
