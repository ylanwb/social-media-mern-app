import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
  const navigate = useNavigate();
  const handleJoinButton = () => {
    navigate("/login");
  };
  return (
    <div className="landingPageContainer">
      <img
        id="logoImg"
        src="https://media.discordapp.net/attachments/1004621319901552710/1078492585586340061/image.png"
      />
      <div className="landingPageContentContainer">
        <div className="landingPageTextContainer">
          <h1>Sample text</h1>
          <h2>Sample Text Sample Text</h2>
          <button
            onClick={() => {
              handleJoinButton();
            }}
          >
            Join
          </button>
        </div>
        <div className="landingPageImgContainer">
          <img id="landingPageImg" src="https://media.discordapp.net/attachments/1004621319901552710/1081399368030113792/image.png" />
          <img id="landingPageImg" src="https://cdn.discordapp.com/attachments/1004621319901552710/1081400112426791042/image.png" />
          <img id="landingPageMobileImg" src="https://cdn.discordapp.com/attachments/1004621319901552710/1080335320798744607/image.png" /> 
          <img id="landingPageTabletImg" src="https://img.freepik.com/free-vector/two-couples-with-phones-walking-meeting-outside-talking-conversation-speech-bubble-flat-illustration_74855-11155.jpg?w=2000&t=st=1677962362~exp=1677962962~hmac=8109d943d3ba602072f4a5125626ad033583c993bda9e83dcf791d39524efd68" /> 
        </div>
      </div>
    </div>
  );
};
