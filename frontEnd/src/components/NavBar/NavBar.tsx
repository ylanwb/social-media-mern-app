import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="NavBarContainer">
                <div>this is nav bar</div>
            </div>
            <div className="sideNavBarContainer">
                <div>side nav bar</div>
            </div>
        </>
    );
};
