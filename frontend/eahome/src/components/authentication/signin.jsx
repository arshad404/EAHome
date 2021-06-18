import React, { Component } from "react";
import "../../App.css";
import rightImg from "../../assets/sign.jpg";

let handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitter");
};

const Signin = () => {
  return (
    <>
      <div className="row">
        <div className="column login-form">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-screen justify-center items-center space-y-3"
          >
            {/* <span className="login-font py-2 px-10 font-bold text-2xl">
              Login
            </span> */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                autoFocus
                id="username"
                type="text"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="form-input" />
            </div>
            <button className="log-button">Login</button>
          </form>
        </div>
        <div className="column sign-col-img">
          <img className="img-sign" src={rightImg}></img>
        </div>
      </div>
    </>
  );
};

export default Signin;
