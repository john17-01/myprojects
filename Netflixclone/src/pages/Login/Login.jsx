import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="loginSection">
      <div className="content">
        <div className="LoginNavbar">
          <img src="../../../assets/logo.png" className="logo" />
          <div className="loginBtns">
            <select className="langBtn">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <button className="signInBtn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
