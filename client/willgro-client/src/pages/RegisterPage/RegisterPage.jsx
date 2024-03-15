import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";

import "./RegisterPage.scss";

function RegisterPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameErrText, setUsernameErrText] = useState("");
  const [emailErrText, setEmailErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmErrText, setConfirmErrText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation error messages
    setUsernameErrText("");
    setEmailErrText("");
    setPasswordErrText("");
    setConfirmErrText("");

    // Form validation logic here
    let error = false;

    if (!username) {
      error = true;
      setUsernameErrText("Username is required");
    }
    if (!email) {
      error = true;
      setEmailErrText("Email is required");
    }
    if (!password) {
      error = true;
      setPasswordErrText("Password is required");
    }
    if (!confirmPassword) {
      error = true;
      setConfirmErrText("Confirm password is required");
    }
    if (password !== confirmPassword) {
      error = true;
      setConfirmErrText("Passwords must match");
    }

    if (error) return;

    // Implement your API call here
    try {
      const res = await authApi.register({
        username,
        email,
        password,
        confirmPassword,
      });
      localStorage.setItem("token", res.token);
      console.log("Register successfully");
      navigate("/");
    } catch (error) {
      //   console.error(error);
      const errors = error.data.errors;
      //   console.error(errors);
      errors.forEach((err) => {
        if (err.path === "username") {
          setUsernameErrText(err.msg);
        }
        if (err.path === "email") {
          setEmailErrText(err.msg);
        }
        if (err.path === "password") {
          setPasswordErrText(err.msg);
        }
        if (err.path === "confirmPassword") {
          setConfirmErrText(err.msg);
        }
      });
    }
  };

  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__form-container">
          <form className="register__form" onSubmit={handleSubmit}>
            <div className="register__form--group">
              {usernameErrText && (
                <div className="register__err-txt">{usernameErrText}</div>
              )}
              <label htmlFor="username" className="register__form--label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="register__form--input"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="register__form--group">
              {emailErrText && (
                <div className="register__err-txt">{emailErrText}</div>
              )}
              <label htmlFor="email" className="register__form--label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="register__form--input"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="register__form--group">
              {passwordErrText && (
                <div className="register__err-txt">{passwordErrText}</div>
              )}
              <label htmlFor="password" className="register__form--label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="register__form--input"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="register__form--group">
              {confirmErrText && (
                <div className="register__err-txt">{confirmErrText}</div>
              )}
              <label
                htmlFor="confirmPassword"
                className="register__form--label"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="register__form--input"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="register__form--group">
              <button type="submit" className="register__form--submit">
                Register
              </button>
            </div>
          </form>
          <Link to="/login" className="register__form--link">
            <button className="register__btn">
              Do you have an account? Login here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
