import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
