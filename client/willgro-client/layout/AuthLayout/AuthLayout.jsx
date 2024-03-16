import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import willgroLogo from "../../src/assets/image/willgro.jpg";

import "./AuthLayout.scss";
import authUtils from "../../src/utils/atuhUtils";
import { useEffect } from "react";

function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to home page if user is already logged in
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (isAuth) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

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
