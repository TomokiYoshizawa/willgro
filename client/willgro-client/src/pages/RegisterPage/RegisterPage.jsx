import React, { useState } from "react";
import { Link } from "react-router-dom";
import authApi from "../../api/authApi";

function RegisterPage() {
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

    if (error) {
      return;
    }

    // Implement your API call here
    try {
      const res = await authApi.register({
        username,
        email,
        password,
        confirmPassword,
      });
      localStorage.setItem("token", res.data.token);
      console.log("Register successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__form-container">
          <form className="register__form" onSubmit={handleSubmit}>
            <div className="register__form--group">
              <label htmlFor="username" className="register__form--label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="register__form--input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {usernameErrText && (
                <div className="error-text">{usernameErrText}</div>
              )}
            </div>

            <div className="register__form--group">
              <label htmlFor="email" className="register__form--label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="register__form--input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailErrText && <div className="error-text">{emailErrText}</div>}
            </div>

            <div className="register__form--group">
              <label htmlFor="password" className="register__form--label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="register__form--input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordErrText && (
                <div className="error-text">{passwordErrText}</div>
              )}
            </div>

            <div className="register__form--group">
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
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmErrText && (
                <div className="error-text">{confirmErrText}</div>
              )}
            </div>

            <div className="register__form--group">
              <button type="submit" className="register__form--submit">
                Register
              </button>
            </div>
          </form>
          <Link to="/login" className="register__form--link">
            <button>Do you have an account? Login here</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
