import React, { useState, useEffect } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
export const RegisterPage = () => {
  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate("/login");
  };
  return (
    <div className="registerContainer">
      <img
        id="logoImg"
        src="https://media.discordapp.net/attachments/1004621319901552710/1078492585586340061/image.png"
      />
      <div className="registerPageContentContainer">
        <div className="registerFormBox">
          <div className="registerTitle">
            <h1>Register</h1>
          </div>
          <form className="registerForm">
            <div className="inputGroupOne">
              <div className="input-group">
                <label htmlFor="firstName" className="label">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="input"
                  placeholder="First Name"
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
                <label htmlFor="lastName" className="label">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="input"
                  placeholder="Last Name"
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
            </div>
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
            <div className="registerButtonContainer">
              <button>Create New Account</button>
            </div>
            <div className="signUpLinkContainer">
              <span>Already have an account?</span>
              <span onClick={() => {
                handleLoginButton();
              }}> Login</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
