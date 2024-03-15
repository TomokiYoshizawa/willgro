import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";

import "./LoginPage.scss";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation error messages
    setEmailErrText("");
    setPasswordErrText("");

    // Form validation logic here
    let error = false;

    if (!email) {
      error = true;
      setEmailErrText("Email is required");
    }
    if (!password) {
      error = true;
      setPasswordErrText("Password is required");
    }

    if (error) return;

    // Implement your API call here
    try {
      const res = await authApi.login({
        email,
        password,
      });
      localStorage.setItem("token", res.token);
      console.log("login successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      const errors = error.data.errors;
      console.error(errors);
      errors.forEach((err) => {
        if (err.param === "email") {
          setEmailErrText(err.msg);
        }
        if (err.param === "password") {
          setPasswordErrText(err.msg);
        }
      });
    }
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__form-container">
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__form--group">
              <label htmlFor="email" className="login__form--label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="login__form--input"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              {emailErrText && (
                <div className="login__err-txt">{emailErrText}</div>
              )}
            </div>

            <div className="login__form--group">
              <label htmlFor="password" className="login__form--label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="login__form--input"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              {passwordErrText && (
                <div className="login__err-txt">{passwordErrText}</div>
              )}
            </div>

            <div className="login__form--group">
              <button type="submit" className="login__form--submit">
                Login
              </button>
            </div>
          </form>
          <Link to="/register" className="login__form--link">
            <button className="login__btn">
              You don't have an account? Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
