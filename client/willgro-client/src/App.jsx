/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BuyModal from "./components/BuyModal/BuyModal";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />/
          <Route path="/product" element={<ProductPage />} />/
          <Route path="/product/:id" element={<BuyModal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
