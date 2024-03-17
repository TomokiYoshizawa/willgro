/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BuyModal from "./components/BuyModal/BuyModal";
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import OrderPage from "./pages/OrderPage/OrderPage";

import "./App.scss";
import AuthLayout from "../layout/AuthLayout/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />/
          <Route path="/product" element={<ProductPage />} />/
          <Route path="/product/:id" element={<BuyModal />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
