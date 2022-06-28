import React from "react";
import "../style_FormLogin/FormLogin.css";

import { Routes, Route, Link } from "react-router-dom";

import Login from "../pages_Login/Login";
import Logout from "../pages_Login/Logout";
import Register from "../pages_Login/Register";


const formLogin = () => {
  return (
    <div className="FormLogin">
      <div className="navbar-login">
        <Link to="/Login"> Login </Link>
        <Link to="/Register"> Registrati </Link>
        <Link to="/Logout"> Logout </Link>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default formLogin;
