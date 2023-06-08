import React from "react";

import homeIcon from "../assets/home_icon.png";

import "../styles/detailsContainer.css";

const DetailsContainer = () => {
  const navText = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 1,
      text: "MyTrips",
    },
    {
      id: 1,
      text: "Offer",
    },
    {
      id: 1,
      text: "Account",
    },
  ];

  const userDetails = [
    {
      id: 1,
      primaryTextOne: "Search for city area or hotel",
      primaryTextTwo: "",
      secondaryTextOne: "Goa",
      secondaryTextTwo: "",
    },
    {
      id: 1,
      primaryTextOne: "Check-in",
      primaryTextTwo: "Check-out",
      secondaryTextOne: "Tue, 06 Jun",
      secondaryTextTwo: "Wed, 07 Jun",
    },
    {
      id: 3,
      primaryTextOne: "Travellers",
      primaryTextTwo: "",
      secondaryTextOne: "1 room, 2 adults",
      secondaryTextTwo: "",
    },
  ];

  return (
    <>
      <div className="mainParentContainer">
        {userDetails.map((data) => (
          <div className="detailsParent">
            <div className="primaryContainer">
              <span className="primaryText">{data.primaryTextOne}</span>
              <span className="primaryText">{data.primaryTextTwo}</span>
            </div>
            <div className="secondaryContainer">
              <span className="secondaryText">{data.secondaryTextOne}</span>
              <span className="secondaryText">{data.secondaryTextTwo}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ paddingInline: "15px" }}>
        <button className="bottomButton">Search hotels</button>
      </div>
      <div className="bottom-Container">
        <p className="recentText">Recently Searched</p>
        <p className="recentInfo">Goa, 2 ADULTS</p>
        <div className="dateText">
          <p>Tue &nbsp;-&nbsp; Wed </p>
          <p>05 Jun &nbsp; 07 Jun</p>
        </div>
      </div>
      <div className="navBarParent">
        {navText.map((item) => (
          <div key={item.id} className="bottomNavBar">
            <img src={homeIcon} alt="home icon" height={30} width={30} />
            <p style={{ textTransform: "uppercase" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsContainer;
