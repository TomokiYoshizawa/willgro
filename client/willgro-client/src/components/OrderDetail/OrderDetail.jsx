/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useSelector as UseSelector } from "react-redux";
import axios from "axios";

import "./OrderDetail.scss";

function detailInfo({ selectedProduct }) {
  useAuth();
  const user = UseSelector((state) => state.user.value);
  const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const items = [
    {
      name: selectedProduct.id,
      price: selectedProduct.price,
      quantity: 1,
    },
  ];

  //date setting
  const [currentDate, setCurrentDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  const handleCheckout = async (e) => {
    e.preventDefault();

    //sending order details to the server
    const orderData = {
      date: new Date().toISOString().split("T")[0],
      user_id: user._id,
      name: name,
      phone_number: phoneNumber,
      address: address,
      city: city,
      price: selectedProduct.price,
    };

    const orderResponse = await axios.post(`${VITE_SERVER_URL}/orderhistory`, {
      //orderData
      date: currentDate,
      user_id: user._id,
      name,
      email,
      phone_number: phoneNumber,
      address,
      city,
      price: selectedProduct.price,
    });

    // sending a product data to the server
    const items = [
      {
        name: selectedProduct.id,
        price: selectedProduct.price,
        quantity: 1,
      },
    ];
    const response = await fetch(
      `${VITE_SERVER_URL}/payment/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      }
    );
    const { url } = await response.json();
    window.location.href = url;
    console.log(url);
  };

  return (
    <div className="detail">
      <div className="detail__wrapper">
        <form method="post" className="detail__form">
          <div className="detail__form--group detail__form--group--hidden">
            <label htmlFor="name" className="detail__form--label">
              Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              className="detail__form--input"
              value={currentDate}
              readOnly
              required
            />
          </div>

          <div className="detail__form--group detail__form--group--hidden">
            <label htmlFor="name" className="detail__form--label">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="detail__form--input"
              value={selectedProduct.price}
              readOnly
              required
            />
          </div>

          <div className="detail__form--group detail__form--group--hidden">
            <label htmlFor="name" className="detail__form--label">
              User_id
            </label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="detail__form--input"
              value={user._id || ""}
              readOnly
              required
            />
          </div>

          <div className="detail__form--group">
            <label htmlFor="name" className="detail__form--label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="detail__form--input"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="detail__form--group">
            <label htmlFor="email" className="detail__form--label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="detail__form--input"
              // value={user.email || ""}
              // readOnly
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="detail__form--group">
            <label htmlFor="phone" className="detail__form--label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="detail__form--input"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="detail__form--group">
            <label htmlFor="address" className="detail__form--label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="detail__form--input"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="detail__form--group">
            <label htmlFor="city" className="detail__form--label">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="detail__form--input"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="detail__form--group">
            <label htmlFor="zip" className="detail__form--label">
              Zip
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="detail__form--input"
              required
            />
          </div>
          <button
            onClick={handleCheckout}
            className="detail__checkout-btn"
            type="submit"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
}

export default detailInfo;
