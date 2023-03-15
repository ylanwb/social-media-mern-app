import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const navigate = useNavigate();
  const handleSignUpButton = () => {
    navigate("/register");
  };
  return (
    <div className="loginPageContainer">
      <img
        id="logoImg"
        src="https://media.discordapp.net/attachments/1004621319901552710/1078492585586340061/image.png"
      />
      <div className="loginPageContentContainer">
        <div className="loginFormBox">
          <div className="loginTitle">
            <h1>Login</h1>
          </div>
          <form className="loginForm">
            <div className="input-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="Email"
              ></input>
              <span className="error-message"></span>
              <svg
                className="icon icon-success hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>check-circle</title>
                <g fill="none">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>

              <svg
                className="icon icon-error hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>exclamation-circle</title>
                <g fill="none">
                  <path
                    d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="input-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="••••••••"
              ></input>
              <span className="error-message"></span>
              <svg
                className="icon icon-success hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>check-circle</title>
                <g fill="none">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>

              <svg
                className="icon icon-error hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>exclamation-circle</title>
                <g fill="none">
                  <path
                    d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="loginButtonContainer">
              <button>Login</button>
            </div>
            <div className="signUpLinkContainer">
              <span>Don't have an account?</span>
              <span onClick={() => {
                handleSignUpButton();
              }}> Sign up</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
