import React from "react";
import "./RestaurantHeader.css";
import resHeaderImg from "../../../images/fizza.jpg";

const RestaurantHeader = () => {
  return (
    <div className="RestaurantHeader">
      <img src={resHeaderImg} alt="" className="w-100" />
    </div>
  );
};

export default RestaurantHeader;
