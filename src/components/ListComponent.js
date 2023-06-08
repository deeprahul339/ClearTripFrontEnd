import React, { useState } from "react";
import profileIcon from "../assets/profile_icon.png";

import "../styles/listComponent.css";

const ListComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const listData = [
    {
      id: 1,
      displayName: "Flights",
    },
    {
      id: 2,
      displayName: "Hotels",
    },
    {
      id: 3,
      displayName: "Bus",
    },
  ];

  //   const getItem=(id)=>{
  //     const listData.filter((item)=>item.id)
  //   }
  return (
    <div className="listParentContainer">
      {listData.map((item) => (
        <span
          className={
            selectedItem === item.id ? "listItemSelected" : "listItems"
          }
          key={item.id}
          onClick={() => handleItemClick(item.id)}
        >
          {item.displayName}
        </span>
      ))}
    </div>
  );
};

export default ListComponent;
