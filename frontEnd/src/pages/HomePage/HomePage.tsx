import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components";
export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar />
            <div className="homePageContainer">
                <div className="projectGroup">
                    <h1>Your Projects</h1>
                    <div className="projectBoxContainer">
                        <ul id="scroller">
                            <div className="projectBox"></div>
                            <div className="projectBox"></div>
                            <div className="projectBox"></div>
                            <div className="projectBox"></div>
                            <div className="projectBox"></div>
                            <div className="projectBox"></div>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
