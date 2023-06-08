import React from "react";
import profileIcon from "../assets/profile_icon.png";

import "../styles/header.css";

const MainHeader = () => {
  return (
    <div>
      <div className="topContainer">
        <h4> Best deals are on App</h4>
        <p>17% off on first hotel booking using CTAPP</p>
        <button className="button_One"> Switch to app</button>
      </div>
      <div className="bottomContainer">
        <span className="clearTripText">clearTrip</span>

        <button className="loginButton">
          <img
            src={profileIcon}
            className="icon"
            alt="profileIcon"
            height={10}
            width={10}
          />
          Log in
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
