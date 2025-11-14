import React from "react";
import "./assets/css/style.css";

import Main from "./compnents/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./compnents/Register";
import Login from "./compnents/Login";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
