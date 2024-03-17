/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useSelector as UseSelector } from "react-redux";

function OrderDetail() {
  useAuth();
  const user = UseSelector((state) => state.user.value);
  console.log(user);

  //date setting
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0]; // YYYY-MM-DD形式に整形
    setCurrentDate(formattedDate);
  }, []);

  const handleCheckout = (e) => {};

  return (
    <div className="client">
      <div className="client__wrapper">
        <form action="submit" className="client__form">
          <div className="client__form--group client__form--group--hidden">
            <label htmlFor="name" className="client__form--label">
              Date
            </label>
            <input
              type="text"
              id="date"
              name="user_id"
              className="client__form--input"
              value={currentDate}
              readOnly
              required
            />
          </div>

          <div className="client__form--group client__form--group--hidden">
            <label htmlFor="name" className="client__form--label">
              User_id
            </label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="client__form--input"
              value={user._id || ""}
              readOnly
              required
            />
          </div>

          <div className="client__form--group">
            <label htmlFor="name" className="client__form--label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="client__form--input"
              // value={user.username}
              required
            />
          </div>
          <div className="client__form--group">
            <label htmlFor="email" className="client__form--label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="client__form--input"
              // value={user.email}
              required
            />
          </div>
          <div className="client__form--group">
            <label htmlFor="phone" className="client__form--label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="client__form--input"
              required
            />
          </div>
          <div className="client__form--group">
            <label htmlFor="address" className="client__form--label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="client__form--input"
              required
            />
          </div>
          <div className="client__form--group">
            <label htmlFor="city" className="client__form--label">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="client__form--input"
              required
            />
          </div>
          <div className="client__form--group">
            <label htmlFor="zip" className="client__form--label">
              Zip
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="client__form--input"
              required
            />
          </div>
        </form>
        <button
          onClick={handleCheckout}
          className="payment__checkout-btn"
          type="submit"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
